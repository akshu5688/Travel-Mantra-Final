import {
  SealCheck,
  Timer,
  MapTrifold,
  Stamp,
  ShieldCheck,
  SlidersHorizontal,
  BookOpenText,
  ClipboardText,
  PenNib,
  Heartbeat,
  GlobeHemisphereEast,
  Phone,
  EnvelopeSimple,
  SuitcaseRolling,
} from '@phosphor-icons/react';
import PackageCard from './components/PackageCard';
import QuickTripEnquiry from './components/QuickTripEnquiry';
import {
  trustCards,
  packages,
  destinationCategories,
  excursions,
  visaServices,
  testimonials,
  blogPosts,
  enquiryDestinations,
  budgetOptions,
} from './data/content';

const trustIcons = [SealCheck, Timer, MapTrifold, Stamp, ShieldCheck, SlidersHorizontal];

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">{label}</p>
      <h2 className="text-section-title font-semibold text-[#336443]">{title}</h2>
      {subtitle && <p className="text-body text-[#4b5b47] mt-4">{subtitle}</p>}
      <div className="h-px max-w-xs mx-auto mt-6 bg-gradient-to-r from-transparent via-[#85AB8B]/70 to-transparent" />
    </div>
  );
}

export default function ContentSections() {
  return (
    <>
      {/* Intro, enquiry form & trust cards */}
      <section className="relative z-10 -mt-6 sm:-mt-8 py-10 sm:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <p className="text-body text-[#4b5b47] leading-relaxed">
              Book complete travel packages with flights, hotels, visa assistance, sightseeing, transfers, insurance, and expert travel support.
            </p>
          </div>

          <QuickTripEnquiry />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:mt-12">
            {trustCards.map((card, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={card.title} className="card-equal flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors">
                  <Icon size={32} weight="duotone" className="text-[#336443] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-card-title font-semibold text-[#1f2a1d]">{card.title}</h3>
                    <p className="text-sm text-[#4b5b47] mt-1 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tours / Packages */}
      <section id="tours" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Tour Packages"
            title="Popular packages from Travels Mantra"
            subtitle="Complete packages with flights, hotels, food, visa, sightseeing, travel guide, transport, transfers, and insurance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Destination categories */}
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Destinations"
            title="Explore by region"
            subtitle="India, Asia, Central Asia, Europe, Middle East, Africa, North America, Balkans, and Oceania."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-5">
            {destinationCategories.map((dest) => (
              <a
                key={dest.name}
                href="#contact"
                className="group card-equal overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#85AB8B]/50 hover:shadow-md transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={dest.image} alt={dest.alt} className="img-cover w-full h-full group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="text-card-title font-semibold text-[#1f2a1d]">{dest.name}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions */}
      <section id="excursions" className="py-14 sm:py-20 bg-[#1f2a1d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Excursions" title="Day tours & local experiences" subtitle="Add curated excursions to any Travels Mantra package." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {excursions.map((exc) => (
              <article key={exc.title} className="card-equal p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#2d3a2a] hover:border-[#85AB8B]/40 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#85AB8B]">{exc.region}</span>
                <h3 className="text-card-title font-semibold text-white mt-2">{exc.title}</h3>
                <p className="text-sm text-white/65 mt-2 leading-relaxed flex-1">{exc.desc}</p>
                <a href="#contact" className="inline-block mt-4 text-sm font-semibold text-[#85AB8B] hover:text-white transition-colors">
                  Enquire Now →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
              <img
                src="/images/about-travels-mantra.webp"
                alt="Scenic travel destination — Travels Mantra complete holiday packages"
                className="img-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">About Us</p>
              <h2 className="text-section-title font-semibold text-[#336443] mb-5">Your trusted travel partner</h2>
              <p className="text-body text-[#4b5b47] mb-4">
                Travels Mantra is a full-service travel agency offering Tours, Excursions, Hot Offers, Visa, Travel Insurance, and custom Build Your Package services for Indian travellers.
              </p>
              <p className="text-body text-[#4b5b47] mb-6">
                Every package includes flights, hotels, food, visa assistance, sightseeing, a dedicated travel guide, transport, transfers, and insurance — so you travel with complete peace of mind.
              </p>
              <a href="#contact" className="btn-primary w-full sm:w-auto text-center">Get Free Trip Plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* Hot Offers */}
      <section id="offers" className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Hot Offers" title="Limited-time deals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="card-equal p-6 rounded-2xl bg-[#1f2a1d] text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#336443] px-2 py-1 rounded">Flash Sale</span>
              <h4 className="text-card-title font-semibold mt-4 mb-2">Save up to ₹10,000</h4>
              <p className="text-sm text-white/70 flex-1">On select Dubai and Baku packages booked this month.</p>
              <a href="#contact" className="inline-block mt-5 text-sm font-semibold border-b border-white/50 pb-0.5">Claim Offer</a>
            </div>
            <div className="card-equal p-6 rounded-2xl bg-[#85AB8B]/15 border border-[#85AB8B]/30">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1f2a1d] text-white px-2 py-1 rounded">New</span>
              <h4 className="text-card-title font-semibold text-[#1f2a1d] mt-4 mb-2">Baku Holiday Package</h4>
              <p className="text-sm text-[#4b5b47] flex-1">4N/5D with flights, hotel, visa & city tour — special launch pricing.</p>
              <a href="#contact" className="inline-block mt-5 text-sm font-semibold text-[#336443]">Check Deals →</a>
            </div>
            <div className="card-equal p-6 rounded-2xl border-2 border-dashed border-[#E5E5E5] text-center flex flex-col justify-center">
              <h4 className="text-card-title font-semibold text-[#336443] mb-2">Early Bird Offer</h4>
              <p className="text-sm text-[#4b5b47] flex-1">Book 60 days ahead on Vietnam & Central Asia tours.</p>
              <a href="#contact" className="inline-block mt-4 text-sm font-semibold text-[#1f2a1d]">Learn More</a>
            </div>
            <div className="card-equal p-6 rounded-2xl bg-white border border-[#E5E5E5]">
              <span className="text-2xl font-bold text-[#336443]">FREE</span>
              <h4 className="text-card-title font-semibold text-[#1f2a1d] mt-1 mb-2">Visa Consultation</h4>
              <p className="text-sm text-[#4b5b47] flex-1">Complimentary visa guidance with any package booking.</p>
              <a href="#visa" className="inline-block mt-5 text-sm font-semibold text-[#336443]">Get Visa Help</a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa */}
      <section id="visa" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#85AB8B]/25 bg-[#FAFAFA] p-6 sm:p-10 md:p-12 rounded-2xl">
            <SectionHeader label="Visa Assistance" title="Visa help made effortless" subtitle="From document checklist to embassy follow-up — we handle it all." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {visaServices.map(({ title, desc }, i) => {
                const icons = [BookOpenText, ClipboardText, PenNib, Heartbeat, GlobeHemisphereEast];
                const Icon = icons[i];
                return (
                  <div key={title} className="card-equal p-5 sm:p-6 text-center rounded-xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 transition-colors">
                    <Icon size={32} weight="duotone" className="text-[#336443] mx-auto mb-3" />
                    <h3 className="text-card-title font-semibold text-[#1f2a1d] mb-2">{title}</h3>
                    <p className="text-sm text-[#4b5b47] leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <a href="#contact" className="btn-outline">Get Visa Help</a>
            </div>
          </div>
        </div>
      </section>

      {/* Build Your Package */}
      <section id="build-package" className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Build Your Package"
            title="Create your perfect itinerary"
            subtitle="Customise destination, dates, travellers, hotel category, flights, visa, insurance, and budget."
          />
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

      {/* Testimonials */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Traveller Stories" title="What our travellers say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <blockquote key={t.trip} className="card-equal p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="text-[#85AB8B] text-sm mb-4 tracking-widest">★ ★ ★ ★ ★</div>
                <p className="text-sm text-[#4b5b47] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3 mt-5 pt-5 border-t border-[#E5E5E5]">
                  <div className="w-12 h-12 rounded-full bg-[#336443] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f2a1d] text-sm">Verified Traveller</p>
                    <p className="text-xs text-[#4b5b47] mt-0.5">{t.trip}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Blog" title="Travel tips & guides" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <article key={post.title} className="card-equal p-6 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors">
                <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-wider">{post.date}</p>
                <h3 className="text-card-title font-semibold text-[#1f2a1d] mt-2">{post.title}</h3>
                <p className="text-sm text-[#4b5b47] mt-2 flex-1 leading-relaxed">{post.excerpt}</p>
                <a href="#contact" className="inline-block mt-4 text-sm font-semibold text-[#336443]">Read More →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 sm:py-20 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">Contact Us</p>
              <h2 className="text-section-title font-semibold text-[#336443] mb-5">Plan your next holiday</h2>
              <p className="text-body text-[#4b5b47] mb-8">
                Share your travel plans and our experts will craft a complete package with flights, hotels, visa, sightseeing, and insurance.
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
                <a href="mailto:info@travelsmantra.com" className="flex items-center gap-3 text-[#1f2a1d] hover:text-[#336443] transition-colors">
                  <span className="w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <EnvelopeSimple size={18} weight="duotone" className="text-[#336443]" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Email</p>
                    <p className="font-semibold">info@travelsmantra.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-[#1f2a1d]">
                  <span className="w-11 h-11 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center shrink-0">
                    <SuitcaseRolling size={18} weight="duotone" className="text-[#336443]" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Services</p>
                    <p className="font-semibold text-sm">Tours · Excursions · Visa · Insurance</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="p-5 sm:p-7 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-field">Full Name</label>
                  <input className="input-field" placeholder="Your name" type="text" required />
                </div>
                <div>
                  <label className="label-field">Phone Number</label>
                  <input className="input-field" placeholder="+91 98765 43210" type="tel" required />
                </div>
              </div>
              <div>
                <label className="label-field">Email</label>
                <input className="input-field" placeholder="you@email.com" type="email" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-field">Destination</label>
                  <select className="input-field" defaultValue="">
                    <option value="" disabled>Select destination</option>
                    {enquiryDestinations.map((d) => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <div>
                  <label className="label-field">Departure From</label>
                  <input className="input-field" placeholder="e.g. Delhi" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-field">Travel Date</label>
                  <input className="input-field" type="date" />
                </div>
                <div className="grid grid-cols-2 gap-3">
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
                </div>
              </div>
              <div>
                <label className="label-field">Budget</label>
                <select className="input-field">
                  {budgetOptions.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="label-field">Message</label>
                <textarea className="input-field" placeholder="Tell us about your travel plans…" rows={3} />
              </div>
              <button type="submit" className="btn-primary w-full">Send Enquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1f2a1d] text-white/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="brand-logo brand-logo--stack brand-logo--on-dark mb-4">
                <span className="brand-travels">Travels</span>
                <span className="brand-mantra"><em>M</em>antra</span>
              </a>
              <p className="text-sm leading-relaxed">
                Complete travel packages with flights, hotels, visa, sightseeing, transfers, and insurance.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Services</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#tours" className="hover:text-white transition-colors">Tours</a></li>
                <li><a href="#excursions" className="hover:text-white transition-colors">Excursions</a></li>
                <li><a href="#offers" className="hover:text-white transition-colors">Hot Offers</a></li>
                <li><a href="#visa" className="hover:text-white transition-colors">Visa</a></li>
                <li><a href="#build-package" className="hover:text-white transition-colors">Build Your Package</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Company</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#build-package" className="hover:text-white transition-colors">Build Your Package</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Contact</p>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:18002121225" className="hover:text-white transition-colors">1800 2121 225</a></li>
                <li><a href="mailto:info@travelsmantra.com" className="hover:text-white transition-colors">info@travelsmantra.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
            <p>© 2026 Travels Mantra Holidays (P) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
