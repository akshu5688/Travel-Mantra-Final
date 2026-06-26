import { useCallback, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { X } from '@phosphor-icons/react';
import HotelSearchForm from '../components/hotels/HotelSearchForm';
import HotelFiltersPanel from '../components/hotels/HotelFilters';
import HotelCard from '../components/hotels/HotelCard';
import HotelMap from '../components/hotels/HotelMap';
import { getCityCenter, getHotelsByCity } from '../data/hotels';
import type { HotelFilters, SortOption } from '../types/hotel';
import { filterHotels, matchesCustomBudget, parseSearchParams, sortHotels } from '../utils/hotelSearch';

const SORT_TABS: { id: SortOption; label: string }[] = [
  { id: 'popularity', label: 'Popularity' },
  { id: 'priceLow', label: 'Price (Low to High)' },
  { id: 'priceHigh', label: 'Price (High to Low)' },
  { id: 'rating', label: 'User Rating (Highest)' },
  { id: 'distance', label: 'Nearest to You' },
];

export default function HotelResultsPage() {
  const [searchParams] = useSearchParams();
  const search = useMemo(() => parseSearchParams(searchParams), [searchParams]);

  const cityHotels = useMemo(() => getHotelsByCity(search.city), [search.city]);
  const mapCenter = useMemo(
    () => getCityCenter(search.city) || { lat: 41.2995, lng: 69.2401 },
    [search.city],
  );

  const [filters, setFilters] = useState<HotelFilters>({
    query: '',
    suggested: [],
    priceRanges: search.budgetRanges,
    propertyTypes: [],
  });
  const [sort, setSort] = useState<SortOption>('popularity');
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null);
  const [mapExpanded, setMapExpanded] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const filtered = useMemo(() => {
    const base = filterHotels(cityHotels, filters);
    if (search.budgetMin == null && search.budgetMax == null) return base;
    return base.filter((h) => matchesCustomBudget(h.price, search.budgetMin, search.budgetMax));
  }, [cityHotels, filters, search.budgetMin, search.budgetMax]);
  const results = useMemo(
    () => sortHotels(filtered, sort, userLocation),
    [filtered, sort, userLocation],
  );

  const handleUseMyLocation = useCallback(() => {
    if (!navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setSort('distance');
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 10000 },
    );
  }, []);

  const scrollToHotel = (id: string) => {
    setSelectedHotelId(id);
    document.getElementById(`hotel-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const totalLabel = results.length > 0 ? results.length : cityHotels.length;

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-16">
      <HotelSearchForm variant="sticky" initial={search} />

      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5">
        <HotelFiltersPanel
          cityHotels={cityHotels}
          filters={filters}
          onChange={setFilters}
          mapCenter={mapCenter}
          visibleHotels={results}
          userLocation={userLocation}
          selectedHotelId={selectedHotelId}
          onSelectHotel={scrollToHotel}
          onExploreMap={() => setMapExpanded(true)}
          onUseMyLocation={handleUseMyLocation}
          locating={locating}
        />

        <main>
          <nav className="text-xs text-[#4b5b47] mb-2">
            <Link to="/" className="hover:text-[#336443]">
              Home
            </Link>
            {' › '}
            <Link to="/hotels" className="hover:text-[#336443]">
              Hotels
            </Link>
            {' › '}
            <span>{search.city}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1f2a1d]">
              {totalLabel} Properties in {search.city}
            </h1>
            <button
              type="button"
              onClick={() => setShowTips(true)}
              className="text-xs border border-[#E5E5E5] bg-white rounded-full px-3 py-1.5 hover:bg-[#fafafa]"
            >
              Explore Travel Tips
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-4">
            {SORT_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSort(tab.id)}
                className={`shrink-0 text-xs sm:text-sm px-3 py-2 rounded-full border transition-colors ${
                  sort === tab.id
                    ? 'bg-blue-50 border-blue-500 text-blue-600 font-semibold'
                    : 'bg-white border-[#E5E5E5] text-[#1f2a1d] hover:border-blue-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 mb-5">
            <span className="text-2xl">🎁</span>
            <div className="flex-1 min-w-0">
              <strong className="text-sm block">Travels Mantra Rewards</strong>
              <p className="text-xs text-[#4b5b47]">Earn points on every booking — exclusive member deals</p>
            </div>
            <Link to="/offers" className="text-xs font-semibold text-blue-600 whitespace-nowrap">
              Learn More
            </Link>
          </div>

          {results.length === 0 ? (
            <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 text-center">
              <p className="text-[#4b5b47] mb-4">No hotels match your filters. Try adjusting your search.</p>
              <button
                type="button"
                onClick={() =>
                  setFilters({ query: '', suggested: [], priceRanges: [], propertyTypes: [] })
                }
                className="btn-outline text-sm"
              >
                Clear filters
              </button>
            </div>
          ) : (
            results.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
                highlighted={selectedHotelId === hotel.id}
                onSelect={() => setSelectedHotelId(hotel.id)}
              />
            ))
          )}
        </main>
      </div>

      {mapExpanded && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E5E5]">
              <h2 className="font-semibold text-[#1f2a1d]">Hotels near {search.city}</h2>
              <button
                type="button"
                onClick={() => setMapExpanded(false)}
                className="p-2 rounded-lg hover:bg-[#f3f4f6]"
                aria-label="Close map"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 min-h-0 p-2">
              <HotelMap
                hotels={results}
                center={mapCenter}
                userLocation={userLocation}
                selectedId={selectedHotelId}
                onSelect={(id) => {
                  scrollToHotel(id);
                  setMapExpanded(false);
                }}
                expanded
              />
            </div>
            <div className="px-4 py-3 border-t border-[#E5E5E5] flex gap-2">
              <button type="button" onClick={handleUseMyLocation} className="btn-outline text-sm flex-1">
                {locating ? 'Locating…' : 'Use My Location'}
              </button>
              <button type="button" onClick={() => setMapExpanded(false)} className="btn-primary text-sm flex-1 !bg-blue-600">
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {showTips && (
        <div className="fixed inset-0 z-[60] bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="font-display text-lg font-semibold mb-3">Travel Tips for {search.city}</h3>
            <ul className="text-sm text-[#4b5b47] space-y-2 list-disc pl-5">
              <li>Book beachfront properties early during peak season (Nov–Feb).</li>
              <li>Check free cancellation before confirming your stay.</li>
              <li>Use &ldquo;Nearest to You&rdquo; after enabling location to find nearby hotels.</li>
              <li>Contact Travels Mantra for bundled flight + hotel packages.</li>
            </ul>
            <button type="button" onClick={() => setShowTips(false)} className="btn-primary mt-5 w-full text-sm">
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
