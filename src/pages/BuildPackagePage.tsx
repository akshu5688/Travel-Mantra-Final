import PageBanner from '../components/PageBanner';
import { enquiryDestinations, budgetOptions } from '../data/content';

export default function BuildPackagePage() {
  return (
    <>
      <PageBanner
        label="Build Your Package"
        title="Create your perfect itinerary"
        subtitle="Customise destination, dates, travellers, hotel category, flights, visa, insurance, and budget."
      />
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5E5E5] p-5 sm:p-8 shadow-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="label-field">Destination</label>
                <select className="input-field" defaultValue="">
                  <option value="" disabled>Select destination</option>
                  {enquiryDestinations.map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="label-field">Travel Date</label>
                <input className="input-field" type="date" />
              </div>
              <div>
                <label className="label-field">Adults</label>
                <select className="input-field" defaultValue="2">
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="label-field">Children</label>
                <select className="input-field" defaultValue="0">
                  {[0, 1, 2, 3, 4].map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="label-field">Hotel Category</label>
                <select className="input-field">
                  <option>3 Star</option>
                  <option>4 Star</option>
                  <option>5 Star / Luxury</option>
                </select>
              </div>
              <div>
                <label className="label-field">Flights</label>
                <select className="input-field">
                  <option>Include Flights</option>
                  <option>Hotels Only</option>
                  <option>Land Package Only</option>
                </select>
              </div>
              <div>
                <label className="label-field">Visa Required?</label>
                <select className="input-field">
                  <option>Yes — Include Visa Assistance</option>
                  <option>No — Visa Not Required</option>
                  <option>Already Have Visa</option>
                </select>
              </div>
              <div>
                <label className="label-field">Travel Insurance</label>
                <select className="input-field">
                  <option>Include Insurance</option>
                  <option>No Insurance Needed</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label-field">Budget</label>
                <select className="input-field">
                  {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label-field">Phone Number</label>
                <input className="input-field" type="tel" placeholder="+91 98765 43210" required />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">Build My Package</button>
          </form>
        </div>
      </section>
    </>
  );
}
