import { enquiryDestinations, budgetOptions } from '../data/content';

export default function QuickTripEnquiry() {
  return (
    <form
      id="hero-enquiry"
      className="trip-enquiry w-full max-w-4xl mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="trip-enquiry-heading">
        <p className="trip-enquiry-title">Quick Trip Enquiry</p>
        <p className="trip-enquiry-sub">Share your trip details — we&apos;ll plan the rest</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        <div className="col-span-2 lg:col-span-1">
          <label className="label-field">Destination</label>
          <select className="input-field" defaultValue="">
            <option value="" disabled>Select destination</option>
            {enquiryDestinations.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-field">Departure From</label>
          <input className="input-field" placeholder="Delhi, Mumbai" type="text" />
        </div>
        <div>
          <label className="label-field">Travel Date</label>
          <input className="input-field" type="date" />
        </div>
        <div>
          <label className="label-field">Adults</label>
          <select className="input-field" defaultValue="2">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="label-field">Children</label>
          <select className="input-field" defaultValue="0">
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field">Budget</label>
          <select className="input-field" defaultValue="">
            <option value="" disabled>Select budget</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="label-field">Phone Number</label>
          <input className="input-field" placeholder="+91 98765 43210" type="tel" required />
        </div>
        <div className="col-span-2 sm:col-span-2 lg:col-span-2 flex items-end">
          <button type="submit" className="btn-primary trip-enquiry-submit w-full">Send Enquiry</button>
        </div>
      </div>
    </form>
  );
}
