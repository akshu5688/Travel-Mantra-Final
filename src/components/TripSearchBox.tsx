import { useState } from 'react';
import { Link } from 'react-router-dom';
import HotelSearchForm from './hotels/HotelSearchForm';
import {
  searchDestinations,
  travelMonthOptions,
  durationOptions,
  travellerOptions,
  budgetOptions,
} from '../data/content';
import { getLocationImage, suggestedSearchDestinations } from '../data/locationImages';

type TripSearchBoxProps = {
  compact?: boolean;
  defaultTab?: 'packages' | 'hotels';
};

function resolveLocationKey(label: string) {
  const match = suggestedSearchDestinations.find(
    (d) => label.toLowerCase().includes(d.toLowerCase()) || d.toLowerCase().includes(label.toLowerCase().split(' ')[0]),
  );
  return match ?? label.split(' ')[0];
}

export default function TripSearchBox({ compact = false, defaultTab = 'packages' }: TripSearchBoxProps) {
  const [activeTab, setActiveTab] = useState<'packages' | 'hotels'>(defaultTab);
  const [selectedDestination, setSelectedDestination] = useState('Tashkent');
  const fieldCol = compact ? '' : 'col-span-1';
  const preview = getLocationImage(selectedDestination);

  return (
    <div className="trip-search w-full">
      <div className="trip-search-tabs flex gap-1 mb-4 p-1 bg-[#FAFAFA] rounded-xl border border-[#E5E5E5] w-full sm:w-fit">
        <button
          type="button"
          onClick={() => setActiveTab('packages')}
          className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors min-h-[44px] ${
            activeTab === 'packages' ? 'bg-[#1f2a1d] text-white' : 'text-[#4b5b47] hover:text-[#1f2a1d]'
          }`}
        >
          Explore Packages
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('hotels')}
          className={`flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors min-h-[44px] ${
            activeTab === 'hotels' ? 'bg-[#1f2a1d] text-white' : 'text-[#4b5b47] hover:text-[#1f2a1d]'
          }`}
        >
          Hotels
        </button>
      </div>

      <div className={`trip-search-heading ${compact ? '!mb-3 !pb-2' : ''}`}>
        <h2 className={`trip-search-title ${compact ? '!text-sm sm:!text-base' : ''}`}>Find Your Perfect Trip</h2>
        {!compact && (
          <p className="trip-search-sub">
            {activeTab === 'packages'
              ? 'Search Central Asia tour packages by destination, travel month, duration, and budget'
              : 'Search hotels and stays in Tashkent, Almaty, Baku, and across Central Asia'}
          </p>
        )}
      </div>

      {activeTab === 'packages' ? (
        <>
          <div className="mb-4 rounded-xl overflow-hidden border border-[#E5E5E5] aspect-[21/9] sm:aspect-[3/1] max-h-[140px]">
            <img src={preview.image} alt={preview.alt} className="w-full h-full object-cover object-center" />
          </div>
          <form className="w-full" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
              <div className={fieldCol}>
                <label className="label-field" htmlFor="search-destination">Destination</label>
                <select
                  id="search-destination"
                  className="input-field min-h-[44px]"
                  defaultValue={searchDestinations[0]}
                  onChange={(e) => setSelectedDestination(resolveLocationKey(e.target.value))}
                >
                  {searchDestinations.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className={fieldCol}>
                <label className="label-field" htmlFor="search-month">Travel Month</label>
                <select id="search-month" className="input-field min-h-[44px]" defaultValue="">
                  <option value="" disabled>Select month</option>
                  {travelMonthOptions.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <div className={fieldCol}>
                <label className="label-field" htmlFor="search-duration">Duration</label>
                <select id="search-duration" className="input-field min-h-[44px]" defaultValue="">
                  <option value="" disabled>Select duration</option>
                  {durationOptions.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className={fieldCol}>
                <label className="label-field" htmlFor="search-travellers">Travellers</label>
                <select id="search-travellers" className="input-field min-h-[44px]" defaultValue="2 Adults">
                  {travellerOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className={fieldCol}>
                <label className="label-field" htmlFor="search-budget">Budget</label>
                <select id="search-budget" className="input-field min-h-[44px]" defaultValue="">
                  <option value="" disabled>Select budget</option>
                  {budgetOptions.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="col-span-1 sm:col-span-2 lg:col-span-5 flex items-end">
                <Link
                  to="/"
                  state={{ scrollToEnquiry: true }}
                  className="btn-secondary trip-search-submit w-full min-h-[44px] text-center"
                >
                  Find Your Perfect Trip
                </Link>
              </div>
            </div>
          </form>

          <div className="mt-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-2">Suggested destinations</p>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-0.5 px-0.5">
              {suggestedSearchDestinations.map((dest) => {
                const loc = getLocationImage(dest);
                const active = selectedDestination === dest;
                return (
                  <button
                    key={dest}
                    type="button"
                    onClick={() => setSelectedDestination(dest)}
                    className={`shrink-0 flex items-center gap-2 rounded-full border pl-1 pr-3 py-1 min-h-[44px] transition-colors ${
                      active ? 'border-[#336443] bg-[#85AB8B]/15' : 'border-[#E5E5E5] bg-white hover:border-[#85AB8B]/50'
                    }`}
                  >
                    <span className="w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#E5E5E5]">
                      <img src={loc.image} alt={loc.alt} className="w-full h-full object-cover" />
                    </span>
                    <span className="text-xs font-semibold text-[#1f2a1d] whitespace-nowrap">{dest}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <HotelSearchForm variant="embedded" />
      )}
    </div>
  );
}
