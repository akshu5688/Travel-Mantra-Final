export const hotOfferDestinations = [
  {
    label: 'Russia (Moscow)',
    name: 'Moscow',
    country: 'Russia',
    desc: 'Red Square, Kremlin, and classic Russian city tours.',
    image: '/images/moscow-russia-tour.webp',
    alt: 'Moscow Russia hot offer tour package by Travels Mantra',
    href: '/tours/russia',
  },
  {
    label: 'Armenia (Yerevan)',
    name: 'Yerevan',
    country: 'Armenia',
    desc: 'Yerevan culture, monasteries, and scenic highland routes.',
    image: '/images/armenia-tour.webp',
    alt: 'Armenia Yerevan hot offer tour package by Travels Mantra',
    href: '/tours/armenia',
  },
  {
    label: 'Tashkent (Uzbekistan)',
    name: 'Tashkent',
    country: 'Uzbekistan',
    desc: 'Historic city escapes with LOI and visa support.',
    image: '/images/tashkent-uzbekistan-tour.webp',
    alt: 'Tashkent Uzbekistan hot offer tour package by Travels Mantra',
    href: '/tours/tashkent',
  },
  {
    label: 'Baku (Azerbaijan)',
    name: 'Baku',
    country: 'Azerbaijan',
    desc: 'Flame Towers, Old City, and Caspian Sea experiences.',
    image: '/images/baku-azerbaijan-tour.webp',
    alt: 'Baku Azerbaijan hot offer tour package by Travels Mantra',
    href: '/tours/baku',
  },
  {
    label: 'Almaty (Kazakhstan)',
    name: 'Almaty',
    country: 'Kazakhstan',
    desc: 'Mountain views, city tours, and easy e-visa packages.',
    image: '/images/almaty-kazakhstan-tour.webp',
    alt: 'Almaty Kazakhstan hot offer tour package by Travels Mantra',
    href: '/tours/almaty',
  },
  {
    label: 'Bishkek (Kyrgyzstan)',
    name: 'Bishkek',
    country: 'Kyrgyzstan',
    desc: 'Issyk-Kul lake trips and Tian Shan mountain escapes.',
    image: '/images/bishkek-kyrgyzstan-tour.webp',
    alt: 'Bishkek Kyrgyzstan hot offer tour package by Travels Mantra',
    href: '/tours/bishkek',
  },
  {
    label: 'Georgia (Tbilisi)',
    name: 'Tbilisi',
    country: 'Georgia',
    desc: 'Tbilisi old town, wine country, and mountain scenery tours.',
    image: '/images/georgia-tour.webp',
    alt: 'Georgia Tbilisi hot offer tour package by Travels Mantra',
    href: '/tours/georgia',
  },
  {
    label: 'Kiev (Ukraine)',
    name: 'Kiev',
    country: 'Ukraine',
    desc: 'Golden-domed churches, heritage walks, and city tours.',
    image: '/images/kiev-ukraine-tour.webp',
    alt: 'Kiev Ukraine hot offer tour package by Travels Mantra',
    href: '/tours/kiev',
  },
  {
    label: 'Belarus (Minsk)',
    name: 'Minsk',
    country: 'Belarus',
    desc: 'Soviet-era architecture, parks, and cultural city breaks.',
    image: '/images/belarus-minsk-tour.webp',
    alt: 'Belarus Minsk hot offer tour package by Travels Mantra',
    href: '/tours/belarus',
  },
  {
    label: 'Turkey',
    name: 'Turkey',
    country: 'Turkey',
    desc: 'Istanbul highlights, Cappadocia, and Mediterranean getaways.',
    image: '/images/turkey-tour.webp',
    alt: 'Turkey hot offer tour package by Travels Mantra',
    href: '/tours/turkey',
  },
] as const;

export type NavLink =
  | { href: string; label: string; hot?: false }
  | { href: string; label: string; hot: true; children: readonly { label: string; href: string }[] };

