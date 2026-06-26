import { Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';
import PageBanner from '../components/PageBanner';
import FAQSection from '../components/home/FAQSection';
import { enquiryDestinations, budgetOptions } from '../data/content';

export default function ContactPage() {
  return (
    <>
      <PageBanner
        label="Contact Us"
        title="Get in Touch with Travels Mantra"
        subtitle="Share your Central Asia travel plans and our experts will craft a complete package for you."
      />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <div>
              <p className="text-body text-[#4b5b47] mb-8">
                Travels Mantra Holidays (P) Ltd. — Central Asia travel specialists with offices in Delhi, Tashkent, and Almaty.
              </p>
              <div className="space-y-4">
                <a href="tel:18002121225" className="flex items-center gap-3 text-[#1f2a1d] hover:text-[#336443] transition-colors">
                  <span className="w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <Phone size={18} weight="duotone" className="text-[#336443]" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Toll Free</p>
                    <p className="font-semibold">1800 2121 225</p>
                  </div>
                </a>
                <a href="mailto:Info@stag.travelsmantra.com" className="flex items-center gap-3 text-[#1f2a1d] hover:text-[#336443] transition-colors">
                  <span className="w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <EnvelopeSimple size={18} weight="duotone" className="text-[#336443]" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Email</p>
                    <p className="font-semibold">Info@stag.travelsmantra.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-[#1f2a1d]">
                  <span className="w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <MapPin size={18} weight="duotone" className="text-[#336443]" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Office</p>
                    <p className="font-semibold text-sm leading-relaxed">
                      911, IndraPrakash Building, 21, Barakhamba Rd, Connaught Place, New Delhi, Delhi 110001
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <form className="p-5 sm:p-7 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-field">Full Name</label>
                  <input className="input-field min-h-[44px]" placeholder="Your name" type="text" required />
                </div>
                <div>
                  <label className="label-field">Phone Number</label>
                  <input className="input-field min-h-[44px]" placeholder="+91 98765 43210" type="tel" required />
                </div>
              </div>
              <div>
                <label className="label-field">Email</label>
                <input className="input-field min-h-[44px]" placeholder="you@email.com" type="email" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-field">Destination</label>
                  <select className="input-field min-h-[44px]" defaultValue="">
                    <option value="" disabled>Select destination</option>
                    {enquiryDestinations.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-field">Departure From</label>
                  <input className="input-field min-h-[44px]" placeholder="e.g. Delhi" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-field">Travel Date</label>
                  <input className="input-field min-h-[44px]" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="label-field">Adults</label>
                    <select className="input-field min-h-[44px]" defaultValue="2">
                      {[1, 2, 3, 4, 5, 6].map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label-field">Children</label>
                    <select className="input-field min-h-[44px]" defaultValue="0">
                      {[0, 1, 2, 3, 4].map((n) => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="label-field">Budget</label>
                <select className="input-field min-h-[44px]">
                  {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="label-field">Message</label>
                <textarea className="input-field min-h-[100px] resize-y" placeholder="Tell us about your travel plans…" rows={3} />
              </div>
              <button type="submit" className="btn-primary w-full min-h-[44px]">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>
      <FAQSection />
    </>
  );
}
