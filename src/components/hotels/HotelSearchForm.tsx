import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOTEL_CITIES, PRICE_RANGES, TRENDING_CITIES, type PriceRangeId } from '../../types/hotel';
import { buildResultsSearchParams, defaultCheckIn, defaultCheckOut } from '../../utils/hotelSearch';
import { getLocationImage } from '../../data/locationImages';

type HotelSearchFormProps = {
  variant?: 'hero' | 'sticky' | 'page' | 'embedded';
  initial?: {
    city?: string;
    checkIn?: string;
    checkOut?: string;
    rooms?: number;
    adults?: number;
    children?: number;
    budgetRanges?: PriceRangeId[];
  };
};

const HOTEL_CITY_COUNTRY: Record<string, string> = {
  Tashkent: 'Uzbekistan',
  Samarkand: 'Uzbekistan',
  Bukhara: 'Uzbekistan',
  Almaty: 'Kazakhstan',
  Baku: 'Azerbaijan',
  Bishkek: 'Kyrgyzstan',
  Delhi: 'India',
  Moscow: 'Russia',
};

export default function HotelSearchForm({ variant = 'page', initial }: HotelSearchFormProps) {
  const navigate = useNavigate();
  const [city, setCity] = useState(initial?.city || 'Tashkent');
  const [country, setCountry] = useState('Uzbekistan');
  const [checkIn, setCheckIn] = useState(initial?.checkIn || defaultCheckIn());
  const [checkOut, setCheckOut] = useState(initial?.checkOut || defaultCheckOut());
  const [rooms, setRooms] = useState(initial?.rooms || 1);
  const [adults, setAdults] = useState(initial?.adults || 2);
  const [children, setChildren] = useState(initial?.children || 0);
  const [budgetRanges, setBudgetRanges] = useState<PriceRangeId[]>(initial?.budgetRanges || []);
  const [showGuests, setShowGuests] = useState(false);
  const [showBudget, setShowBudget] = useState(false);

  const cityPreview = getLocationImage(city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qs = buildResultsSearchParams({ city, checkIn, checkOut, rooms, adults, children, budgetRanges });
    navigate(`/hotels/results?${qs}`);
  };

  const pickTrending = (c: string, co: string) => {
    setCity(c);
    setCountry(co);
  };

  const pickCity = (c: string) => {
    setCity(c);
    setCountry(HOTEL_CITY_COUNTRY[c] || 'Central Asia');
  };

  const toggleBudget = (id: PriceRangeId) => {
    setBudgetRanges((prev) => (prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]));
  };

  const budgetLabel =
    budgetRanges.length === 0
      ? 'Any budget'
      : budgetRanges
          .map((id) => PRICE_RANGES.find((r) => r.id === id)?.label)
          .filter(Boolean)
          .join(', ');

  if (variant === 'sticky') {
    return (
      <form onSubmit={handleSubmit} className="sticky-search-bar bg-white border-b border-[#E5E5E5] py-3 px-4 sticky top-[57px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2 sm:gap-4">
          <StickyField label="City" value={city} />
          <StickyField label="Check-in" value={formatShort(checkIn)} />
          <StickyField label="Check-out" value={formatShort(checkOut)} />
          <StickyField label="Rooms" value={`${rooms} Room${rooms > 1 ? 's' : ''}, ${adults} Adult${adults > 1 ? 's' : ''}`} />
          <button type="submit" className="ml-auto btn-secondary font-bold text-sm px-6 py-2.5 rounded-md">
            Find Your Perfect Trip
          </button>
        </div>
      </form>
    );
  }

  const isEmbedded = variant === 'embedded';

  return (
    <div className={variant === 'hero' || isEmbedded ? '' : 'w-full'}>
      <div className="mb-4 rounded-xl overflow-hidden border border-[#E5E5E5] aspect-[21/9] sm:aspect-[3/1] max-h-[140px] relative">
        <img src={cityPreview.image} alt={cityPreview.alt} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/70 via-transparent to-transparent" />
        <div className="absolute bottom-2 left-3 text-white">
          <p className="text-sm font-semibold drop-shadow">{city}, {country}</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className={
          isEmbedded
            ? 'w-full pb-2'
            : 'bg-white rounded-2xl border border-[#E5E5E5] shadow-xl p-4 sm:p-5 pb-10 relative'
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-[#E5E5E5] rounded-xl overflow-hidden">
          <SearchField label="City, Property or Location">
            <select
              value={city}
              onChange={(e) => pickCity(e.target.value)}
              className="w-full text-base font-bold text-[#1f2a1d] bg-transparent border-none outline-none cursor-pointer"
            >
              {HOTEL_CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <span className="text-sm text-[#4b5b47]">{country}</span>
          </SearchField>

          <SearchField label="Check-In">
            <input
              type="date"
              value={checkIn}
              min={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-base font-bold text-[#1f2a1d] bg-transparent border-none outline-none"
            />
            <span className="text-sm text-[#4b5b47]">{weekday(checkIn)}</span>
          </SearchField>

          <SearchField label="Check-Out">
            <input
              type="date"
              value={checkOut}
              min={checkIn || new Date().toISOString().slice(0, 10)}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-base font-bold text-[#1f2a1d] bg-transparent border-none outline-none"
            />
            <span className="text-sm text-[#4b5b47]">{weekday(checkOut)}</span>
          </SearchField>

          <SearchField label="Rooms & Guests" onClick={() => setShowGuests((v) => !v)}>
            <strong className="text-base font-bold text-[#1f2a1d]">
              {rooms} Room{rooms > 1 ? 's' : ''}, {adults} Adult{adults > 1 ? 's' : ''}
              {children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}
            </strong>
            {showGuests && (
              <div
                className="absolute z-20 mt-2 left-0 right-0 bg-white border border-[#E5E5E5] rounded-xl shadow-lg p-4 space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                <GuestStepper label="Rooms" value={rooms} min={1} max={4} onChange={setRooms} />
                <GuestStepper label="Adults" value={adults} min={1} max={8} onChange={setAdults} />
                <GuestStepper label="Children" value={children} min={0} max={6} onChange={setChildren} />
              </div>
            )}
          </SearchField>

          <SearchField label="Price Per Night" onClick={() => setShowBudget((v) => !v)}>
            <strong className="text-sm font-semibold text-[#1f2a1d] line-clamp-2">{budgetLabel}</strong>
            {showBudget && (
              <div
                className="absolute z-20 mt-2 left-0 right-0 bg-white border border-[#E5E5E5] rounded-xl shadow-lg p-3 space-y-2 max-h-48 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {PRICE_RANGES.map((range) => (
                  <label key={range.id} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="checkbox"
                      checked={budgetRanges.includes(range.id)}
                      onChange={() => toggleBudget(range.id)}
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            )}
          </SearchField>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-2">Trending</p>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-0.5 px-0.5">
            {TRENDING_CITIES.map((t) => {
              const loc = getLocationImage(t.city);
              const active = city === t.city;
              return (
                <button
                  key={t.city}
                  type="button"
                  onClick={() => pickTrending(t.city, t.country)}
                  className={`shrink-0 flex items-center gap-2 rounded-full border pl-1 pr-3 py-1 min-h-[44px] transition-colors ${
                    active ? 'border-[#336443] bg-[#85AB8B]/15' : 'border-[#E5E5E5] bg-[#FAFAFA] hover:border-[#85AB8B]/50'
                  }`}
                >
                  <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#E5E5E5]">
                    <img src={loc.image} alt={loc.alt} className="w-full h-full object-cover" />
                  </span>
                  <span className="text-xs font-semibold text-[#1f2a1d] whitespace-nowrap">{t.city}</span>
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className={
            isEmbedded
              ? 'btn-secondary trip-search-submit w-full min-h-[44px] mt-4'
              : 'absolute left-1/2 -translate-x-1/2 -bottom-5 bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white font-bold text-sm tracking-wide px-10 sm:px-14 py-3.5 rounded-lg shadow-lg transition-all hover:-translate-y-0.5 hover:-translate-x-1/2'
          }
        >
          Find Your Perfect Trip
        </button>
      </form>
    </div>
  );
}

function SearchField({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      className={`relative p-3 sm:p-4 border-b sm:border-b-0 sm:border-r border-[#E5E5E5] last:border-r-0 hover:bg-[#fafafa] transition-colors ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <label className="block text-[10px] font-semibold uppercase tracking-wide text-[#4b5b47] mb-1">{label}</label>
      {children}
    </div>
  );
}

function StickyField({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-3 border-r border-[#E5E5E5] last:border-r-0">
      <small className="block text-[10px] uppercase text-[#4b5b47]">{label}</small>
      <strong className="text-sm text-[#1f2a1d]">{value}</strong>
    </div>
  );
}

function GuestStepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-8 h-8 rounded-full border border-[#E5E5E5] font-bold hover:bg-[#f3f4f6]"
          onClick={() => onChange(Math.max(min, value - 1))}
        >
          −
        </button>
        <span className="w-6 text-center font-semibold">{value}</span>
        <button
          type="button"
          className="w-8 h-8 rounded-full border border-[#E5E5E5] font-bold hover:bg-[#f3f4f6]"
          onClick={() => onChange(Math.min(max, value + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}

function weekday(iso: string): string {
  if (!iso) return '';
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'long' });
}

function formatShort(iso: string): string {
  if (!iso) return '—';
  return new Date(iso + 'T12:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}
