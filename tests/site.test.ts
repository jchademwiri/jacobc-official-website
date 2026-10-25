import { describe, expect, it } from 'bun:test';
import {
  SITE_NAME,
  PERSON_JOB_TITLE,
  CONTACT_EMAIL,
  LOCALITY,
  REGION,
  COUNTRY,
  GITHUB_URL,
  LINKEDIN_URL,
  SOCIAL_PROFILES,
} from '../src/lib/site';

describe('site metadata and configuration', () => {
  it('has valid site and profile constants', () => {
    expect(SITE_NAME).toBe('Jacob Chademwiri');
    expect(PERSON_JOB_TITLE).toContain('Tender & Project Manager');
    expect(PERSON_JOB_TITLE).toContain('ISO Implementation Lead');
    expect(PERSON_JOB_TITLE).toContain('AR Manager');
    expect(CONTACT_EMAIL).toBe('hello@jacobc.co.za');
    expect(LOCALITY).toBe('Centurion');
    expect(REGION).toBe('Gauteng');
    expect(COUNTRY).toBe('ZA');
  });

  it('contains valid social profile URLs', () => {
    expect(GITHUB_URL).toBe('https://github.com/jchademwiri');
    expect(LINKEDIN_URL).toBe('https://linkedin.com/in/jchademwiri');
    expect(SOCIAL_PROFILES).toContain(GITHUB_URL);
    expect(SOCIAL_PROFILES).toContain(LINKEDIN_URL);
  });
});
