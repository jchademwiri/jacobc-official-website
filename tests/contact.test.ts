import { describe, expect, it } from 'bun:test';
import { looksAutomated, validateContact, HONEYPOT_FIELD, TIMESTAMP_FIELD } from '../src/lib/contact';

describe('contact form validation and anti-spam', () => {
  it('flags honeypot submission as automated bot spam', () => {
    const form = new FormData();
    form.append('name', 'Bot Tester');
    form.append('email', 'bot@example.com');
    form.append('message', 'Spam message');
    form.append(HONEYPOT_FIELD, 'I am a bot');

    expect(looksAutomated(form)).toBe(true);
  });

  it('flags submissions filled in under 2.5 seconds as automated bot spam', () => {
    const form = new FormData();
    form.append('name', 'Fast Submitter');
    form.append('email', 'fast@example.com');
    form.append('message', 'Too fast');
    form.append(HONEYPOT_FIELD, '');
    form.append(TIMESTAMP_FIELD, String(Date.now() - 500)); // only 500ms ago

    expect(looksAutomated(form)).toBe(true);
  });

  it('permits submissions by humans taking reasonable time', () => {
    const form = new FormData();
    form.append('name', 'Human User');
    form.append('email', 'human@example.com');
    form.append('message', 'Genuine inquiry');
    form.append(HONEYPOT_FIELD, '');
    form.append(TIMESTAMP_FIELD, String(Date.now() - 5000)); // 5 seconds ago

    expect(looksAutomated(form)).toBe(false);
  });

  it('validates a correct submission', () => {
    const form = new FormData();
    form.append('name', 'Jacob Chademwiri');
    form.append('email', 'test@jacobc.co.za');
    form.append('projectType', 'tender');
    form.append('message', 'I need help preparing a municipal tender submission.');

    const result = validateContact(form);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.name).toBe('Jacob Chademwiri');
      expect(result.data.email).toBe('test@jacobc.co.za');
      expect(result.data.projectType).toBe('tender');
    }
  });

  it('catches invalid emails and missing required fields', () => {
    const form = new FormData();
    form.append('name', 'J'); // too short
    form.append('email', 'invalid-email');
    form.append('projectType', 'invalid-type');
    form.append('message', 'short');

    const result = validateContact(form);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.projectType).toBeDefined();
    }
  });
});
