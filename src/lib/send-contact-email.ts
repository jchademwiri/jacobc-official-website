import { Resend } from 'resend';
import { render } from '@react-email/render';
import { RESEND_API_KEY, CONTACT_FROM_EMAIL, SENDER_NAME } from 'astro:env/server';
import { CONTACT_EMAIL, DEFAULT_FROM_ADDRESS, SITE_NAME } from './site';
import { projectLabel, type ContactSubmission } from './contact';
import { ContactNotification } from '../emails/ContactNotification';

const FROM_ADDRESS = CONTACT_FROM_EMAIL || DEFAULT_FROM_ADDRESS;
const BRAND_NAME = SENDER_NAME || SITE_NAME;

/**
 * Anything going into the From display name has to survive being parsed as an
 * address, so drop the characters that would terminate it and clamp the length.
 */
function safeDisplayName(value: string): string {
  return value.replace(/[<>"\\\r\n,;:]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 60);
}

/**
 * Sends a submission to the site owner.
 *
 * The From address must be on the domain verified in Resend, but the display
 * name is the sender's, so the inbox reads "Thabo Mokoena via Jacob C" rather
 * than a generic no-reply. Reply-to is the sender's real address, so hitting
 * reply goes straight back to them.
 */
export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not set');

  const { name, email, projectType, message } = submission;
  const label = projectLabel(projectType);
  const from = `${safeDisplayName(name)} via ${safeDisplayName(BRAND_NAME)} <${FROM_ADDRESS}>`;

  const template = ContactNotification({
    name,
    email,
    projectLabel: label,
    message,
    receivedAt: new Date(),
  });

  // Both bodies come from the same template, so the plain-text alternative can
  // never drift from the HTML one.
  const [html, text] = await Promise.all([
    render(template),
    render(template, { plainText: true }),
  ]);

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `${label} — ${name}`,
    html,
    text,
  });

  if (error) throw new Error(`Resend rejected the message: ${error.message}`);
}
