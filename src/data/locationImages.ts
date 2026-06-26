/** Location → WebP image map for search, hotels, and destination cards */
export const locationImages = {
  Tashkent: {
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent Uzbekistan tour package by Travels Mantra',
    country: 'Uzbekistan',
  },
  Samarkand: {
    image: '/images/samarkand-uzbekistan-tour.webp',
    alt: 'Samarkand Uzbekistan tour package by Travels Mantra',
    country: 'Uzbekistan',
  },
  Bukhara: {
    image: '/images/bukhara-uzbekistan-tour.webp',
    alt: 'Bukhara Uzbekistan tour package by Travels Mantra',
    country: 'Uzbekistan',
  },
  Almaty: {
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan tour package by Travels Mantra',
    country: 'Kazakhstan',
  },
  Astana: {
    image: '/images/astana-kazakhstan-tour.webp',
    alt: 'Astana Kazakhstan tour package by Travels Mantra',
    country: 'Kazakhstan',
  },
  Baku: {
    image: '/images/baku-azerbaijan-tour.webp',
    alt: 'Baku Azerbaijan tour package by Travels Mantra',
    country: 'Azerbaijan',
  },
  Bishkek: {
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek Kyrgyzstan tour package by Travels Mantra',
    country: 'Kyrgyzstan',
  },
  Georgia: {
    image: '/images/georgia-tour.webp',
    alt: 'Georgia tour package by Travels Mantra',
    country: 'Georgia',
  },
  Armenia: {
    image: '/images/armenia-tour.webp',
    alt: 'Armenia tour package by Travels Mantra',
    country: 'Armenia',
  },
  Russia: {
    image: '/images/moscow-russia-tour.webp',
    alt: 'Moscow Russia tour package by Travels Mantra',
    country: 'Russia',
  },
  Moscow: {
    image: '/images/moscow-russia-tour.webp',
    alt: 'Moscow Russia tour package by Travels Mantra',
    country: 'Russia',
  },
  Delhi: {
    image: '/images/delhi-india-tour.webp',
    alt: 'Delhi India travel hub by Travels Mantra',
    country: 'India',
  },
} as const;

export type LocationKey = keyof typeof locationImages;

export function getLocationImage(name: string) {
  const key = Object.keys(locationImages).find(
    (k) => k.toLowerCase() === name.toLowerCase() || name.toLowerCase().startsWith(k.toLowerCase()),
  ) as LocationKey | undefined;
  return key ? locationImages[key] : locationImages.Tashkent;
}

export const suggestedSearchDestinations = [
  'Tashkent',
  'Samarkand',
  'Bukhara',
  'Almaty',
  'Baku',
  'Bishkek',
  'Georgia',
  'Armenia',
  'Russia',
] as const;
