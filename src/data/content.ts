export const navLinks = [
  { href: '/tours', label: 'Tours' },
  { href: '/excursions', label: 'Excursions' },
  { href: '/about', label: 'About Us' },
  { href: '/offers', label: 'Hot Offers' },
  { href: '/visa', label: 'Visa' },
  { href: '/insurance', label: 'Travel Insurance' },
  { href: '/build-package', label: 'Build Your Package' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export const heroTrustBadges = [
  'Best Price Guarantee',
  'Visa Assistance',
  'Custom Packages',
  '24/7 Travel Support',
] as const;

export const heroPackages = [
  {
    title: 'Dubai Family Holiday',
    duration: '4N / 5D',
    inclusions: ['Visa', 'Hotel', 'Transfers', 'Sightseeing'],
    price: '₹49,999',
    priceLabel: 'Starting from ₹49,999',
    image: '/images/dubai-tour-package.webp',
    alt: 'Dubai skyline family holiday tour package',
    cta: 'View Package',
    href: '/contact',
  },
  {
    title: 'Bali Honeymoon Package',
    duration: '5N / 6D',
    inclusions: ['Hotel', 'Transfers', 'Sightseeing'],
    price: '₹59,999',
    priceLabel: 'Starting from ₹59,999',
    image: '/images/bali-indonesia-tour.webp',
    alt: 'Bali Indonesia honeymoon package with tropical scenery',
    cta: 'View Package',
    href: '/contact',
  },
  {
    title: 'Tashkent Tour Package',
    duration: '4N / 5D',
    inclusions: ['Flight', 'Food', 'Visa', 'Travel Guide', 'Transport'],
    price: 'ON REQUEST',
    priceLabel: 'ON REQUEST',
    image: '/images/tashkent-tour-package.webp',
    alt: 'Tashkent Uzbekistan heritage tour package',
    cta: 'Send Enquiry',
    href: '/contact',
  },
] as const;

export const heroOffers = [
  {
    title: 'Dubai Family Special',
    text: 'Save ₹8,000 on select family packages',
    priceNote: 'Save ₹8,000',
    image: '/images/dubai-tour-package.webp',
    alt: 'Dubai family holiday special offer',
    href: '/offers',
  },
  {
    title: 'Bali Honeymoon Deal',
    text: 'Romantic escapes with exclusive savings',
    priceNote: 'Save ₹10,000',
    image: '/images/bali-indonesia-tour.webp',
    alt: 'Bali honeymoon deal offer',
    href: '/offers',
  },
  {
    title: 'Thailand Budget Package',
    text: 'Beaches, temples & city tours included',
    priceNote: 'From ₹39,999',
    image: '/images/destination-asia.webp',
    alt: 'Thailand budget travel package offer',
    href: '/tours',
  },
  {
    title: 'Baku Holiday Deal',
    text: 'Flame Towers, Old City & Caspian views',
    priceNote: 'ON REQUEST',
    image: '/images/baku-tour-package.webp',
    alt: 'Baku Azerbaijan holiday deal',
    href: '/contact',
  },
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
  { title: 'Best Price Guarantee', desc: 'Competitive rates on flights, hotels, and complete tour packages.' },
  { title: 'Easy & Quick Booking', desc: 'Simple enquiry process with fast confirmation from our travel desk.' },
  { title: 'Best Tour Selection', desc: 'Handpicked itineraries across India, Asia, Europe, and beyond.' },
  { title: 'Visa Assistance', desc: 'Document checklist, application support, and country-wise guidance.' },
  { title: 'Travel Insurance', desc: 'Medical, baggage, delay, and cancellation cover for worry-free travel.' },
  { title: 'Build Your Package', desc: 'Customise destination, dates, hotels, flights, visa, and budget.' },
];

export const inclusionBadges = ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport', 'Insurance'] as const;

export const packages = [
  {
    title: 'Bali-Indonesia',
    duration: '5N / 6D',
    price: '₹54,999',
    image: '/images/bali-indonesia-tour.webp',
    alt: 'Bali Indonesia temple and rice terraces tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Vietnam Tour Package',
    duration: '9N / 10D',
    price: 'ON REQUEST',
    image: '/images/vietnam-tour-package.webp',
    alt: 'Vietnam Ha Long Bay and lantern street tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Tashkent Packages Tour',
    duration: '4N / 5D',
    price: '₹48,500',
    image: '/images/tashkent-tour-package.webp',
    alt: 'Registan Square Samarkand Uzbekistan heritage tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Almaty Tour Package',
    subtitle: 'Heart of Central Asia',
    duration: '5N / 6D',
    price: '₹56,999',
    image: '/images/almaty-tour-package.webp',
    alt: 'Almaty Kazakhstan city skyline with snow-capped Tian Shan mountains',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Singapore with Genting Dream Cruise',
    duration: '5N / 6D',
    price: '₹72,999',
    image: '/images/singapore-cruise-package.webp',
    alt: 'Singapore Marina Bay Sands skyline and cruise package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Mesmerizing Dubai',
    duration: '3N / 4D',
    price: '₹42,999',
    image: '/images/dubai-tour-package.webp',
    alt: 'Dubai skyline and desert safari tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Baku Holiday Package',
    duration: '4N / 5D',
    price: '₹49,999',
    image: '/images/baku-tour-package.webp',
    alt: 'Baku Azerbaijan Flame Towers skyline holiday package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Bishkek Tour Package',
    duration: '4N / 5D',
    price: 'ON REQUEST',
    image: '/images/bishkek-tour-package.webp',
    alt: 'Issyk-Kul lake and Tian Shan mountains near Bishkek Kyrgyzstan',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
];

export const destinationCategories = [
  { name: 'India', image: '/images/destination-india.webp', alt: 'Taj Mahal and iconic India heritage destinations' },
  { name: 'Asia', image: '/images/destination-asia.webp', alt: 'Thailand temples and Southeast Asia tour destinations' },
  { name: 'Central Asia', image: '/images/destination-central-asia.webp', alt: 'Registan Square Samarkand and Central Asia Silk Road tours' },
  { name: 'Europe', image: '/images/destination-europe.webp', alt: 'Santorini Greece and scenic European holiday destinations' },
  { name: 'Middle East', image: '/images/destination-middle-east.webp', alt: 'Baku Flame Towers and Middle East city tours' },
  { name: 'Africa', image: '/images/destination-africa.webp', alt: 'Africa safari and cultural tour packages' },
  { name: 'North America', image: '/images/destination-north-america.webp', alt: 'North America city and nature tour packages' },
  { name: 'Balkans', image: '/images/destination-balkans.webp', alt: 'Balkans heritage and coastal tour packages' },
  { name: 'Oceania', image: '/images/destination-oceania.webp', alt: 'Oceania Australia and New Zealand tour packages' },
];

export const excursions = [
  {
    title: 'Dubai Desert Safari',
    desc: 'Dune bashing, BBQ dinner, and cultural performances with hotel transfers.',
    region: 'Middle East',
    image: '/images/excursion-dubai-desert-safari.webp',
    alt: 'Dubai desert safari dunes at sunset',
  },
  {
    title: 'Bali Temple & Rice Terrace Tour',
    desc: 'Ubud culture trail with local guide, lunch, and private transport.',
    region: 'Asia',
    image: '/images/excursion-bali-temple.webp',
    alt: 'Bali temple and lush rice terraces in Ubud',
  },
  {
    title: 'Tashkent City Heritage Walk',
    desc: 'Historic mosques, bazaars, and metro art with expert local guide.',
    region: 'Central Asia',
    image: '/images/excursion-tashkent-heritage.webp',
    alt: 'Tashkent Uzbekistan heritage architecture and bazaar',
  },
  {
    title: 'Singapore Sentosa Day Pass',
    desc: 'Cable car, beaches, and attractions with optional cruise add-on.',
    region: 'Asia',
    image: '/images/excursion-singapore-sentosa.webp',
    alt: 'Singapore Marina Bay skyline and Sentosa attractions',
  },
  {
    title: 'Baku Old City Excursion',
    desc: 'Walled city, Flame Towers viewpoint, and Caspian waterfront tour.',
    region: 'Middle East',
    image: '/images/excursion-baku-old-city.webp',
    alt: 'Baku Azerbaijan old city walls and historic streets',
  },
  {
    title: 'Vietnam Cu Chi & City Tour',
    desc: 'Half-day heritage sites with transfers and English-speaking guide.',
    region: 'Asia',
    image: '/images/excursion-vietnam-cu-chi.webp',
    alt: 'Vietnam Ho Chi Minh city and heritage landmarks',
  },
];

export const visaServices = [
  { title: 'Tourist Visa Guidance', desc: 'Step-by-step visa process for Indian passport holders by destination.' },
  { title: 'Document Checklist', desc: 'Passport, photos, bank statements, and invitation letters organised for you.' },
  { title: 'Application Support', desc: 'Form filling, appointment booking, and embassy follow-up assistance.' },
  { title: 'Travel Insurance Help', desc: 'Insurance plans that meet visa requirements and protect your trip.' },
  { title: 'Country-wise Visa Information', desc: 'Up-to-date rules for Dubai, Schengen, UK, USA, and Central Asia.' },
];

export const testimonials = [
  {
    quote: 'Our Bali package was perfectly planned — flights, hotel, visa, and day tours were all coordinated smoothly by Travels Mantra.',
    trip: 'Bali-Indonesia 5N/6D',
    initials: 'TM',
  },
  {
    quote: 'Dubai family trip with desert safari and city tour was hassle-free. The team handled visa and insurance too.',
    trip: 'Mesmerizing Dubai 3N/4D',
    initials: 'RS',
  },
  {
    quote: 'Vietnam group tour covered Hanoi, Da Nang, and Ho Chi Minh with great hotels and a knowledgeable guide.',
    trip: 'Vietnam Tour Package 9N/10D',
    initials: 'NG',
  },
];

export const blogPosts = [
  {
    title: 'How to Plan a Central Asia Tour from India',
    date: 'May 2026',
    excerpt: 'Tashkent, Almaty, and Bishkek — what to know before you book.',
    image: '/images/blog-central-asia-guide.webp',
    alt: 'Central Asia mountain landscape near Almaty Kazakhstan',
  },
  {
    title: 'Dubai Visa Guide for Indian Travellers',
    date: 'April 2026',
    excerpt: 'Documents, processing time, and insurance requirements explained.',
    image: '/images/blog-dubai-visa-guide.webp',
    alt: 'Dubai skyline with Burj Khalifa at dusk',
  },
  {
    title: 'Best Time to Visit Bali & Vietnam',
    date: 'March 2026',
    excerpt: 'Season-wise tips for beaches, culture, and sightseeing.',
    image: '/images/blog-bali-vietnam-season.webp',
    alt: 'Bali Indonesia tropical temple and palm scenery',
  },
];

export const enquiryDestinations = [
  'Bali-Indonesia',
  'Vietnam',
  'Tashkent',
  'Almaty',
  'Singapore & Cruise',
  'Dubai',
  'Baku',
  'Bishkek',
  'Europe',
  'Other',
];

export const budgetOptions = [
  'Under ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000 – ₹2,00,000',
  'Above ₹2,00,000',
  'Flexible / ON REQUEST',
];

export const chatbotChips = ['Dubai', 'Bali', 'Tashkent', 'Baku', 'Visa Help', 'Build My Package'] as const;

export const serviceTabs = [
  { id: 'tours', label: 'Tours', href: '/tours' },
  { id: 'holiday', label: 'Holiday Packages', href: '/tours' },
  { id: 'offers', label: 'Hot Offers', href: '/offers' },
  { id: 'visa', label: 'Visa', href: '/visa' },
  { id: 'insurance', label: 'Travel Insurance', href: '/insurance' },
  { id: 'flights', label: 'Flights', href: '/contact' },
  { id: 'hotels', label: 'Hotels', href: '/contact' },
  { id: 'build', label: 'Build Your Package', href: '/build-package' },
  { id: 'excursions', label: 'Excursions', href: '/excursions' },
] as const;

export const popularDestinations = [
  { name: 'Dubai', image: '/images/dubai-tour-package.webp', alt: 'Dubai tours and packages' },
  { name: 'Bali', image: '/images/bali-indonesia-tour.webp', alt: 'Bali tours and packages' },
  { name: 'Thailand', image: '/images/destination-asia.webp', alt: 'Thailand tours and packages' },
  { name: 'Vietnam', image: '/images/vietnam-tour-package.webp', alt: 'Vietnam tours and packages' },
  { name: 'Baku', image: '/images/baku-tour-package.webp', alt: 'Baku tours and packages' },
  { name: 'Tashkent', image: '/images/tashkent-tour-package.webp', alt: 'Tashkent tours and packages' },
  { name: 'Almaty', image: '/images/almaty-tour-package.webp', alt: 'Almaty tours and packages' },
  { name: 'Bishkek', image: '/images/bishkek-tour-package.webp', alt: 'Bishkek tours and packages' },
  { name: 'Singapore', image: '/images/singapore-cruise-package.webp', alt: 'Singapore tours and packages' },
  { name: 'Maldives', image: '/images/dubai-tour-package.webp', alt: 'Maldives tours and packages' },
] as const;
