export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/tours', label: 'Tours' },
  { href: '/excursions', label: 'Excursions' },
  { href: '/about', label: 'About Us' },
  { href: '/offers', label: 'Hot Offers' },
  { href: '/visa', label: 'Visa' },
  { href: '/build-package', label: 'Build Your Package' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

export const trustCards = [
  { title: 'Best Price Guarantee', desc: 'Competitive rates on flights, hotels, and complete tour packages.' },
  { title: 'Easy & Quick Booking', desc: 'Simple enquiry process with fast confirmation from our travel desk.' },
  { title: 'Best Tour Selection', desc: 'Handpicked itineraries across India, Asia, Europe, and beyond.' },
  { title: 'Visa Assistance', desc: 'Document checklist, application support, and country-wise guidance.' },
  { title: 'Travel Insurance', desc: 'Medical, baggage, delay, and cancellation cover for worry-free travel.' },
  { title: 'Build Your Package', desc: 'Customise destination, dates, hotels, flights, visa, and budget.' },
];

export const inclusionBadges = ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'] as const;

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
    alt: 'Tashkent Uzbekistan heritage tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Almaty Tour Package',
    subtitle: 'Heart of Central Asia',
    duration: '5N / 6D',
    price: '₹56,999',
    image: '/images/almaty-tour-package.webp',
    alt: 'Almaty Kazakhstan mountain city tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Singapore with Genting Dream Cruise',
    duration: '5N / 6D',
    price: '₹72,999',
    image: '/images/singapore-cruise-package.webp',
    alt: 'Singapore Marina Bay and Genting Dream Cruise package',
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
    alt: 'Baku Azerbaijan Flame Towers holiday package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
  {
    title: 'Bishkek Tour Package',
    duration: '4N / 5D',
    price: 'ON REQUEST',
    image: '/images/bishkek-tour-package.webp',
    alt: 'Bishkek Kyrgyzstan mountain lake tour package',
    inclusions: ['Flight', 'Food', 'Visa', 'Sightseeing', 'Travel Guide', 'Transport'],
  },
];

export const destinationCategories = [
  { name: 'India', image: '/images/destination-india.webp', alt: 'India travel destinations including heritage and hill stations' },
  { name: 'Asia', image: '/images/destination-asia.webp', alt: 'Asia tour packages including Southeast and East Asia' },
  { name: 'Central Asia', image: '/images/destination-central-asia.webp', alt: 'Central Asia tours to Uzbekistan Kazakhstan and Kyrgyzstan' },
  { name: 'Europe', image: '/images/destination-europe.webp', alt: 'Europe holiday packages and scenic city tours' },
  { name: 'Middle East', image: '/images/destination-middle-east.webp', alt: 'Middle East tours including Dubai and Baku' },
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

export const chatbotChips = ['Bali', 'Dubai', 'Vietnam', 'Baku', 'Tashkent', 'Visa Help', 'Build My Package'];
