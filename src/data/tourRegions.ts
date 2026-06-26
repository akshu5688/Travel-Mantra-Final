export type TourRegion = {
  name: string;
  image: string;
  alt: string;
  destinations: { label: string; href: string }[];
};

function slugify(label: string) {
  return label
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const knownSlugs: Record<string, string> = {
  Almaty: '/tours/almaty',
  Armenia: '/tours/armenia',
  Baku: '/tours/baku',
  Bishkek: '/tours/bishkek',
  Georgia: '/tours/georgia',
  Tashkent: '/tours/tashkent',
  Turkey: '/tours/turkey',
  Russia: '/tours/russia',
  Ukraine: '/tours/kiev',
  Dubai: '/build-your-package',
  Bali: '/build-your-package',
  Vietnam: '/build-your-package',
  Thailand: '/build-your-package',
  Singapore: '/build-your-package',
  Maldives: '/build-your-package',
  Greece: '/build-your-package',
  Spain: '/build-your-package',
  Canada: '/build-your-package',
  Mauritius: '/build-your-package',
  Egypt: '/build-your-package',
  Australia: '/build-your-package',
};

function destinationHref(label: string) {
  return knownSlugs[label] ?? `/tours?region=${encodeURIComponent(label)}`;
}

function regionDestinations(labels: string[]) {
  return labels.map((label) => ({ label, href: destinationHref(label) }));
}

export const tourRegions: TourRegion[] = [
  {
    name: 'India',
    image: '/images/destination-india.webp',
    alt: 'Taj Mahal and iconic India heritage destinations',
    destinations: regionDestinations(['Andaman', 'Darjeeling', 'Himachal', 'Kashmir', 'Kerala', 'Leh & Ladakh', 'Goa', 'Rajasthan']),
  },
  {
    name: 'Asia',
    image: '/images/destination-asia.webp',
    alt: 'Southeast Asia temples and island tour destinations',
    destinations: regionDestinations(['Cambodia', 'Hong Kong', 'Malaysia', 'Maldives', 'Nepal', 'Singapore', 'Sri Lanka', 'Thailand', 'Vietnam', 'Bali']),
  },
  {
    name: 'Central Asia',
    image: '/images/destination-central-asia.webp',
    alt: 'Registan Square Samarkand and Central Asia Silk Road tours',
    destinations: regionDestinations(['Almaty', 'Armenia', 'Baku', 'Bishkek', 'Georgia', 'Tashkent', 'Turkey', 'Turkmenistan']),
  },
  {
    name: 'Europe',
    image: '/images/destination-europe.webp',
    alt: 'European cityscapes and scenic holiday destinations',
    destinations: regionDestinations(['Europe', 'Germany', 'Budapest', 'Poland', 'Spain', 'Switzerland', 'Russia', 'Ukraine']),
  },
  {
    name: 'Middle East',
    image: '/images/destination-middle-east.webp',
    alt: 'Dubai skyline and Middle East tour destinations',
    destinations: regionDestinations(['Dubai', 'Jordan', 'Muscat']),
  },
  {
    name: 'Africa',
    image: '/images/destination-africa.webp',
    alt: 'African safari and island tour destinations',
    destinations: regionDestinations(['Egypt', 'Kenya', 'Mauritius', 'Seychelles']),
  },
  {
    name: 'North America',
    image: '/images/destination-north-america.webp',
    alt: 'North America city and nature tour packages',
    destinations: regionDestinations(['Canada', 'United States']),
  },
  {
    name: 'Balkans',
    image: '/images/destination-balkans.webp',
    alt: 'Balkans heritage and coastal tour destinations',
    destinations: regionDestinations(['Greece', 'Serbia']),
  },
  {
    name: 'Oceania',
    image: '/images/destination-oceania.webp',
    alt: 'Sydney Opera House and Oceania tour destinations',
    destinations: regionDestinations(['Australia', 'Fiji', 'New Zealand']),
  },
];

export const allTourDestinations = tourRegions.flatMap((region) =>
  region.destinations.map((dest) => ({ ...dest, region: region.name })),
);

export function tourRegionSlug(name: string) {
  return slugify(name);
}
