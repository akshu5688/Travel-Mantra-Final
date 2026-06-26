import { mkdirSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
mkdirSync(outDir, { recursive: true });

const images = [
  // Tour packages
  { file: 'bali-indonesia-tour.webp', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=90', w: 1200, h: 900 },
  { file: 'vietnam-tour-package.webp', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=1200&q=90', w: 1200, h: 900 },
  { file: 'tashkent-tour-package.webp', url: 'https://images.unsplash.com/photo-1715824633698-37810119f69c?w=1200&q=90', w: 1200, h: 900 },
  { file: 'almaty-tour-package.webp', url: 'https://images.unsplash.com/photo-1655444099262-c56de96c448d?w=1200&q=90', w: 1200, h: 900 },
  { file: 'singapore-cruise-package.webp', url: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&q=90', w: 1200, h: 900 },
  { file: 'dubai-tour-package.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=90', w: 1200, h: 900 },
  { file: 'baku-tour-package.webp', url: 'https://images.unsplash.com/photo-1753706874051-718700368d6b?w=1200&q=90', w: 1200, h: 900 },
  { file: 'bishkek-tour-package.webp', url: 'https://images.unsplash.com/photo-1602529359787-ce7468eaf119?w=1200&q=90', w: 1200, h: 900 },

  // Destination regions
  { file: 'destination-india.webp', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-asia.webp', url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-central-asia.webp', url: 'https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-europe.webp', url: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-middle-east.webp', url: 'https://images.unsplash.com/photo-1762099097451-c330cc46025b?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-africa.webp', url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-north-america.webp', url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-balkans.webp', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90', w: 800, h: 800 },
  { file: 'destination-oceania.webp', url: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=90', w: 800, h: 800 },

  // Excursions
  { file: 'excursion-dubai-desert-safari.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-bali-temple.webp', url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-tashkent-heritage.webp', url: 'https://images.unsplash.com/photo-1715824633698-37810119f69c?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-singapore-sentosa.webp', url: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-baku-old-city.webp', url: 'https://images.unsplash.com/photo-1758386669548-8a0ae6e8cb34?w=900&q=90', w: 900, h: 675 },
  { file: 'excursion-vietnam-cu-chi.webp', url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=90', w: 900, h: 675 },

  // Blog posts
  { file: 'blog-central-asia-guide.webp', url: 'https://images.unsplash.com/photo-1655444099262-c56de96c448d?w=900&q=90', w: 900, h: 600 },
  { file: 'blog-dubai-visa-guide.webp', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=90', w: 900, h: 600 },
  { file: 'blog-bali-vietnam-season.webp', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=90', w: 900, h: 600 },

  // Site hero & about
  { file: 'hero-poster.webp', url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=90', w: 1920, h: 1080 },
  { file: 'hero-central-asia-travels-mantra.webp', url: 'https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=1920&q=90', w: 1920, h: 1080 },
  { file: 'about-travels-mantra.webp', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=90', w: 1200, h: 900 },
  { file: 'central-asia-visa-assistance.webp', url: 'https://images.unsplash.com/photo-1715824633698-37810119f69c?w=1200&q=90', w: 1200, h: 900 },

  // Central Asia destination aliases (client-specified filenames)
  { file: 'tashkent-uzbekistan-tour.webp', url: 'https://images.unsplash.com/photo-1715824633698-37810119f69c?w=1200&q=90', w: 1200, h: 900 },
  { file: 'samarkand-uzbekistan-tour.webp', url: 'https://images.unsplash.com/photo-1664602078796-68ee76b3fc59?w=1200&q=90', w: 1200, h: 900 },
  { file: 'bukhara-uzbekistan-tour.webp', url: 'https://images.unsplash.com/photo-1715824633698-37810119f69c?w=1200&q=90', w: 1200, h: 900 },
  { file: 'almaty-kazakhstan-tour.webp', url: 'https://images.unsplash.com/photo-1655444099262-c56de96c448d?w=1200&q=90', w: 1200, h: 900 },
  { file: 'baku-azerbaijan-tour.webp', url: 'https://images.unsplash.com/photo-1753706874051-718700368d6b?w=1200&q=90', w: 1200, h: 900 },
  { file: 'bishkek-kyrgyzstan-tour.webp', url: 'https://images.unsplash.com/photo-1602529359787-ce7468eaf119?w=1200&q=90', w: 1200, h: 900 },
  { file: 'georgia-tour.webp', url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=90', w: 1200, h: 900 },
  { file: 'armenia-tour.webp', url: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=1200&q=90', w: 1200, h: 900 },
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
