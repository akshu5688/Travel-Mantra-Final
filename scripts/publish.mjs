import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const assetsOut = join(root, 'assets');

const builtHtml = [join(dist, 'index.source.html'), join(dist, 'index.html')].find(existsSync);
if (!builtHtml) {
  console.error('Build output HTML not found in dist/');
  process.exit(1);
}

let html = readFileSync(builtHtml, 'utf8');
html = html.replace(/\s+crossorigin/g, '');

const outHtml = join(root, 'index.html');
writeFileSync(outHtml, html);

if (existsSync(assetsOut)) {
  rmSync(assetsOut, { recursive: true, force: true });
}
mkdirSync(assetsOut, { recursive: true });
cpSync(join(dist, 'assets'), assetsOut, { recursive: true });

const imagesOut = join(root, 'images');
const distImages = join(dist, 'images');
const publicImages = join(root, 'public', 'images');

if (existsSync(imagesOut)) {
  rmSync(imagesOut, { recursive: true, force: true });
}
if (existsSync(distImages)) {
  cpSync(distImages, imagesOut, { recursive: true });
} else if (existsSync(publicImages)) {
  cpSync(publicImages, imagesOut, { recursive: true });
}

console.log('Published build to index.html + assets/ + images/');
