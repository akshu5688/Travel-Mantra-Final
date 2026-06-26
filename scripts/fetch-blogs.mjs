import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src', 'data');
const imgDir = join(root, 'public', 'images', 'blog');
mkdirSync(outDir, { recursive: true });
mkdirSync(imgDir, { recursive: true });

const BLOG_SLUGS = [
  'thailand-tour-packages',
  'bali-tour-packages',
  'almaty-travel-guide',
  'vietnam-tour-packages',
  'uzbekistan-travel-guide-2026',
  'discover-dubai-the-ultimate-travel-guide',
  'turkey-travel-guide-2026',
  'russia-travel-guide',
  'baku-azerbaijan-travel-guide',
  'kyrgyzstan-travel-guide-2026-best-tours-attractions-travel-tips',
  'ultimate-uzbekistan-travel-guide-top-attractions-dining-travel-tips',
  'kazakhstan-tour-packages',
  'explore-amazing-vietnam-tour-packages-for-unforgettable-adventures',
  'armenia-tour-packages-unearth-the-magic-of-armenia-with-travels-mantra-holidays',
  'explore-sri-lanka-holiday-packages-the-tropical-paradise-travels-mantra',
  'malaysia-trip-a-journey-through-nature-travels-mantra',
  'affordable-dubai-vacation-packages-from-india-travels-mantra',
  'guide-to-plan-your-singapore-tour-packages-travels-mantra',
  'nepal-tour-packages-discovering-the-beauty-of-the-himalayas',
  'sri-lanka-tour-packages-discover-the-exotic-beauty-travels-mantra',
];

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&quot;/g, '"');
}

function stripHtml(html) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  );
}

function htmlToSections(html) {
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');

  const sections = [];
  const parts = cleaned.split(/(?=<h[1-6][^>]*>)/i);

  for (const part of parts) {
    const headingMatch = part.match(/^<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/i);
    if (headingMatch) {
      const level = Number(headingMatch[1]);
      const heading = stripHtml(headingMatch[2]);
      const bodyHtml = part.slice(headingMatch[0].length);
      const paragraphs = [];
      const pMatches = bodyHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      for (const m of pMatches) {
        const text = stripHtml(m[1]);
        if (text && text.length > 20) paragraphs.push(text);
      }
      const liMatches = bodyHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi);
      const listItems = [];
      for (const m of liMatches) {
        const text = stripHtml(m[1]);
        if (text) listItems.push(text);
      }
      if (heading || paragraphs.length || listItems.length) {
        sections.push({ level, heading, paragraphs, listItems });
      }
    } else {
      const paragraphs = [];
      const pMatches = part.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
      for (const m of pMatches) {
        const text = stripHtml(m[1]);
        if (text && text.length > 20) paragraphs.push(text);
      }
      if (paragraphs.length) {
        sections.push({ level: 0, heading: '', paragraphs, listItems: [] });
      }
    }
  }

  return sections;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

async function fetchPost(slug) {
  const url = `https://stag.travelsmantra.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${slug}: ${res.status}`);
  const data = await res.json();
  if (!data.length) throw new Error(`No post found for slug: ${slug}`);
  return data[0];
}

async function downloadBlogImage(slug, imageUrl) {
  const fileName = `${slug}.webp`;
  const outPath = join(imgDir, fileName);
  try {
    const res = await fetch(imageUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await sharp(buffer).resize(1200, 800, { fit: 'cover' }).webp({ quality: 85 }).toFile(outPath);
    return `/images/blog/${fileName}`;
  } catch (err) {
    console.warn(`  ! Image download failed for ${slug}: ${err.message}`);
    return imageUrl;
  }
}

const posts = [];

for (const slug of BLOG_SLUGS) {
  try {
    console.log(`Fetching: ${slug}`);
    const post = await fetchPost(slug);
    const title = stripHtml(post.title?.rendered || '');
    const contentHtml = post.content?.rendered || '';
    const sections = htmlToSections(contentHtml);
    const firstParagraph = sections.find((s) => s.paragraphs.length)?.paragraphs[0] || '';
    const excerptRaw = stripHtml(post.excerpt?.rendered || '');
    const excerpt = excerptRaw.includes('[…]') || excerptRaw.includes('[...]')
      ? firstParagraph.slice(0, 180) + (firstParagraph.length > 180 ? '…' : '')
      : excerptRaw;

    let image = '';
    let alt = title;
    const embedded = post._embedded?.['wp:featuredmedia']?.[0];
    if (embedded?.source_url) {
      image = await downloadBlogImage(slug, embedded.source_url);
      alt = stripHtml(embedded.alt_text || title);
    }

    posts.push({
      slug,
      title,
      date: formatDate(post.date),
      excerpt,
      image,
      alt,
      sections,
    });
    console.log(`  ✓ ${title}`);
  } catch (err) {
    console.error(`  ✗ ${slug}: ${err.message}`);
  }
}

writeFileSync(join(outDir, 'blogs.json'), JSON.stringify(posts, null, 2), 'utf8');
console.log(`\nWrote ${posts.length} posts to src/data/blogs.json`);
