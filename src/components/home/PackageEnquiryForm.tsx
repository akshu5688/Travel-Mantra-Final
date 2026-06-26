import { enquiryDestinations, budgetOptions, travelMonthOptions } from '../../data/content';

type PackageEnquiryFormProps = {
  pageOnly?: boolean;
};

function EnquiryFields() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="label-field" htmlFor="enq-name">Full Name</label>
        <input id="enq-name" className="input-field min-h-[44px]" type="text" placeholder="Your name" required />
      </div>
      <div>
        <label className="label-field" htmlFor="enq-phone">Phone Number</label>
        <input id="enq-phone" className="input-field min-h-[44px]" type="tel" placeholder="+91 98765 43210" required />
      </div>
      <div className="sm:col-span-2">
        <label className="label-field" htmlFor="enq-email">Email</label>
        <input id="enq-email" className="input-field min-h-[44px]" type="email" placeholder="you@email.com" />
      </div>
      <div>
        <label className="label-field" htmlFor="enq-destination">Destination</label>
        <select id="enq-destination" className="input-field min-h-[44px]" defaultValue="">
          <option value="" disabled>Select destination</option>
          {enquiryDestinations.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label-field" htmlFor="enq-departure">Departure City</label>
        <input id="enq-departure" className="input-field min-h-[44px]" type="text" placeholder="Delhi, Mumbai" />
      </div>
      <div>
        <label className="label-field" htmlFor="enq-month">Travel Month</label>
        <select id="enq-month" className="input-field min-h-[44px]" defaultValue="">
          <option value="" disabled>Select month</option>
          {travelMonthOptions.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label-field" htmlFor="enq-adults">Adults</label>
        <select id="enq-adults" className="input-field min-h-[44px]" defaultValue="2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label-field" htmlFor="enq-children">Children</label>
        <select id="enq-children" className="input-field min-h-[44px]" defaultValue="0">
          {[0, 1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="label-field" htmlFor="enq-budget">Budget</label>
        <select id="enq-budget" className="input-field min-h-[44px]">
          {budgetOptions.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="label-field" htmlFor="enq-visa">Need Visa Support?</label>
        <select id="enq-visa" className="input-field min-h-[44px]">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div>
        <label className="label-field" htmlFor="enq-hotels">Need Hotels?</label>
        <select id="enq-hotels" className="input-field min-h-[44px]">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div>
        <label className="label-field" htmlFor="enq-flights">Need Flights?</label>
        <select id="enq-flights" className="input-field min-h-[44px]">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className="label-field" htmlFor="enq-message">Message</label>
        <textarea id="enq-message" className="input-field min-h-[100px] resize-y" rows={3} placeholder="Tell us about your travel preferences..." />
      </div>
    </div>
  );
}

export default function PackageEnquiryForm({ pageOnly = false }: PackageEnquiryFormProps) {
  const form = (
    <form
      id="hero-enquiry"
      className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5E5E5] p-5 sm:p-8 shadow-xl space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <EnquiryFields />
      <button type="submit" className="btn-secondary w-full min-h-[44px]">
        Create My Package
      </button>
    </form>
  );

  if (pageOnly) return form;

  return (
    <section id="build-package" className="py-14 sm:py-20 bg-[#1f2a1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">Custom Package</p>
          <h2 className="text-section-title font-semibold text-white">Build Your Central Asia Package</h2>
          <p className="text-body mt-4 text-white/75">
            Tell us your destination, travel dates, budget, and preferences. Our experts will create a customized Central Asia itinerary for you.
          </p>
        </div>
        {form}
      </div>
    </section>
  );
}
