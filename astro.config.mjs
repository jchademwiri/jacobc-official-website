// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Vercel injects VERCEL_PROJECT_PRODUCTION_URL at build time with the
// project's stable production domain (custom domain if one is attached,
// otherwise the default *.vercel.app alias), so this tracks whichever
// domain is actually live without hardcoding it.
//
// If that variable is ever missing from a production build, every canonical,
// og:url and sitemap entry would silently ship pointing at localhost. Fail the
// build instead — a broken deploy is easier to notice than poisoned metadata.
const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

if (!productionUrl && process.env.VERCEL === '1') {
  throw new Error(
    'VERCEL_PROJECT_PRODUCTION_URL is not set. Refusing to build with localhost canonicals.'
  );
}

const site = productionUrl ? `https://${productionUrl}` : 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});