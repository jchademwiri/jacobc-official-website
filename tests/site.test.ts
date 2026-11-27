import { describe, expect, it } from 'bun:test';
import {
  SITE_NAME,
  PERSON_JOB_TITLE,
  CONTACT_EMAIL,
  LOCALITY,
  REGION,
  COUNTRY,
  LINKEDIN_URL,
  WEBSITE_URL,
  SOCIAL_PROFILES,
} from '../src/lib/site';

describe('site metadata and configuration', () => {
  it('has canonical v2.0 executive profile constants', () => {
    expect(SITE_NAME).toBe('Jacob Chademwiri');
    expect(PERSON_JOB_TITLE).toBe('Procurement, Tender & Contract Manager');
    expect(CONTACT_EMAIL).toBe('hello@jacobc.co.za');
    expect(LOCALITY).toBe('Centurion');
    expect(REGION).toBe('Gauteng');
    expect(COUNTRY).toBe('ZA');
  });

  it('contains valid executive social profile URLs without side-hustle leakage', () => {
    expect(LINKEDIN_URL).toBe('https://www.linkedin.com/in/jchademwiri');
    expect(WEBSITE_URL).toBe('https://www.jacobc.co.za');
    expect(SOCIAL_PROFILES).toContain(LINKEDIN_URL);
    expect(SOCIAL_PROFILES).toContain(WEBSITE_URL);
  });
});
