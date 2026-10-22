// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The canonical origin. Cloudflare Pages sets SITE_URL when the domain changes.
  site: process.env.SITE_URL ?? 'https://integramate-site.pablomaly.me',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } } })],
  vite: { plugins: [tailwindcss()] },
});
