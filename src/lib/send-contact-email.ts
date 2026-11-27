import { Resend } from 'resend';
import { render } from '@react-email/render';
import { RESEND_API_KEY, CONTACT_FROM_EMAIL, SENDER_NAME } from 'astro:env/server';
import { CONTACT_EMAIL, DEFAULT_FROM_ADDRESS, SITE_NAME } from './site';
import type { ContactSubmission } from './contact';
import { ContactNotification } from '../emails/ContactNotification';

const FROM_ADDRESS = CONTACT_FROM_EMAIL || DEFAULT_FROM_ADDRESS;
const BRAND_NAME = SENDER_NAME || SITE_NAME;

function safeDisplayName(value: string): string {
  return value.replace(/[<>"\\\r\n,;:]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);
}

export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not set');

  const { name, organization, email, message } = submission;
  const cleanName = safeDisplayName(name) || 'Visitor';
  const cleanOrg = organization ? safeDisplayName(organization) : '';
  const from = `${cleanName} via ${safeDisplayName(BRAND_NAME)} <${FROM_ADDRESS}>`;
  const subjectPrefix = cleanOrg ? `Executive Inquiry (${cleanOrg})` : 'Executive Inquiry';

  const template = ContactNotification({
    name,
    organization,
    email,
    message,
    receivedAt: new Date(),
  });

  const [html, text] = await Promise.all([
    render(template),
    render(template, { plainText: true }),
  ]);

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `${subjectPrefix}: ${cleanName}`,
    html,
    text,
  });

  if (error) throw new Error(`Resend rejected the message: ${error.message}`);
}
