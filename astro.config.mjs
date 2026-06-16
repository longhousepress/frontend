// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://longhousepress.org',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg', 'kr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  outDir: process.env.OUT_DIR || './dist',
  build: {
    assets: '_astro',
    assetsPrefix: process.env.CDN_URL || undefined,
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});