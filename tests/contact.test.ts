import { describe, expect, it } from 'bun:test';
import {
  looksAutomated,
  validateContact,
  HONEYPOT_FIELD,
  TIMESTAMP_FIELD,
} from '../src/lib/contact';

describe('contact form validation and anti-spam', () => {
  it('flags honeypot submission as automated bot spam', () => {
    const form = new FormData();
    form.append('name', 'Bot Tester');
    form.append('email', 'bot@example.com');
    form.append('message', 'Spam message here');
    form.append(HONEYPOT_FIELD, 'https://spam.example');

    expect(looksAutomated(form)).toBe(true);
  });

  it('flags submissions filled in under 2.5 seconds as automated bot spam', () => {
    const form = new FormData();
    form.append('name', 'Fast Submitter');
    form.append('email', 'fast@example.com');
    form.append('message', 'Too fast submission');
    form.append(HONEYPOT_FIELD, '');
    form.append(TIMESTAMP_FIELD, String(Date.now() - 500));

    expect(looksAutomated(form)).toBe(true);
  });

  it('permits submissions by humans taking reasonable time', () => {
    const form = new FormData();
    form.append('name', 'Human User');
    form.append('email', 'human@example.com');
    form.append('message', 'Genuine executive procurement role inquiry.');
    form.append(HONEYPOT_FIELD, '');
    form.append(TIMESTAMP_FIELD, String(Date.now() - 5000));

    expect(looksAutomated(form)).toBe(false);
  });

  it('flags missing, future, and stale (>24h) timestamps as automated', () => {
    const missing = new FormData();
    missing.append(HONEYPOT_FIELD, '');
    expect(looksAutomated(missing)).toBe(true);

    const future = new FormData();
    future.append(HONEYPOT_FIELD, '');
    future.append(TIMESTAMP_FIELD, String(Date.now() + 60_000));
    expect(looksAutomated(future)).toBe(true);

    const stale = new FormData();
    stale.append(HONEYPOT_FIELD, '');
    stale.append(TIMESTAMP_FIELD, String(Date.now() - 25 * 60 * 60 * 1000));
    expect(looksAutomated(stale)).toBe(true);
  });

  it('validates a correct executive inquiry with organization', () => {
    const form = new FormData();
    form.append('name', 'Thabo Mokoena');
    form.append('organization', 'Anglo Mining SA');
    form.append('email', 'thabo@company.co.za');
    form.append('message', 'We would like to discuss a Senior Procurement Manager role in Gauteng.');

    const result = validateContact(form);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.name).toBe('Thabo Mokoena');
      expect(result.data.organization).toBe('Anglo Mining SA');
      expect(result.data.email).toBe('thabo@company.co.za');
    }
  });

  it('catches invalid emails and short messages', () => {
    const form = new FormData();
    form.append('name', 'J');
    form.append('email', 'invalid-email');
    form.append('message', 'short');

    const result = validateContact(form);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeDefined();
    }
  });
});
