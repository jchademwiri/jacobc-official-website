export const SITE_NAME = 'Jacob Chademwiri';
export const PERSON_JOB_TITLE = 'Tender & Project Manager, Web Developer';

export const CONTACT_EMAIL = 'hello@jacobc.co.za';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/**
 * The subdomain verified in Resend. Only the `from` address has to live here —
 * `to` and `reply-to` can be any address. Keeping transactional mail on a
 * subdomain is deliberate: its sending reputation stays separate from the
 * root domain used for ordinary correspondence.
 */
export const SENDING_DOMAIN = 'info.jacobc.co.za';
export const DEFAULT_FROM_ADDRESS = `noreply@${SENDING_DOMAIN}`;

export const LOCALITY = 'Centurion';
export const REGION = 'Gauteng';
export const COUNTRY = 'ZA';

export const GITHUB_URL = 'https://github.com/jchademwiri';
export const LINKEDIN_URL = 'https://linkedin.com/in/jchademwiri';

/** Feeds schema.org `sameAs`; keep every profile the site links to in here. */
export const SOCIAL_PROFILES = [GITHUB_URL, LINKEDIN_URL];
