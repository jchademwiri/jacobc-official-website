// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Vercel injects VERCEL_PROJECT_PRODUCTION_URL at build time with the
// project's stable production domain (custom domain if one is attached,
// otherwise the default *.vercel.app alias), so this tracks whichever
// domain is actually live without hardcoding it.
const site = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site,
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});