export const navLinks: NavLink[] = [
  { href: '/tours', label: 'Tours' },
  { href: '/excursions', label: 'Excursions' },
  { href: '/about-us', label: 'About Us' },
  {
    href: '/hot-offers',
    label: 'Hot Offers',
    hot: true,
    children: hotOfferDestinations.map((d) => ({ label: d.label, href: d.href })),
  },
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
  'Russia (Moscow)',
  'Armenia (Yerevan)',
  'Tashkent',
  'Baku',
  'Almaty',
  'Bishkek',
  'Georgia (Tbilisi)',
  'Kiev',
  'Belarus (Minsk)',
  'Turkey',
  'Samarkand',
  'Bukhara',
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
    image: '/images/astana-kazakhstan-tour.webp',
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
    image: '/images/moscow-russia-tour.webp',
    alt: 'Russia Moscow tour package by Travels Mantra',
    href: '/tours/russia',
  },
  {
    name: 'Kiev',
    country: 'Ukraine',
    desc: 'Golden-domed churches, heritage walks, and city tours.',
    image: '/images/kiev-ukraine-tour.webp',
    alt: 'Kiev Ukraine tour package by Travels Mantra',
    href: '/tours/kiev',
  },
  {
    name: 'Belarus',
    country: 'Belarus',
    desc: 'Minsk city breaks with parks and cultural landmarks.',
    image: '/images/belarus-minsk-tour.webp',
    alt: 'Belarus Minsk tour package by Travels Mantra',
    href: '/tours/belarus',
  },
  {
    name: 'Turkey',
    country: 'Turkey',
    desc: 'Istanbul highlights, Cappadocia, and Mediterranean getaways.',
    image: '/images/turkey-tour.webp',
    alt: 'Turkey tour package by Travels Mantra',
    href: '/tours/turkey',
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
    image: '/images/moscow-russia-tour.webp',
    alt: 'Moscow Russia tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/russia',
  },
  {
    title: 'Kiev Tour Package',
    subtitle: 'Ukraine Heritage Tour',
    duration: '4N / 5D',
    price: 'ON REQUEST',
    image: '/images/kiev-ukraine-tour.webp',
    alt: 'Kiev Ukraine tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/kiev',
  },
  {
    title: 'Belarus Tour Package',
    subtitle: 'Minsk City Break',
    duration: '3N / 4D',
    price: 'ON REQUEST',
    image: '/images/belarus-minsk-tour.webp',
    alt: 'Belarus Minsk tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/belarus',
  },
  {
    title: 'Turkey Holiday Package',
    subtitle: 'Istanbul & Beyond',
    duration: '5N / 6D',
    price: 'ON REQUEST',
    image: '/images/turkey-tour.webp',
    alt: 'Turkey holiday tour package by Travels Mantra',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
    href: '/tours/turkey',
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
  'Visa Support (LOI)',
  'Transfers on Arrival and Departure',
  'Room Reservation & Accommodation in Hotels and B&B',
  'Local Interpreters and Hindi-Speaking Guides',
  'Conference Halls Rental for Business Meetings',
  'Air Ticket Reservation',
  'Sightseeing & Transportation by Cars, Mini-Bus, and Coaches',
  'Tailor-Made, Customized & Regular Itineraries',
];

export const UZBEKISTAN_TOURISM_BOARD_URL = 'https://uzbekistan.travel/';

export const aboutUsIntro = {
  certification: 'An ISO 9001:2015 Certified',
  companyName: 'Travels Mantra',
  bannerSubtitle:
    'Central Asia tour experts offering certified travel experiences to Uzbekistan, Kazakhstan, and Kyrgyzstan.',
  paragraphs: [
    'Travels Mantra (An ISO 9001:2015 Certified Organization and Euro Asia certified travel agent by Uzbekistan Tourism & registered by Uzbekistan Tourism Board) was formed to revolutionize and redefine the travel industry by exploring the hidden destinations of Central Asia in 2008. With over 10 years of experience, we believe in providing complete satisfaction and contentment to our travel agents as well as clients. As your trusted travel consolidator, destination management company, and travel wholesaler, we ensure quality, transparency, and reliability.',
    'We operate offices across Central Asia including Tashkent (Uzbekistan), Almaty (Kazakhstan), Russia, Serbia, Belarus, Kyrgyzstan, Ukraine, Georgia, Armenia, Bosnia, and Azerbaijan.',
  ],
  tourismBoardText: 'To know more about regional tourism updates and travel guidelines, visit the',
  tourismBoardLabel: 'Official Uzbekistan Tourism Board',
};

export const aboutServicesSummary =
  'Our expert travel services include visa support, fixed departures, and customized itineraries to make your journey seamless and memorable.';

