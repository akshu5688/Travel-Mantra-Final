export type PropertyType = 'hotel' | 'resort' | 'homestay' | 'villa';

export type SortOption = 'popularity' | 'priceLow' | 'priceHigh' | 'rating' | 'distance';

export type PriceRangeId = '0-1500' | '1500-3000' | '3000-5000' | '5000-8000' | '8000+';

export type Hotel = {
  id: string;
  name: string;
  city: string;
  country: string;
  locality: string;
  locationNote: string;
  stars: number;
  rating: number;
  ratingCount: number;
  ratingLabel: string;
  price: number;
  taxes: number;
  image: string;
  photoCount: number;
  features: string[];
  tag: string;
  propertyType: PropertyType;
  lat: number;
  lng: number;
  popularity: number;
  rushDeal: boolean;
  lastMinute: boolean;
  breakfastIncluded: boolean;
  coupleFriendly: boolean;
};

export type HotelSearchParams = {
  city: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
  budgetRanges: PriceRangeId[];
};

export type HotelFilters = {
  query: string;
  suggested: string[];
  priceRanges: PriceRangeId[];
  propertyTypes: PropertyType[];
};

export const PRICE_RANGES: { id: PriceRangeId; label: string; min: number; max: number | null }[] = [
  { id: '0-1500', label: '₹0 – ₹1,500', min: 0, max: 1500 },
  { id: '1500-3000', label: '₹1,500 – ₹3,000', min: 1500, max: 3000 },
  { id: '3000-5000', label: '₹3,000 – ₹5,000', min: 3000, max: 5000 },
  { id: '5000-8000', label: '₹5,000 – ₹8,000', min: 5000, max: 8000 },
  { id: '8000+', label: '₹8,000+', min: 8000, max: null },
];

export const SUGGESTED_FILTERS = [
  { id: 'rushDeal', label: 'Rush Deal' },
  { id: 'lastMinute', label: 'Last Minute Deals' },
  { id: 'star5', label: '5 Star' },
  { id: 'star4', label: '4 Star' },
  { id: 'breakfast', label: 'Breakfast Included' },
  { id: 'star3', label: '3 Star' },
  { id: 'coupleFriendly', label: 'Couple Friendly' },
] as const;

export const PROPERTY_TYPE_FILTERS: { id: PropertyType; label: string }[] = [
  { id: 'hotel', label: 'Hotel' },
  { id: 'resort', label: 'Resort' },
  { id: 'homestay', label: 'Homestay' },
  { id: 'villa', label: 'Villa' },
];

export const TRENDING_CITIES = [
  { city: 'Tashkent', country: 'Uzbekistan' },
  { city: 'Almaty', country: 'Kazakhstan' },
  { city: 'Baku', country: 'Azerbaijan' },
  { city: 'Samarkand', country: 'Uzbekistan' },
  { city: 'Bishkek', country: 'Kyrgyzstan' },
];

export const HOTEL_CITIES = [
  'Tashkent',
  'Samarkand',
  'Bukhara',
  'Almaty',
  'Baku',
  'Bishkek',
  'Delhi',
  'Moscow',
] as const;
