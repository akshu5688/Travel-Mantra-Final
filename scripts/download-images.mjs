import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
mkdirSync(outDir, { recursive: true });

const images = [
  // Tour packages — verified Unsplash sources, place-matched
  { file: 'bali-indonesia-tour.webp', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=90', w: 1200, h: 900 },
  { file: 'vietnam-tour-package.webp', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=90', w: 1200, h: 900 },
  { file: 'tashkent-tour-package.webp', url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=90', w: 1200, h: 900 },
  { file: 'almaty-tour-package.webp', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90', w: 1200, h: 900 },
  { file: 'singapore-cruise-package.webp', url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=90', w: 1200, h: 900 },
  { file: 'dubai-tour-package.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=90', w: 1200, h: 900 },
  { file: 'baku-tour-package.webp', url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=90', w: 1200, h: 900 },
  { file: 'bishkek-tour-package.webp', url: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=90', w: 1200, h: 900 },

  // Destination regions
  { file: 'destination-india.webp', url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-asia.webp', url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-central-asia.webp', url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-europe.webp', url: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-middle-east.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-africa.webp', url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-north-america.webp', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-balkans.webp', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-oceania.webp', url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=90', w: 800, h: 800 },

  // Excursions
  { file: 'excursion-dubai-desert-safari.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-bali-temple.webp', url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-tashkent-heritage.webp', url: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-singapore-sentosa.webp', url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-baku-old-city.webp', url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-vietnam-cu-chi.webp', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=90', w: 900, h: 675 },

  // Blog posts
  { file: 'blog-central-asia-guide.webp', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=90', w: 900, h: 600 },
  { file: 'blog-dubai-visa-guide.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=90', w: 900, h: 600 },
  { file: 'blog-bali-vietnam-season.webp', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=90', w: 900, h: 600 },

  // Site hero & about
  { file: 'hero-poster.webp', url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=90', w: 1920, h: 1080 },
  { file: 'about-travels-mantra.webp', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=90', w: 1200, h: 900 },
];

let saved = 0;
for (const img of images) {
  try {
    const res = await fetch(img.url, {
      headers: { 'User-Agent': 'TravelMantra-ImageScript/1.0' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    const webp = await sharp(buf).resize(img.w, img.h, { fit: 'cover' }).webp({ quality: 88 }).toBuffer();
    writeFileSync(join(outDir, img.file), webp);
    console.log(`✓ ${img.file}`);
    saved++;
  } catch (err) {
    console.error(`✗ ${img.file}: ${err.message}`);
  }
}

console.log(`\nSaved ${saved}/${images.length} WebP images to public/images/`);
