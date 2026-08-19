export const PROJECT_TYPES = [
  { value: 'tender', label: 'Tender submission' },
  { value: 'project', label: 'Project coordination' },
  { value: 'website', label: 'Website or web app' },
  { value: 'other', label: 'Something else' },
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number]['value'];

export const FIELDS = ['name', 'email', 'projectType', 'message'] as const;
export type Field = (typeof FIELDS)[number];

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: ProjectType;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactSubmission }
  | { ok: false; errors: Partial<Record<Field, string>> };

// Bots fill every field they find, so a hidden input that stays empty for humans
// is a reliable filter. Paired with a minimum fill time, it replaces a CAPTCHA
// without asking a real person to prove anything.
export const HONEYPOT_FIELD = 'company';
export const TIMESTAMP_FIELD = 'started';
const MIN_FILL_MS = 2500;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const projectValues = PROJECT_TYPES.map((t) => t.value) as readonly string[];

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
  const email = str(form.get('email'));
  const projectType = str(form.get('projectType'));
  const message = str(form.get('message'));

  const errors: Partial<Record<Field, string>> = {};

  if (name.length < 2) errors.name = 'Enter your name.';
  else if (name.length > 100) errors.name = 'Keep this under 100 characters.';

  if (email === '') errors.email = 'Enter your email address.';
  else if (!EMAIL.test(email) || email.length > 254) errors.email = 'Enter a valid email address.';

  if (!projectValues.includes(projectType)) errors.projectType = 'Choose what this is about.';

  if (message.length < 10) errors.message = 'Tell me a little more — at least 10 characters.';
  else if (message.length > 4000) errors.message = 'Keep this under 4000 characters.';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return { ok: true, data: { name, email, projectType: projectType as ProjectType, message } };
}

export function projectLabel(value: ProjectType): string {
  return PROJECT_TYPES.find((t) => t.value === value)?.label ?? value;
}
