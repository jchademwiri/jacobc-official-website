import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_FROM_EMAIL } from 'astro:env/server';
import { CONTACT_EMAIL, DEFAULT_FROM_ADDRESS } from './site';
import { projectLabel, type ContactSubmission } from './contact';

const FROM_ADDRESS = CONTACT_FROM_EMAIL || DEFAULT_FROM_ADDRESS;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

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
 * name is the sender's, so the inbox reads "Thabo Mokoena via jacobc.co.za"
 * rather than a generic no-reply. Reply-to is the sender's real address, so
 * hitting reply goes straight back to them.
 */
export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  if (!RESEND_API_KEY) throw new Error('RESEND_API_KEY is not set');

  const { name, email, projectType, message } = submission;
  const label = projectLabel(projectType);
  const from = `${safeDisplayName(name)} via jacobc.co.za <${FROM_ADDRESS}>`;

  const { error } = await new Resend(RESEND_API_KEY).emails.send({
    from,
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: `${label} — ${name}`,
    text: `${name} <${email}>\nAbout: ${label}\n\n${message}`,
    html: `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>
<p>About: ${escapeHtml(label)}</p>
<hr />
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  });

  if (error) throw new Error(`Resend rejected the message: ${error.message}`);
}
