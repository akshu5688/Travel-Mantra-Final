import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
mkdirSync(outDir, { recursive: true });

const images = [
  { file: 'bali-indonesia-tour.webp', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'vietnam-tour-package.webp', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'tashkent-tour-package.webp', url: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'almaty-tour-package.webp', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'singapore-cruise-package.webp', url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'dubai-tour-package.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'baku-tour-package.webp', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'bishkek-tour-package.webp', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=90', w: 900, h: 675 },
  { file: 'destination-india.webp', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-asia.webp', url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-central-asia.webp', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-europe.webp', url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-middle-east.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-africa.webp', url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-north-america.webp', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-balkans.webp', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'destination-oceania.webp', url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=90', w: 600, h: 600 },
  { file: 'hero-poster.webp', url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=90', w: 1920, h: 1080 },
  { file: 'about-travels-mantra.webp', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=90', w: 1200, h: 900 },
];

let saved = 0;
for (const img of images) {
  try {
    const res = await fetch(img.url, {
      headers: { 'User-Agent': 'TravelMantra-ImageScript/1.0' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const webp = await sharp(buf).resize(img.w, img.h, { fit: 'cover' }).webp({ quality: 85 }).toBuffer();
    writeFileSync(join(outDir, img.file), webp);
    console.log(`✓ ${img.file}`);
    saved++;
  } catch (err) {
    console.error(`✗ ${img.file}: ${err.message}`);
  }
}

console.log(`\nSaved ${saved}/${images.length} WebP images to public/images/`);
