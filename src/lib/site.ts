import { siteConfig } from '../data/siteData';

export const SITE_NAME = siteConfig.name;
export const PERSON_JOB_TITLE = siteConfig.title;

export const CONTACT_EMAIL = siteConfig.email;
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE = siteConfig.phone;
export const CONTACT_TEL = siteConfig.phoneHref;

/**
 * The subdomain verified in Resend. Only the `from` address has to live here;
 * `to` and `reply-to` can be any address. Keeping transactional mail on a
 * subdomain is deliberate: its sending reputation stays separate from the
 * root domain used for ordinary correspondence.
 */
export const SENDING_DOMAIN = 'info.jacobc.co.za';
export const DEFAULT_FROM_ADDRESS = `hello@${SENDING_DOMAIN}`;

export const LOCALITY = siteConfig.locality;
export const REGION = siteConfig.region;
export const COUNTRY = siteConfig.country;

export const LINKEDIN_URL = siteConfig.linkedin;
export const WEBSITE_URL = siteConfig.website;

/** Feeds schema.org `sameAs`; keep every public executive profile in here. */
export const SOCIAL_PROFILES = [LINKEDIN_URL, WEBSITE_URL] as const;
