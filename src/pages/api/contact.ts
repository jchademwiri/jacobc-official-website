import type { APIRoute } from 'astro';
import { looksAutomated, validateContact } from '../../lib/contact';
import { sendContactEmail } from '../../lib/send-contact-email';

export const prerender = false;

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 5;
const rateBuckets = new Map<string, number[]>();

function getClientIp(request: Request, clientAddress?: string): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return clientAddress || 'unknown';
}

function isRateLimited(ip: string, now: number): number | null {
  for (const [key, timestamps] of rateBuckets) {
    const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length === 0) rateBuckets.delete(key);
    else rateBuckets.set(key, recent);
  }

  const hits = rateBuckets.get(ip) ?? [];
  if (hits.length >= RATE_MAX_REQUESTS) {
    const retryAfterSec = Math.max(1, Math.ceil((RATE_WINDOW_MS - (now - hits[0])) / 1000));
    return retryAfterSec;
  }

  hits.push(now);
  rateBuckets.set(ip, hits);
  return null;
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  try {
    const contentType = request.headers.get('content-type')?.toLowerCase() ?? '';
    if (
      !contentType.includes('multipart/form-data') &&
      !contentType.includes('application/x-www-form-urlencoded')
    ) {
      return Response.json(
        { ok: false, error: 'Unsupported content type.' },
        { status: 415 }
      );
    }

    const retryAfter = isRateLimited(getClientIp(request, clientAddress), Date.now());
    if (retryAfter !== null) {
      return Response.json(
        { ok: false, error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(retryAfter) } }
      );
    }

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

export const ALL: APIRoute = () =>
  Response.json(
    { ok: false, error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST' } }
  );
