import type { Hotel, HotelFilters, PriceRangeId, SortOption } from '../types/hotel';
import { PRICE_RANGES } from '../types/hotel';

export function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function matchesPriceRange(price: number, rangeId: PriceRangeId): boolean {
  const range = PRICE_RANGES.find((r) => r.id === rangeId);
  if (!range) return true;
  if (range.max === null) return price >= range.min;
  return price >= range.min && price < range.max;
}

function matchesSuggested(hotel: Hotel, filterId: string): boolean {
  switch (filterId) {
    case 'rushDeal':
      return hotel.rushDeal;
    case 'lastMinute':
      return hotel.lastMinute;
    case 'star5':
      return hotel.stars === 5;
    case 'star4':
      return hotel.stars === 4;
    case 'star3':
      return hotel.stars === 3;
    case 'breakfast':
      return hotel.breakfastIncluded;
    case 'coupleFriendly':
      return hotel.coupleFriendly;
    default:
      return true;
  }
}

export function filterHotels(
  hotels: Hotel[],
  filters: HotelFilters,
): Hotel[] {
  const query = filters.query.trim().toLowerCase();

  return hotels.filter((hotel) => {
    if (query) {
      const haystack = `${hotel.name} ${hotel.locality} ${hotel.locationNote}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    if (filters.suggested.length > 0) {
      const matchesAny = filters.suggested.some((id) => matchesSuggested(hotel, id));
      if (!matchesAny) return false;
    }

    if (filters.priceRanges.length > 0) {
      const matchesPrice = filters.priceRanges.some((rangeId) => matchesPriceRange(hotel.price, rangeId));
      if (!matchesPrice) return false;
    }

    if (filters.propertyTypes.length > 0) {
      if (!filters.propertyTypes.includes(hotel.propertyType)) return false;
    }

    return true;
  });
}

export function sortHotels(
  hotels: Hotel[],
  sort: SortOption,
  userLocation?: { lat: number; lng: number } | null,
): Hotel[] {
  const sorted = [...hotels];

  switch (sort) {
    case 'priceLow':
      return sorted.sort((a, b) => a.price - b.price);
    case 'priceHigh':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'distance':
      if (!userLocation) return sorted.sort((a, b) => b.popularity - a.popularity);
      return sorted.sort(
        (a, b) =>
          haversineKm(userLocation.lat, userLocation.lng, a.lat, a.lng) -
          haversineKm(userLocation.lat, userLocation.lng, b.lat, b.lng),
      );
  }

  return sorted.sort((a, b) => b.popularity - a.popularity);
}

export function countByFilter(hotels: Hotel[], filterId: string): number {
  return hotels.filter((h) => matchesSuggested(h, filterId)).length;
}

export function countByPriceRange(hotels: Hotel[], rangeId: PriceRangeId): number {
  return hotels.filter((h) => matchesPriceRange(h.price, rangeId)).length;
}

export function countByPropertyType(hotels: Hotel[], type: Hotel['propertyType']): number {
  return hotels.filter((h) => h.propertyType === type).length;
}

export function formatDateShort(iso: string): string {
  if (!iso) return '—';
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

export function formatDateCompact(iso: string): string {
  if (!iso) return '—';
  const d = new Date(iso + 'T12:00:00');
  const day = d.getDate();
  const month = d.toLocaleDateString('en-IN', { month: 'short' });
  const year = d.getFullYear().toString().slice(-2);
  return `${day} ${month}'${year}`;
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function defaultCheckIn(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function defaultCheckOut(): string {
  const d = new Date();
  d.setDate(d.getDate() + 2);
  return d.toISOString().slice(0, 10);
}

export function buildResultsSearchParams(params: {
  city: string;
  checkIn: string;
  checkOut: string;
  rooms: number;
  adults: number;
  children: number;
  budgetRanges?: PriceRangeId[];
}): string {
  const sp = new URLSearchParams();
  sp.set('city', params.city);
  sp.set('checkIn', params.checkIn);
  sp.set('checkOut', params.checkOut);
  sp.set('rooms', String(params.rooms));
  sp.set('adults', String(params.adults));
  sp.set('children', String(params.children));
  if (params.budgetRanges?.length) {
    sp.set('budget', params.budgetRanges.join(','));
  }
  return sp.toString();
}

export function parseSearchParams(searchParams: URLSearchParams) {
  const budget = searchParams.get('budget');
  return {
    city: searchParams.get('city') || 'Goa',
    checkIn: searchParams.get('checkIn') || defaultCheckIn(),
    checkOut: searchParams.get('checkOut') || defaultCheckOut(),
    rooms: Math.max(1, Number(searchParams.get('rooms')) || 1),
    adults: Math.max(1, Number(searchParams.get('adults')) || 2),
    children: Math.max(0, Number(searchParams.get('children')) || 0),
    budgetRanges: (budget ? budget.split(',') : []) as PriceRangeId[],
  };
}
