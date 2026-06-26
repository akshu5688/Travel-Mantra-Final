import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { allTourDestinations } from '../data/tourRegions';
import { tourSearchTripTypes } from '../data/tourSearchPackages';
import { budgetOptions } from '../data/content';

type TourSearchBarProps = {
  onSearch?: (filters: { destination: string; tripType: string; budget: string }) => void;
  compact?: boolean;
};

export default function TourSearchBar({ onSearch, compact = false }: TourSearchBarProps) {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [tripType, setTripType] = useState('All');
  const [budget, setBudget] = useState('');

  const destinationOptions = useMemo(
    () => allTourDestinations.map((d) => d.label).sort((a, b) => a.localeCompare(b)),
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.({ destination, tripType, budget });
    const params = new URLSearchParams();
    if (destination) params.set('dest', destination);
    if (tripType && tripType !== 'All') params.set('type', tripType);
    if (budget) params.set('budget', budget);
    const qs = params.toString();
    navigate(qs ? `/tours?${qs}#packages` : '/tours#packages');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl border border-[#E5E5E5] shadow-lg ${compact ? 'p-4' : 'p-4 sm:p-5'}`}
    >
      <div className={`grid grid-cols-1 gap-3 ${compact ? '' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
        <div className={compact ? '' : 'lg:col-span-2'}>
          <label className="label-field" htmlFor="tour-search-destination">
            Destination
          </label>
          <input
            id="tour-search-destination"
            list="tour-destination-options"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter a destination or tour name"
            className="input-field min-h-[44px]"
          />
          <datalist id="tour-destination-options">
            {destinationOptions.map((opt) => (
              <option key={opt} value={opt} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="label-field" htmlFor="tour-search-type">
            Trip Type
          </label>
          <select
            id="tour-search-type"
            className="input-field min-h-[44px]"
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            {tourSearchTripTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-field" htmlFor="tour-search-budget">
            Budget
          </label>
          <select
            id="tour-search-budget"
            className="input-field min-h-[44px]"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            <option value="">Any budget</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-xs text-[#4b5b47]">
          Get the hot deals — see it, believe it, book it.
        </p>
        <button type="submit" className="btn-primary min-h-[44px] inline-flex items-center justify-center gap-2 px-6">
          <MagnifyingGlass size={18} weight="bold" />
          Search
        </button>
      </div>
      {!compact && (
        <p className="mt-3 text-center text-xs text-[#4b5b47]">
          Need help choosing?{' '}
          <Link to="/contact-us" className="font-semibold text-[#336443] hover:underline">
            Talk to our travel advisor
          </Link>
        </p>
      )}
    </form>
  );
}
