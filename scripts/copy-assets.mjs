import { cpSync, rmSync, mkdirSync, existsSync, readdirSync, accessSync, constants } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

const BACKEND_ASSETS_PATH = process.env.BACKEND_ASSETS_PATH;
if (!BACKEND_ASSETS_PATH) {
  console.error('Error: BACKEND_ASSETS_PATH environment variable is required');
  process.exit(1);
}

const BUILD_API_URL = process.env.BUILD_API_URL;
if (!BUILD_API_URL) {
  console.error('Error: BUILD_API_URL environment variable is required');
  process.exit(1);
}

const sourceDir = resolve(root, BACKEND_ASSETS_PATH);
if (!existsSync(sourceDir)) {
  console.error(`Error: BACKEND_ASSETS_PATH does not exist: ${sourceDir}`);
  process.exit(1);
}

const coversDest = join(root, 'src', 'assets');
const samplesDest = join(root, 'public', 'samples');

// Fetch the API to get all expected files
let books;
try {
  console.log('Fetching book data from API...');
  const response = await fetch(`${BUILD_API_URL}/api/books`);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  books = await response.json();
} catch (error) {
  console.error(`Error: Failed to fetch books from API (${BUILD_API_URL}/api/books):`);
  console.error(`  ${error.message}`);
  process.exit(1);
}

// Extract all expected files from API response
const expectedFiles = {};
const errors = [];

for (const book of books) {
  const slug = book.book_slug;
  if (!expectedFiles[slug]) {
    expectedFiles[slug] = { covers: new Set(), samples: new Set() };
  }

  for (const edition of book.editions || []) {
    // Track cover file
    if (edition.cover) {
      expectedFiles[slug].covers.add(edition.cover);
    }

    // Track sample files
    for (const sample of edition.samples || []) {
      if (sample.path) {
        expectedFiles[slug].samples.add(sample.path);
      }
    }
  }
}

// Validate that all expected files exist and are readable
console.log('Validating backend assets...');

for (const [slug, files] of Object.entries(expectedFiles)) {
  const basePath = join(sourceDir, slug, 'public');

  // Validate covers
  const coversPath = join(basePath, 'covers');
  if (!existsSync(coversPath)) {
    errors.push(`Missing covers directory: ${coversPath}`);
    continue;
  }
  
  try {
    accessSync(coversPath, constants.R_OK);
  } catch (err) {
    errors.push(`Cannot read covers directory (permission denied): ${coversPath}`);
    continue;
  }

  for (const coverFile of files.covers) {
    const filePath = join(coversPath, coverFile);
    if (!existsSync(filePath)) {
      errors.push(`Missing cover file referenced by API: ${filePath}`);
    } else {
      try {
        accessSync(filePath, constants.R_OK);
      } catch (err) {
        errors.push(`Cannot read cover file (permission denied): ${filePath}`);
      }
    }
  }

  // Validate samples
  const samplesPath = join(basePath, 'samples');
  if (!existsSync(samplesPath)) {
    errors.push(`Missing samples directory: ${samplesPath}`);
    continue;
  }

  try {
    accessSync(samplesPath, constants.R_OK);
  } catch (err) {
    errors.push(`Cannot read samples directory (permission denied): ${samplesPath}`);
    continue;
  }

  for (const samplePath of files.samples) {
    const filePath = join(sourceDir, samplePath);
    if (!existsSync(filePath)) {
      errors.push(`Missing sample file referenced by API: ${filePath}`);
    } else {
      try {
        accessSync(filePath, constants.R_OK);
      } catch (err) {
        errors.push(`Cannot read sample file (permission denied): ${filePath}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error('Error: Asset validation failed:');
  errors.forEach(e => console.error(`  ${e}`));
  process.exit(1);
}

console.log(`Validated ${Object.keys(expectedFiles).length} books with all expected files`);

// All validations passed, proceed with copy
rmSync(coversDest, { recursive: true, force: true });
rmSync(samplesDest, { recursive: true, force: true });

const slugDirs = readdirSync(sourceDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name);

for (const slug of slugDirs) {
  const coversSource = join(sourceDir, slug, 'public', 'covers');
  if (existsSync(coversSource)) {
    const dest = join(coversDest, slug, 'cover');
    mkdirSync(dest, { recursive: true });
    cpSync(coversSource, dest, { recursive: true });
    console.log(`  covers:  ${slug}`);
  }

  const samplesSource = join(sourceDir, slug, 'public', 'samples');
  if (existsSync(samplesSource)) {
    const dest = join(samplesDest, slug);
    mkdirSync(dest, { recursive: true });
    cpSync(samplesSource, dest, { recursive: true });
    console.log(`  samples: ${slug}`);
  }
}

console.log('Assets copied.');
