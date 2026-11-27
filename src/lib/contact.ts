export const FIELDS = ['name', 'organization', 'email', 'message'] as const;
export type Field = (typeof FIELDS)[number];

export interface ContactSubmission {
  name: string;
  organization: string;
  email: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; errors: Partial<Record<Field, string>> };

// Off-screen honeypot + minimum fill time replace a CAPTCHA without adding friction.
export const HONEYPOT_FIELD = 'website_url';
export const TIMESTAMP_FIELD = 'started';
const MIN_FILL_MS = 2500;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: FormDataEntryValue | null): string {
  return typeof value === 'string' ? value.trim() : '';
}

/** Returns true when a submission looks automated and should be silently accepted-and-dropped. */
export function looksAutomated(form: FormData): boolean {
  if (str(form.get(HONEYPOT_FIELD)) !== '') return true;

  const started = Number(str(form.get(TIMESTAMP_FIELD)));
  if (!Number.isFinite(started) || started <= 0) return false;

  return Date.now() - started < MIN_FILL_MS;
}

export function validateContact(form: FormData): ValidationResult {
  const name = str(form.get('name'));
  const organization = str(form.get('organization'));
  const email = str(form.get('email'));
  const message = str(form.get('message'));

  const errors: Partial<Record<Field, string>> = {};

  if (name.length < 2) errors.name = 'Enter your full name.';
  else if (name.length > 100) errors.name = 'Keep this under 100 characters.';

  if (organization.length > 120) errors.organization = 'Keep this under 120 characters.';

  if (email === '') errors.email = 'Enter your email address.';
  else if (!EMAIL.test(email) || email.length > 254) errors.email = 'Enter a valid email address.';

  if (message.length < 10) errors.message = 'Please share a little more detail (at least 10 characters).';
  else if (message.length > 4000) errors.message = 'Keep this under 4000 characters.';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data: { name, organization, email, message } };
}
