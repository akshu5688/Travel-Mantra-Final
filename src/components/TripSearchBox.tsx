import { enquiryDestinations, budgetOptions, tripTypeOptions, travellerOptions } from '../data/content';

export default function TripSearchBox() {
  return (
    <form
      id="hero-enquiry"
      className="trip-search w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="trip-search-heading">
        <p className="trip-search-title">Find Your Perfect Trip</p>
        <p className="trip-search-sub">Search packages by destination, dates, and travel style</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field" htmlFor="search-destination">Destination</label>
          <select id="search-destination" className="input-field" defaultValue="">
            <option value="" disabled>Select destination</option>
            {enquiryDestinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field" htmlFor="search-departure">Departure From</label>
          <input id="search-departure" className="input-field" placeholder="Delhi, Mumbai" type="text" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field" htmlFor="search-date">Travel Date</label>
          <input id="search-date" className="input-field" type="date" />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field" htmlFor="search-travellers">Travellers</label>
          <select id="search-travellers" className="input-field" defaultValue="2 Adults">
            {travellerOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field" htmlFor="search-trip-type">Trip Type</label>
          <select id="search-trip-type" className="input-field" defaultValue="Family">
            {tripTypeOptions.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field" htmlFor="search-budget">Budget</label>
          <select id="search-budget" className="input-field" defaultValue="">
            <option value="" disabled>Select budget</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 lg:col-span-3 flex items-end">
          <button type="submit" className="btn-secondary trip-search-submit w-full sm:w-auto sm:min-w-[200px]">
            Search Packages
          </button>
        </div>
      </div>
    </form>
  );
}
