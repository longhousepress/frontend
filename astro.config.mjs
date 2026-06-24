// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import { readdir, rename, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BUILD_API_URL = process.env.BUILD_API_URL || 'http://localhost:2223';

// Web servers commonly block URLs containing ".." for path-traversal protection.
// Astro's catch-all route [...slug].astro produces output filenames like
// _...slug_...js which contain ".." and are rejected by the origin, causing CDN 404s.
// This integration renames those files and patches all HTML/JS references post-build.
function sanitizeOutputFilenames() {
  return {
    name: 'sanitize-output-filenames',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const astroDir = join(outDir, '_astro');

        let files;
        try {
          files = await readdir(astroDir);
        } catch {
          return;
        }

        const renameMap = new Map();
        for (const file of files) {
          if (file.includes('...')) {
            const newName = file.replaceAll('...', '_');
            renameMap.set(file, newName);
            await rename(join(astroDir, file), join(astroDir, newName));
          }
        }

        if (renameMap.size === 0) return;

        async function patchDir(dirPath) {
          const entries = await readdir(dirPath, { withFileTypes: true });
          await Promise.all(entries.map(async entry => {
            const fullPath = join(dirPath, entry.name);
            if (entry.isDirectory()) {
              await patchDir(fullPath);
            } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js')) {
              let content = await readFile(fullPath, 'utf-8');
              let changed = false;
              for (const [oldName, newName] of renameMap) {
                if (content.includes(oldName)) {
                  content = content.replaceAll(oldName, newName);
                  changed = true;
                }
              }
              if (changed) await writeFile(fullPath, content);
            }
          }));
        }

        await patchDir(outDir);
      },
    },
  };
}

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
    sanitizeOutputFilenames(),
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
      proxy: {
        '/api': { target: BUILD_API_URL, changeOrigin: false },
      },
    },
  },
});