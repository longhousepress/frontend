// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

const BUILD_API_URL = process.env.BUILD_API_URL || 'http://localhost:2223';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://longhousepress.org',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bg', 'ko'],
    routing: {
      prefixDefaultLocale: true,
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
    server: {
      proxy: {
        '/api': { target: BUILD_API_URL, changeOrigin: false },
      },
    },
  },
});