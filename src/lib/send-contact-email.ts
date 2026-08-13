import { Resend } from 'resend';
import { CONTACT_EMAIL } from './site';
import { projectLabel, type ContactSubmission } from './contact';

const FROM = import.meta.env.CONTACT_FROM_EMAIL || `Website <noreply@jacobc.co.za>`;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Sends a submission to the site owner. Reply-to is set to the sender so a reply
 * from the inbox goes straight back to them without any copy-pasting.
 */
export async function sendContactEmail(submission: ContactSubmission): Promise<void> {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');

  const { name, email, projectType, message } = submission;
  const label = projectLabel(projectType);

  const { error } = await new Resend(apiKey).emails.send({
    from: FROM,
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
