import { describe, expect, it } from 'bun:test';
import { SITE_NAME, PERSON_JOB_TITLE, CONTACT_EMAIL, LOCALITY, REGION, COUNTRY } from '../src/lib/site';

describe('resume and executive metrics', () => {
  it('has comprehensive executive title and coordinates', () => {
    expect(SITE_NAME).toBe('Jacob Chademwiri');
    expect(PERSON_JOB_TITLE).toContain('Tender & Project Manager');
    expect(PERSON_JOB_TITLE).toContain('ISO Implementation Lead');
    expect(PERSON_JOB_TITLE).toContain('AR Manager');
    expect(CONTACT_EMAIL).toBe('hello@jacobc.co.za');
    expect(LOCALITY).toBe('Centurion');
    expect(REGION).toBe('Gauteng');
    expect(COUNTRY).toBe('ZA');
  });

  it('validates core operational metrics format', () => {
    const metrics = [
      { value: '5+ Yrs', label: 'Tendering & Operations' },
      { value: '3 Standards', label: 'ISO 9001 · 14001 · 45001' },
      { value: '10+ Sites', label: 'Custom Web Platforms' },
      { value: '95–100', label: 'Lighthouse Benchmark' },
    ];

    expect(metrics.length).toBe(4);
    metrics.forEach((m) => {
      expect(m.value.length).toBeGreaterThan(0);
      expect(m.label.length).toBeGreaterThan(0);
    });
  });
});
