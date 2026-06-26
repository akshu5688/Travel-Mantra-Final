export const navLinks = [
  { href: '/tours', label: 'Tours' },
  { href: '/excursions', label: 'Excursions' },
  { href: '/about-us', label: 'About Us' },
  { href: '/hot-offers', label: 'Hot Offers' },
  { href: '/visa', label: 'Visa' },
  { href: '/travel-insurance', label: 'Travel Insurance' },
  { href: '/build-your-package', label: 'Build Your Package' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];

export const heroTrustBadges = [
  'ISO 9001:2015 Certified',
  'Uzbekistan Tourism Partner',
  'Euro Asia Certified Agent',
  'Full Visa Support',
] as const;

export const heroTrustCopy =
  'Travels Mantra is an authoritative destination management company for Central Asia, providing quality, transparency, and reliable travel support across Tashkent, Almaty, Delhi, Russia, and Georgia.';

export const heroPackages = [
  {
    title: 'Tashkent, Uzbekistan',
    duration: '4N / 5D',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    price: '₹35,800',
    priceLabel: 'Starting from ₹35,800',
    visa: 'LOI Included',
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent Uzbekistan tour package by Travels Mantra',
    cta: 'View Package',
    href: '/tours/tashkent',
  },
  {
    title: 'Almaty, Kazakhstan',
    duration: '5N / 6D',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    price: '₹44,500',
    priceLabel: 'Starting from ₹44,500',
    visa: 'Easy e-Visa',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan tour package by Travels Mantra',
    cta: 'View Package',
    href: '/tours/almaty',
  },
  {
    title: 'Baku, Azerbaijan',
    duration: '5N / 6D',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    price: '₹48,200',
    priceLabel: 'Starting from ₹48,200',
    visa: 'Visa on Arrival',
    image: '/images/baku-azerbaijan-tour.webp',
    alt: 'Baku Azerbaijan tour package by Travels Mantra',
    cta: 'View Package',
    href: '/tours/baku',
  },
] as const;

export const searchDestinations = [
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

export const travelMonthOptions = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const durationOptions = [
  '3N / 4D',
  '4N / 5D',
  '5N / 6D',
  '6N / 7D',
  '7N / 8D',
  'Custom Duration',
] as const;

export const tripTypeOptions = [
  'Family',
  'Honeymoon',
  'Friends',
  'Group Tour',
  'Luxury',
  'Budget',
  'Visa Help',
] as const;

export const travellerOptions = [
  '1 Adult',
  '2 Adults',
  '2 Adults, 1 Child',
  '2 Adults, 2 Children',
  '3 Adults',
  '4+ Travellers',
] as const;

export const trustCards = [
  { title: 'Official Uzbekistan Tourism Partner', desc: 'Registered partner with full LOI and visa assistance for Uzbekistan travel.' },
  { title: 'Euro Asia Certified Agent', desc: 'Certified travel agent with trusted Central Asia tour operations since 2008.' },
  { title: 'Strong Local Network', desc: 'Offices and partners across Tashkent, Almaty, Delhi, Russia, and Georgia.' },
  { title: 'Transparent Pricing, No Hidden Costs', desc: 'Clear package inclusions with honest pricing and no surprise charges.' },
  { title: '120+ Global Destinations', desc: 'Specialist in Central Asia with worldwide tour options when you need them.' },
  { title: '25,000+ Happy Travelers', desc: 'Thousands of satisfied Indian travelers on CIS and Central Asia journeys.' },
  { title: '4.8★ Customer Rating', desc: 'Consistently rated for service quality, visa support, and on-ground assistance.' },
  { title: '24×7 Travel Assistance', desc: 'Round-the-clock support before, during, and after your Central Asia trip.' },
  { title: '100% Customized Itineraries', desc: 'Tailor-made tours with flexible dates, hotels, flights, and sightseeing.' },
];

export const inclusionBadges = ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport', 'Insurance'] as const;

export const cisDestinations = [
  {
    name: 'Tashkent',
    country: 'Uzbekistan',
    desc: 'Historic city escapes with LOI and visa support.',
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent Uzbekistan tour package by Travels Mantra',
    href: '/tours/tashkent',
  },
  {
    name: 'Samarkand',
    country: 'Uzbekistan',
    desc: 'Silk Road heritage, Registan Square, and cultural tours.',
    image: '/images/samarkand-uzbekistan-tour.webp',
    alt: 'Samarkand Uzbekistan tour package by Travels Mantra',
    href: '/tours/samarkand',
  },
  {
    name: 'Bukhara',
    country: 'Uzbekistan',
    desc: 'Ancient mosques, bazaars, and UNESCO heritage walks.',
    image: '/images/bukhara-uzbekistan-tour.webp',
    alt: 'Bukhara Uzbekistan tour package by Travels Mantra',
    href: '/tours/bukhara',
  },
  {
    name: 'Almaty',
    country: 'Kazakhstan',
    desc: 'Mountain views, city tours, and easy e-visa packages.',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan tour package by Travels Mantra',
    href: '/tours/almaty',
  },
  {
    name: 'Baku',
    country: 'Azerbaijan',
    desc: 'Flame Towers, Old City, and Caspian Sea experiences.',
    image: '/images/baku-azerbaijan-tour.webp',
    alt: 'Baku Azerbaijan tour package by Travels Mantra',
    href: '/tours/baku',
  },
  {
    name: 'Bishkek',
    country: 'Kyrgyzstan',
    desc: 'Issyk-Kul lake trips and Tian Shan mountain escapes.',
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek Kyrgyzstan tour package by Travels Mantra',
    href: '/tours/bishkek',
  },
  {
    name: 'Astana',
    country: 'Kazakhstan',
    desc: 'Modern capital skyline and Central Asian architecture.',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Astana Kazakhstan tour package by Travels Mantra',
    href: '/tours/astana',
  },
  {
    name: 'Georgia',
    country: 'Caucasus',
    desc: 'Tbilisi old town, wine country, and mountain scenery tours.',
    image: '/images/georgia-tour.webp',
    alt: 'Georgia tour package by Travels Mantra',
    href: '/tours/georgia',
  },
  {
    name: 'Armenia',
    country: 'Caucasus',
    desc: 'Yerevan culture, monasteries, and scenic highland routes.',
    image: '/images/armenia-tour.webp',
    alt: 'Armenia tour package by Travels Mantra',
    href: '/tours/armenia',
  },
  {
    name: 'Russia',
    country: 'Russia',
    desc: 'Moscow and St. Petersburg fairy-tale city tours.',
    image: '/images/tashkent-tour-package.webp',
    alt: 'Russia tour package by Travels Mantra',
    href: '/tours/russia',
  },
];

export const destinationComparison = [
  { destination: 'Tashkent, Uzbekistan', duration: '4N / 5D', price: '₹35,800', visa: 'LOI Included' },
  { destination: 'Almaty, Kazakhstan', duration: '5N / 6D', price: '₹44,500', visa: 'Easy e-Visa' },
  { destination: 'Baku, Azerbaijan', duration: '5N / 6D', price: '₹48,200', visa: 'Visa on Arrival' },
];

export const featuredTours = [
  {
    title: 'Tashkent Packages Tour',
    subtitle: 'All Inclusive',
    duration: '4N / 5D',
    price: '₹35,800',
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent Uzbekistan tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/tashkent',
  },
  {
    title: 'Tashkent Samarkand Tour',
    duration: '5N / 6D',
    price: '₹52,500',
    image: '/images/samarkand-uzbekistan-tour.webp',
    alt: 'Samarkand Uzbekistan tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/tashkent-samarkand',
  },
  {
    title: 'Bishkek Tour',
    subtitle: 'Classical Stay Inn Bishkek',
    duration: '3N / 4D',
    price: 'ON REQUEST',
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek Kyrgyzstan tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/bishkek',
  },
  {
    title: 'Bishkek Packages',
    duration: '4N / 5D',
    price: 'ON REQUEST',
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek Kyrgyzstan packages by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/bishkek',
  },
  {
    title: 'Almaty Tour Package',
    subtitle: 'Heart of Central Asia',
    duration: '5N / 6D',
    price: '₹44,500',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/almaty',
  },
  {
    title: 'Almaty Kazakhstan Tour Package',
    subtitle: 'Stay Inn Almaty',
    duration: '5N / 6D',
    price: '₹56,999',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan Stay Inn tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/almaty',
  },
  {
    title: 'Moscow Tour Packages',
    subtitle: 'Russian Fairy Tale Tour',
    duration: '6N / 7D',
    price: 'ON REQUEST',
    image: '/images/tashkent-tour-package.webp',
    alt: 'Moscow Russia tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/russia',
  },
];

export const visaServices = [
  { title: 'LOI Support', desc: 'Full Letter of Invitation assistance for Uzbekistan and Central Asian countries.' },
  { title: 'Tourist Visa Guidance', desc: 'Step-by-step visa process for Indian passport holders by destination.' },
  { title: 'Document Checklist', desc: 'Passport, photos, bank statements, and invitation letters organised for you.' },
  { title: 'Country-wise Visa Assistance', desc: 'Up-to-date visa rules for Uzbekistan, Kazakhstan, Azerbaijan, and CIS nations.' },
  { title: 'Visa + Package Support', desc: 'Combined tour and visa handling in one transparent package.' },
  { title: 'Travel Insurance Help', desc: 'Insurance plans that meet visa requirements and protect your trip.' },
];

export const travelServices = [
  'Fixed Departures',
  'Visa Support / LOI',
  'Arrival and Departure Transfers',
  'Hotel Reservation',
  'Local Interpreters',
  'Hindi-Speaking Guides',
  'Air Ticket Reservation',
  'Sightseeing',
  'Transportation',
  'Tailor-Made Itineraries',
  'Regular Itineraries',
  '24×7 Local Support',
];

export const faqItems = [
  {
    question: 'Does Travels Mantra provide visa support?',
    answer: 'Yes. As a registered Uzbekistan Tourism partner, we provide full Letter of Invitation and visa assistance for all Central Asian countries.',
  },
  {
    question: 'What is included in your tour packages?',
    answer: 'Flights, visa support, hotels, meals, transfers, sightseeing, and 24/7 local support. Customizations are available.',
  },
  {
    question: 'Are there fixed departure dates?',
    answer: 'Yes. We run guaranteed weekly departures from Delhi to major Central Asian cities.',
  },
  {
    question: 'Can I customize my Central Asia tour package?',
    answer: 'Absolutely. Share your dates, budget, and preferences — our experts will build a tailor-made itinerary.',
  },
  {
    question: 'Do you provide Hindi-speaking guides?',
    answer: 'Yes. Hindi-speaking guides are available across major Central Asian destinations on request.',
  },
  {
    question: 'Do you arrange airport transfers?',
    answer: 'Yes. Arrival and departure transfers are included in most packages and can be added to custom plans.',
  },
  {
    question: 'Can I book hotels and flights together?',
    answer: 'Yes. We offer combined hotel, flight, and tour bookings with transparent pricing.',
  },
];

export const testimonials = [
  {
    quote: 'Our Uzbekistan trip was perfectly managed. Visa support, hotels, meals, and sightseeing were smooth from start to finish.',
    trip: 'Tashkent Packages 4N/5D',
    initials: 'AK',
  },
  {
    quote: 'Travels Mantra helped us plan Almaty with complete transparency and quick support. The local team was very helpful.',
    trip: 'Almaty Tour 5N/6D',
    initials: 'PS',
  },
  {
    quote: 'The Baku package was well organized, and the team guided us with visa, transfers, and sightseeing.',
    trip: 'Baku Holiday 5N/6D',
    initials: 'RM',
  },
];

export const blogPosts = [
  {
    slug: 'tashkent-travel-guide',
    title: 'Tashkent Travel Guide',
    date: 'June 2026',
    excerpt: 'Essential tips for first-time visitors — visa, currency, and must-see sights.',
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent travel guide by Travels Mantra',
  },
  {
    slug: 'baku-visa-travel-guide',
    title: 'Baku Visa & Travel Guide',
    date: 'May 2026',
    excerpt: 'Visa on arrival, documents, and the best time to visit Azerbaijan.',
    image: '/images/baku-azerbaijan-tour.webp',
    alt: 'Baku visa and travel guide by Travels Mantra',
  },
  {
    slug: 'almaty-travel-tips',
    title: 'Almaty Travel Tips',
    date: 'May 2026',
    excerpt: 'Mountain day trips, e-visa process, and local food recommendations.',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty travel tips by Travels Mantra',
  },
  {
    slug: 'bishkek-nightlife-guide',
    title: 'Bishkek Nightlife Guide',
    date: 'April 2026',
    excerpt: 'Evening experiences, cafes, and cultural spots in Kyrgyzstan\'s capital.',
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek nightlife guide by Travels Mantra',
  },
  {
    slug: 'uzbekistan-travel-checklist',
    title: 'Uzbekistan Travel Checklist',
    date: 'April 2026',
    excerpt: 'Documents, packing list, and LOI requirements for Indian travelers.',
    image: '/images/samarkand-uzbekistan-tour.webp',
    alt: 'Uzbekistan travel checklist by Travels Mantra',
  },
  {
    slug: 'central-asia-travel-tips',
    title: 'Central Asia Travel Tips for Indian Travelers',
    date: 'March 2026',
    excerpt: 'Currency, connectivity, and cultural etiquette across CIS countries.',
    image: '/images/blog-central-asia-guide.webp',
    alt: 'Central Asia travel tips for Indian travelers by Travels Mantra',
  },
];

export const enquiryDestinations = [
  'Tashkent',
  'Samarkand',
  'Bukhara',
  'Almaty',
  'Baku',
  'Bishkek',
  'Georgia',
  'Armenia',
  'Russia',
  'Other Central Asia',
];

export const budgetOptions = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,00,000',
  'Above ₹2,00,000',
  'Flexible / ON REQUEST',
];

export const chatbotChips = ['Tashkent', 'Almaty', 'Baku', 'Bishkek', 'Visa Help', 'Build My Package'] as const;

export const serviceTabs = [
  { id: 'tours', label: 'Central Asia Tours', href: '/tours' },
  { id: 'cis', label: 'CIS Packages', href: '/tours' },
  { id: 'visa', label: 'Visa Support', href: '/visa' },
  { id: 'hotels', label: 'Hotels', href: '/hotels' },
  { id: 'fixed', label: 'Fixed Departures', href: '/hot-offers' },
  { id: 'insurance', label: 'Travel Insurance', href: '/travel-insurance' },
  { id: 'build', label: 'Build Your Package', href: '/build-your-package' },
  { id: 'excursions', label: 'Excursions', href: '/excursions' },
] as const;

export const footerCentralAsia = [
  { label: 'Tashkent', href: '/tours/tashkent' },
  { label: 'Samarkand', href: '/tours/samarkand' },
  { label: 'Bukhara', href: '/tours/bukhara' },
  { label: 'Almaty', href: '/tours/almaty' },
  { label: 'Baku', href: '/tours/baku' },
  { label: 'Bishkek', href: '/tours/bishkek' },
  { label: 'Georgia', href: '/tours/georgia' },
  { label: 'Armenia', href: '/tours/armenia' },
];

export const footerServices = [
  { label: 'Tours', href: '/tours' },
  { label: 'Visa', href: '/visa' },
  { label: 'Travel Insurance', href: '/travel-insurance' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Flights', href: '/contact-us' },
  { label: 'Build Your Package', href: '/build-your-package' },
];

export const footerCompany = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Testimonials', href: '/#testimonials' },
];

export const footerSupport = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Policies', href: '/contact-us' },
  { label: 'Cancellation Policy', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/contact-us' },
  { label: 'Terms & Conditions', href: '/contact-us' },
];

// Legacy exports for inner pages
export const packages = featuredTours;
export const popularDestinations = cisDestinations.map((d) => ({
  name: d.name,
  image: d.image,
  alt: d.alt,
}));

export const destinationCategories = [
  { name: 'Uzbekistan', image: '/images/tashkent-uzbekistan-tour.webp', alt: 'Uzbekistan Central Asia tour destinations' },
  { name: 'Kazakhstan', image: '/images/almaty-kazakhstan-tour.webp', alt: 'Kazakhstan Central Asia tour destinations' },
  { name: 'Azerbaijan', image: '/images/baku-azerbaijan-tour.webp', alt: 'Azerbaijan Central Asia tour destinations' },
  { name: 'Kyrgyzstan', image: '/images/bishkek-kyrgyzstan-tour.webp', alt: 'Kyrgyzstan Central Asia tour destinations' },
  { name: 'Georgia', image: '/images/georgia-tour.webp', alt: 'Georgia Caucasus tour destinations' },
  { name: 'Armenia', image: '/images/armenia-tour.webp', alt: 'Armenia Caucasus tour destinations' },
];

export const excursions = [
  {
    title: 'Tashkent City Heritage Walk',
    desc: 'Historic mosques, bazaars, and metro art with expert local guide.',
    region: 'Central Asia',
    image: '/images/excursion-tashkent-heritage.webp',
    alt: 'Tashkent Uzbekistan heritage architecture and bazaar',
  },
  {
    title: 'Samarkand Registan Tour',
    desc: 'Silk Road monuments, madrasas, and cultural experiences.',
    region: 'Central Asia',
    image: '/images/samarkand-uzbekistan-tour.webp',
    alt: 'Samarkand Registan Square heritage tour',
  },
  {
    title: 'Baku Old City Excursion',
    desc: 'Walled city, Flame Towers viewpoint, and Caspian waterfront tour.',
    region: 'Central Asia',
    image: '/images/excursion-baku-old-city.webp',
    alt: 'Baku Azerbaijan old city walls and historic streets',
  },
  {
    title: 'Almaty Mountain Day Trip',
    desc: 'Medeu, Shymbulak, and Tian Shan scenic viewpoints with transfers.',
    region: 'Central Asia',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan mountain day trip excursion',
  },
  {
    title: 'Bishkek Issyk-Kul Excursion',
    desc: 'Alpine lake, mountain scenery, and local culture day tour.',
    region: 'Central Asia',
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek Issyk-Kul lake excursion Kyrgyzstan',
  },
  {
    title: 'Bukhara Old Town Walk',
    desc: 'UNESCO heritage sites, bazaars, and architectural landmarks.',
    region: 'Central Asia',
    image: '/images/bukhara-uzbekistan-tour.webp',
    alt: 'Bukhara Uzbekistan old town heritage walk',
  },
];

export const heroOffers = [
  {
    title: 'Tashkent Early Bird',
    text: 'Save on select 4N/5D Uzbekistan packages',
    priceNote: 'From ₹35,800',
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent Uzbekistan early bird offer',
    href: '/hot-offers',
  },
  {
    title: 'Almaty Fixed Departure',
    text: 'Weekly departures from Delhi with e-visa support',
    priceNote: 'From ₹44,500',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan fixed departure offer',
    href: '/hot-offers',
  },
  {
    title: 'Baku Holiday Deal',
    text: 'Flame Towers, Old City & Caspian views',
    priceNote: 'From ₹48,200',
    image: '/images/baku-azerbaijan-tour.webp',
    alt: 'Baku Azerbaijan holiday deal',
    href: '/hot-offers',
  },
];
