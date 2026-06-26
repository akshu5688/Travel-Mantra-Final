import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  searchDestinations,
  travelMonthOptions,
  durationOptions,
  travellerOptions,
  budgetOptions,
} from '../data/content';

type TripSearchBoxProps = {
  compact?: boolean;
  inHero?: boolean;
};

export default function TripSearchBox({ compact = false, inHero = false }: TripSearchBoxProps) {
  const [activeTab, setActiveTab] = useState<'packages' | 'hotels'>('packages');
  const fieldCol = compact ? '' : 'col-span-1';

  return (
    <div className="trip-search w-full">
      {inHero && (
        <div className="flex gap-1 mb-4 p-1 bg-[#FAFAFA] rounded-xl border border-[#E5E5E5] w-fit">
          <button
            type="button"
            onClick={() => setActiveTab('packages')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] ${
              activeTab === 'packages' ? 'bg-[#1f2a1d] text-white' : 'text-[#4b5b47] hover:text-[#1f2a1d]'
            }`}
          >
            Explore Packages
          </button>
          <Link
            to="/hotels"
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center ${
              activeTab === 'hotels' ? 'bg-[#1f2a1d] text-white' : 'text-[#4b5b47] hover:text-[#1f2a1d]'
            }`}
            onClick={() => setActiveTab('hotels')}
          >
            Hotels
          </Link>
        </div>
      )}

      <form
        id={inHero ? undefined : 'hero-enquiry'}
        className="w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={`trip-search-heading ${compact ? '!mb-3 !pb-2' : ''}`}>
          <p className={`trip-search-title ${compact ? '!text-sm sm:!text-base' : ''}`}>Find Your Perfect Trip</p>
          {!compact && (
            <p className="trip-search-sub">Search Central Asia packages by destination, month, and budget</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">
          <div className={fieldCol}>
            <label className="label-field" htmlFor="search-destination">Destination</label>
            <select id="search-destination" className="input-field min-h-[44px]" defaultValue="">
              <option value="" disabled>Select destination</option>
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
    </div>
  );
}
