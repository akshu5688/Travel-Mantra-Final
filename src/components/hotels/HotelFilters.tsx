import type { ReactNode } from 'react';
import { MagnifyingGlass, MapPin } from '@phosphor-icons/react';
import type { Hotel, HotelFilters, PropertyType } from '../../types/hotel';
import {
  PRICE_RANGES,
  PROPERTY_TYPE_FILTERS,
  SUGGESTED_FILTERS,
} from '../../types/hotel';
import {
  countByFilter,
  countByPriceRange,
  countByPropertyType,
} from '../../utils/hotelSearch';
import HotelMap from './HotelMap';

type HotelFiltersPanelProps = {
  cityHotels: Hotel[];
  filters: HotelFilters;
  onChange: (filters: HotelFilters) => void;
  mapCenter: { lat: number; lng: number };
  visibleHotels: Hotel[];
  userLocation: { lat: number; lng: number } | null;
  selectedHotelId: string | null;
  onSelectHotel: (id: string) => void;
  onExploreMap: () => void;
  onUseMyLocation: () => void;
  locating: boolean;
};

function toggleItem<T extends string>(list: T[], item: T): T[] {
  return list.includes(item) ? list.filter((i) => i !== item) : [...list, item];
}

export default function HotelFiltersPanel({
  cityHotels,
  filters,
  onChange,
  mapCenter,
  visibleHotels,
  userLocation,
  selectedHotelId,
  onSelectHotel,
  onExploreMap,
  onUseMyLocation,
  locating,
}: HotelFiltersPanelProps) {
  return (
    <aside className="flex flex-col gap-4">
      <div className="relative rounded-xl overflow-hidden border border-[#E5E5E5]">
        <HotelMap
          hotels={visibleHotels}
          center={mapCenter}
          userLocation={userLocation}
          selectedId={selectedHotelId}
          onSelect={onSelectHotel}
        />
        <button
          type="button"
          onClick={onExploreMap}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold px-4 py-2 rounded-md shadow-md transition-colors whitespace-nowrap"
        >
          EXPLORE ON MAP
        </button>
      </div>

      <button
        type="button"
        onClick={onUseMyLocation}
        disabled={locating}
        className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold border border-[#336443] text-[#336443] rounded-xl hover:bg-[#E8F5E9] transition-colors disabled:opacity-60"
      >
        <MapPin size={18} weight="fill" />
        {locating ? 'Finding your location…' : 'Use My Location'}
      </button>

      <div className="relative">
        <MagnifyingGlass
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4b5b47]"
        />
        <input
          type="text"
          value={filters.query}
          onChange={(e) => onChange({ ...filters, query: e.target.value })}
          placeholder="Search locality / hotel name"
          className="input-field pl-9 text-sm"
        />
      </div>

      <FilterGroup title="Suggested For You">
        {SUGGESTED_FILTERS.map((item) => (
          <FilterCheckbox
            key={item.id}
            label={item.label}
            count={countByFilter(cityHotels, item.id)}
            checked={filters.suggested.includes(item.id)}
            onChange={() =>
              onChange({
                ...filters,
                suggested: toggleItem(filters.suggested, item.id),
              })
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price Per Night">
        {PRICE_RANGES.map((range) => (
          <FilterCheckbox
            key={range.id}
            label={range.label}
            count={countByPriceRange(cityHotels, range.id)}
            checked={filters.priceRanges.includes(range.id)}
            onChange={() =>
              onChange({
                ...filters,
                priceRanges: toggleItem(filters.priceRanges, range.id),
              })
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Property Type">
        {PROPERTY_TYPE_FILTERS.map((item) => (
          <FilterCheckbox
            key={item.id}
            label={item.label}
            count={countByPropertyType(cityHotels, item.id as PropertyType)}
            checked={filters.propertyTypes.includes(item.id)}
            onChange={() =>
              onChange({
                ...filters,
                propertyTypes: toggleItem(filters.propertyTypes, item.id),
              })
            }
          />
        ))}
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-xl p-4">
      <h3 className="text-sm font-bold text-[#1f2a1d] mb-3">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterCheckbox({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-center gap-2 text-sm py-1 cursor-pointer text-[#1f2a1d]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="rounded border-[#E5E5E5] text-blue-600 focus:ring-blue-500"
      />
      <span className="flex-1">{label}</span>
      <span className="text-xs text-[#4b5b47]">({count})</span>
    </label>
  );
}
