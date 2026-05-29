import { cpSync, rmSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

const BACKEND_ASSETS_PATH = process.env.BACKEND_ASSETS_PATH;
if (!BACKEND_ASSETS_PATH) {
  console.error('Error: BACKEND_ASSETS_PATH environment variable is required');
  process.exit(1);
}

const sourceDir = resolve(root, BACKEND_ASSETS_PATH);
if (!existsSync(sourceDir)) {
  console.error(`Error: BACKEND_ASSETS_PATH does not exist: ${sourceDir}`);
  process.exit(1);
}

const coversDest = join(root, 'src', 'assets');
const samplesDest = join(root, 'public', 'samples');

rmSync(coversDest, { recursive: true, force: true });
rmSync(samplesDest, { recursive: true, force: true });

const slugDirs = readdirSync(sourceDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const slug of slugDirs) {
  const coversSource = join(sourceDir, slug, 'covers');
  if (existsSync(coversSource)) {
    const dest = join(coversDest, slug, 'cover');
    mkdirSync(dest, { recursive: true });
    cpSync(coversSource, dest, { recursive: true });
    console.log(`  covers:  ${slug}`);
  }

  const samplesSource = join(sourceDir, slug, 'samples');
  if (existsSync(samplesSource)) {
    const dest = join(samplesDest, slug);
    mkdirSync(dest, { recursive: true });
    cpSync(samplesSource, dest, { recursive: true });
    console.log(`  samples: ${slug}`);
  }
}

console.log('Assets copied.');