export const aboutHighlights = [
  {
    title: '65,000+ Hotels',
    desc: 'We listed more than 65,000+ hotels globally at reliable offers and rates.',
  },
  {
    title: 'Low Rates & Top Savings',
    desc: 'We provide lower rates with true value for your money — exactly what you want. That\'s why we created the Travels Mantra Best Price Guarantee.',
  },
  {
    title: 'Reviewed by Real Travelers',
    desc: 'Travels Mantra aims to update travelers with real-time experiences of their journey.',
  },
  {
    title: 'Make Your Plan',
    desc: 'Travels Mantra will customize your tour plan for your upcoming holidays.',
  },
];

export const aboutTravelTips = [
  {
    title: 'Travel Guide and Tips',
    desc: 'Explore expert Central Asia travel guides and tips with Travels Mantra for your next adventure.',
    image: '/images/blog-central-asia-guide.webp',
    alt: 'Traveler exploring Central Asia mountains – Travels Mantra travel guide and tips for Uzbekistan, Kazakhstan, and Kyrgyzstan tours',
    href: '/blog',
  },
  {
    title: 'Baggage Policy',
    desc: 'As all airlines have their individually unique rules, we recommend that you check their website and verify your baggage allowance. This is a necessary step in order to ensure that you meet the requirements for your flight and avoid any additional fees.',
  },
  {
    title: 'Airport Check-in',
    desc: 'There are multiple check-in options available in India — web check-in, tele check-in, common user self-service kiosks, and check-in counters of respective airlines. If you have opted for web and tele check-in services, ensure your boarding pass has a seal from the appropriate airline counter to avoid any inconvenience.',
  },
  {
    title: 'Traveling with Kids',
    desc: 'Flying with children of any age can be daunting whether you are a seasoned traveler or flying for the first time. By reviewing basic travel tips and strategies, you will navigate air travel with infants, toddlers, or children with ease and arrive at your destination with your sanity intact. It\'s all about having the right supplies when traveling with kids.',
  },
  {
    title: 'Special Assistance',
    desc: 'Special assistance requirements need to be pre-booked through your airline and/or tour operator prior to your arrival at the terminal, such as a wheelchair.',
  },
];

export const aboutFeaturedArticles = [
  { title: 'Kyrgyzstan Tourism – Bishkek Nightlife', href: '/blog/bishkek-nightlife-guide' },
  { title: 'Germany Tourism', href: '/blog' },
  { title: 'Austria Tourism – Vienna Packages', href: '/blog' },
  { title: 'Russia Tourism', href: '/tours/russia' },
  { title: 'Kazakh Tourism', href: '/tours/almaty' },
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
  'Russia (Moscow)',
  'Armenia (Yerevan)',
  'Tashkent',
  'Baku',
  'Almaty',
  'Bishkek',
  'Georgia (Tbilisi)',
  'Kiev',
  'Belarus (Minsk)',
  'Turkey',
  'Samarkand',
  'Bukhara',
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
  { label: 'Russia (Moscow)', href: '/tours/russia' },
  { label: 'Armenia (Yerevan)', href: '/tours/armenia' },
  { label: 'Tashkent', href: '/tours/tashkent' },
  { label: 'Baku', href: '/tours/baku' },
  { label: 'Almaty', href: '/tours/almaty' },
  { label: 'Bishkek', href: '/tours/bishkek' },
  { label: 'Georgia (Tbilisi)', href: '/tours/georgia' },
  { label: 'Kiev', href: '/tours/kiev' },
  { label: 'Belarus (Minsk)', href: '/tours/belarus' },
  { label: 'Turkey', href: '/tours/turkey' },
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
  { name: 'Russia', image: '/images/moscow-russia-tour.webp', alt: 'Russia Moscow tour destinations' },
  { name: 'Ukraine', image: '/images/kiev-ukraine-tour.webp', alt: 'Ukraine Kiev tour destinations' },
  { name: 'Belarus', image: '/images/belarus-minsk-tour.webp', alt: 'Belarus Minsk tour destinations' },
  { name: 'Turkey', image: '/images/turkey-tour.webp', alt: 'Turkey tour destinations' },
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

export const heroOffers = hotOfferDestinations.map((dest) => ({
  title: dest.label,
  text: dest.desc,
  priceNote: 'Special pricing — enquire now',
  image: dest.image,
  alt: dest.alt,
  href: dest.href,
}));
