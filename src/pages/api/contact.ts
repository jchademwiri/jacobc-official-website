import type { APIRoute } from 'astro';
import { looksAutomated, validateContact } from '../../lib/contact';
import { sendContactEmail } from '../../lib/send-contact-email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const form = await request.formData();

    // Silently accept-and-drop automated spam submissions.
    if (looksAutomated(form)) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const result = validateContact(form);
    if (!result.ok) {
      return Response.json({ ok: false, errors: result.errors }, { status: 422 });
    }

    await sendContactEmail(result.data);
    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('[api/contact] send failed', error);
    return Response.json({ ok: false }, { status: 500 });
  }
};
