import {
  Plane,
  Hotel,
  Luggage,
  FileText,
  Shield,
  MapPin,
  Headphones,
  Phone,
  Mail,
  Route,
  BedDouble,
  ShieldCheck,
  BookOpen,
  ClipboardList,
  FilePen,
  HeartPulse,
} from 'lucide-react';

function SectionHeader({ label, title, subtitle }: { label: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">{label}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#336443] leading-tight">{title}</h2>
      {subtitle && <p className="text-[#4b5b47] mt-4 max-w-xl mx-auto leading-relaxed">{subtitle}</p>}
      <div className="h-px max-w-xs mx-auto mt-6 bg-gradient-to-r from-transparent via-[#85AB8B]/70 to-transparent" />
    </div>
  );
}

const destinations = [
  { name: 'Bali', nights: '6N / 7D', price: '₹52,999', desc: 'Tropical serenity, private villas, and soulful island luxury.', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80' },
  { name: 'Dubai', nights: '4N / 5D', price: '₹68,999', desc: 'Futuristic skylines, desert elegance, and world-class hospitality.', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
  { name: 'Maldives', nights: '4N / 5D', price: '₹89,999', desc: 'Overwater villas, turquoise lagoons, and barefoot luxury.', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80' },
  { name: 'Baku', nights: '4N / 5D', price: '₹48,999', desc: 'Flame Towers, Caspian charm, and old-world grandeur.', img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80' },
  { name: 'Thailand', nights: '5N / 6D', price: '₹39,999', desc: 'Golden temples, island retreats, and vibrant coastal beauty.', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80' },
  { name: 'Vietnam', nights: '6N / 7D', price: '₹42,999', desc: 'Ha Long Bay mist, lantern-lit streets, and timeless culture.', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&q=80' },
  { name: 'Switzerland', nights: '6N / 7D', price: '₹1,25,999', desc: 'Alpine peaks, scenic railways, and refined European elegance.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
  { name: 'Kazakhstan', nights: '5N / 6D', price: '₹55,999', desc: 'Vast steppes, mountain lakes, and Central Asian wonder.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
];

const experiences = [
  { title: 'Luxury Honeymoon', desc: 'Intimate escapes to Bali, Maldives, and beyond — crafted for two.', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
  { title: 'Family Holidays', desc: 'Memorable getaways to Dubai, Singapore, and Thailand for all ages.', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&q=80' },
  { title: 'Adventure Escapes', desc: 'Mountain treks, desert safaris, and off-the-beaten-path discoveries.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
  { title: 'Group Tours', desc: 'Curated group journeys to Vietnam, Baku, and Central Asia.', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80' },
  { title: 'Beach Vacations', desc: 'Sun-kissed shores in Thailand, Bali, and the Maldives.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
  { title: 'Central Asia Tours', desc: 'Silk Road heritage through Kazakhstan, Uzbekistan, and Baku.', img: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=600&q=80' },
];

const services = [
  { icon: Plane, label: 'Flights' },
  { icon: Hotel, label: 'Hotels' },
  { icon: Luggage, label: 'Packages' },
  { icon: FileText, label: 'Visa' },
  { icon: Shield, label: 'Insurance' },
  { icon: MapPin, label: 'Sightseeing' },
  { icon: Headphones, label: '24/7 Support' },
];

const whyUs = [
  { icon: Route, title: 'Curated Itineraries', desc: 'Every journey tailored to your pace, preferences, and passions.' },
  { icon: BedDouble, title: 'Luxury Stays', desc: 'Handpicked hotels, resorts, and villas at every destination.' },
  { icon: ShieldCheck, title: 'Visa & Insurance', desc: 'End-to-end documentation and travel insurance guidance.' },
  { icon: Headphones, title: 'Dedicated Experts', desc: 'Personal consultants from planning through your return home.' },
];

const testimonials = [
  {
    quote: 'Our Bali honeymoon was nothing short of magical. Every detail — from the private villa to the candlelit dinner — was arranged with such care.',
    name: 'Priya & Aman',
    trip: 'Bali Honeymoon',
  },
  {
    quote: 'Travelling to Dubai with my family felt effortless. Flights, hotel, visa, and city tours — all handled seamlessly.',
    name: 'Rohit Sharma',
    trip: 'Dubai Family Trip',
  },
  {
    quote: 'Our Vietnam group tour was impeccably organised. Ha Long Bay, Hanoi, and the local experiences were curated beautifully.',
    name: 'Neha Gupta',
    trip: 'Vietnam Group Tour',
  },
];

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-white text-sm text-[#1f2a1d] focus:border-[#336443] focus:outline-none focus:ring-2 focus:ring-[#336443]/15';

export default function ContentSections() {
  return (
    <>
      {/* About — LP2 "Travel Beyond" editorial idea */}
      <section id="about" className="relative z-10 -mt-8 sm:-mt-10 py-16 sm:py-20 md:py-24 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[480px] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=90"
                alt="Scenic mountain valley at sunrise — curated luxury travel"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f2a1d]/50 to-transparent" />
            </div>
            <div className="lg:pl-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-4">The Travel Mantra Way</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#336443] leading-tight mb-6">
                Travel beyond the ordinary
              </h2>
              <p className="text-[#4b5b47] leading-relaxed mb-4">
                From romantic beach escapes to cultural city adventures, Travel Mantra creates journeys designed around
                your dreams, comfort, and style — with the same editorial care you expect from a luxury travel house.
              </p>
              <p className="text-[#4b5b47] leading-relaxed mb-8">
                Since 2012, we have helped 50,000+ Indian travellers with curated packages, visa expertise, and
                round-the-clock concierge support.
              </p>
              <a
                href="#enquiry"
                className="inline-flex bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Plan My Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations — LP2 8-card grid */}
      <section id="packages" className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <SectionHeader
            label="Handpicked for You"
            title="Curated places for every kind of traveller"
            subtitle="Discover destinations with flights, stays, and experiences included."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {destinations.map((dest) => (
              <article
                key={dest.name}
                className="group overflow-hidden rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#85AB8B]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-52 sm:h-56 overflow-hidden">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 border-t border-[#E5E5E5]">
                  <h3 className="text-lg font-semibold text-[#1f2a1d] mb-1">{dest.name}</h3>
                  <p className="text-xs text-[#4b5b47] leading-relaxed mb-3">{dest.desc}</p>
                  <div className="flex justify-between items-end gap-2">
                    <div>
                      <p className="text-xs text-[#4b5b47]">{dest.nights}</p>
                      <p className="text-[#336443] font-semibold mt-1">From {dest.price}</p>
                    </div>
                    <a
                      href="#enquiry"
                      className="text-[10px] font-bold uppercase tracking-wider text-[#336443] border-b border-[#85AB8B]/50 pb-0.5 hover:text-[#1f2a1d] transition-colors"
                    >
                      Discover
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences — LP2 experiences grid */}
      <section id="experiences" className="py-16 sm:py-20 md:py-24 bg-[#1f2a1d] text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <SectionHeader label="Bespoke Journeys" title="Signature travel experiences" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {experiences.map((exp) => (
              <article
                key={exp.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#2d3a2a] hover:border-[#85AB8B]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={exp.img}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-5">{exp.desc}</p>
                  <a
                    href="#enquiry"
                    className="text-[10px] font-bold uppercase tracking-wider text-[#85AB8B] border-b border-[#85AB8B]/50 pb-0.5 hover:text-white transition-colors"
                  >
                    Explore Experience
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section id="services" className="py-10 sm:py-12 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="flex overflow-x-auto gap-3 sm:flex-wrap sm:justify-center pb-1 scrollbar-hide">
            {services.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 shrink-0 text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] border border-[#E5E5E5] bg-white px-4 py-2.5 rounded-full"
              >
                <Icon className="w-4 h-4 text-[#85AB8B]" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Offers — LP2 mixed offer cards */}
      <section id="offers" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <SectionHeader label="Limited Time" title="Hot offers & deals" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-[#1f2a1d] text-white overflow-hidden shadow-lg">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#336443] px-2 py-1 rounded">Flash Sale</span>
                <h4 className="text-xl font-semibold mt-4 mb-2">Save ₹10,000</h4>
                <p className="text-sm text-white/70 mb-6">On all Europe summer packages booked before Friday.</p>
                <a href="#enquiry" className="text-sm font-semibold border-b border-white/60 pb-1 hover:opacity-80 transition-opacity">
                  Claim Offer
                </a>
              </div>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#85AB8B]/15 border border-[#85AB8B]/30 text-[#1f2a1d]">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1f2a1d] text-white px-2 py-1 rounded">New Launch</span>
              <h4 className="text-xl font-semibold mt-4 mb-2">Baku Splendor</h4>
              <p className="text-sm text-[#4b5b47] mb-6">Flat 15% off for first 50 bookings this month.</p>
              <a href="#enquiry" className="text-sm font-semibold border-b border-[#1f2a1d]/40 pb-1 hover:border-[#1f2a1d] transition-colors">
                Check Deals
              </a>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-dashed border-[#E5E5E5] flex flex-col justify-center text-center">
              <h4 className="font-semibold text-[#336443] mb-2">Early Bird Discount</h4>
              <p className="text-sm text-[#4b5b47] mb-4">Book 90 days in advance and save big.</p>
              <a href="#enquiry" className="text-sm font-semibold text-[#1f2a1d]">Learn More</a>
            </div>
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]">
              <span className="text-2xl font-bold text-[#336443]">FREE</span>
              <h4 className="font-semibold text-[#1f2a1d] mt-1 mb-2">Visa for Thailand</h4>
              <p className="text-sm text-[#4b5b47] mb-6">Complimentary visa processing with hotel bookings.</p>
              <a href="#visa" className="text-sm font-semibold text-[#336443]">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Visa — LP2 4-card bordered panel */}
      <section id="visa" className="py-16 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="border border-[#85AB8B]/25 bg-white p-6 sm:p-10 md:p-14 rounded-2xl shadow-sm">
            <SectionHeader label="Seamless Documentation" title="Visa help, made effortless" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {[
                { icon: BookOpen, title: 'Tourist Visa Guidance', desc: 'Clear, country-wise visa requirements for Indian travellers.' },
                { icon: ClipboardList, title: 'Document Checklist', desc: 'Passport, photos, bank statements — all organised for you.' },
                { icon: FilePen, title: 'Application Support', desc: 'Form filling, appointments, and follow-up assistance.' },
                { icon: HeartPulse, title: 'Travel Insurance Help', desc: 'Coverage guidance for visa approval and peace of mind.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 text-center rounded-xl border border-[#E5E5E5] hover:border-[#85AB8B]/50 transition-colors"
                >
                  <Icon className="w-8 h-8 text-[#336443] mx-auto mb-4" />
                  <h3 className="font-semibold text-[#1f2a1d] text-sm mb-2">{title}</h3>
                  <p className="text-xs text-[#4b5b47] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="#enquiry"
                className="inline-flex border border-[#1f2a1d] text-[#1f2a1d] hover:bg-[#1f2a1d] hover:text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Get Visa Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose — LP2 icon grid */}
      <section id="why" className="py-16 sm:py-20 md:py-24 bg-white border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <SectionHeader label="Why Travel Mantra" title="Why choose Travel Mantra" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-4 sm:p-6">
                <Icon className="w-9 h-9 text-[#336443] mx-auto mb-4" />
                <h3 className="font-semibold text-[#1f2a1d] text-sm sm:text-base mb-2">{title}</h3>
                <p className="text-xs text-[#4b5b47] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — LP2 italic blockquote style */}
      <section id="stories" className="py-16 sm:py-20 bg-[#1f2a1d] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <SectionHeader label="Traveller Stories" title="Stories from our travellers" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="border border-white/10 bg-[#2d3a2a] p-5 sm:p-7 lg:p-8 rounded-2xl"
              >
                <div className="text-[#85AB8B] text-sm mb-5 tracking-widest">★ ★ ★ ★ ★</div>
                <p className="text-white/80 text-sm leading-relaxed italic mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer className="pt-5 border-t border-white/10">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-white/50 text-xs mt-1">{t.trip}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry — LP2 detailed form */}
      <section id="enquiry" className="py-16 sm:py-20 md:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-4">Begin Your Journey</p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#336443] mb-5">Plan your next escape</h2>
              <p className="text-[#4b5b47] leading-relaxed mb-8">
                Share your travel vision and our experts will craft a bespoke itinerary — complete with flights, luxury
                stays, visa support, and curated experiences.
              </p>
              <div className="space-y-4">
                <a href="tel:18002121225" className="flex items-center gap-3 text-[#1f2a1d] hover:text-[#336443] transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Call us</p>
                    <p className="font-semibold">1800 2121 225</p>
                  </div>
                </a>
                <a href="mailto:info@travelsmantra.com" className="flex items-center gap-3 text-[#1f2a1d] hover:text-[#336443] transition-colors">
                  <span className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-xs text-[#4b5b47]">Email</p>
                    <p className="font-semibold">info@travelsmantra.com</p>
                  </div>
                </a>
              </div>
            </div>
            <form className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white border border-[#E5E5E5] space-y-4 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Full Name</label>
                  <input className={inputClass} placeholder="Your name" type="text" required />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Phone Number</label>
                  <input className={inputClass} placeholder="+91 98765 43210" type="tel" required />
                </div>
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Email</label>
                <input className={inputClass} placeholder="you@email.com" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Destination</label>
                  <select className={inputClass} defaultValue="">
                    <option value="" disabled>Select destination</option>
                    {destinations.map((d) => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Travel Date</label>
                  <input className={inputClass} type="date" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Travellers</label>
                  <select className={inputClass} defaultValue="2 Adults">
                    <option>2 Adults</option>
                    <option>1 Adult</option>
                    <option>2 Adults, 1 Child</option>
                    <option>Family (4+)</option>
                    <option>Group (6+)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Budget</label>
                  <select className={inputClass}>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹1,00,000</option>
                    <option>₹1,00,000 – ₹2,00,000</option>
                    <option>Above ₹2,00,000</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#4b5b47] mb-2 block">Message</label>
                <textarea className={inputClass} placeholder="Tell us about your dream journey…" rows={4} />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white py-3.5 rounded-xl font-semibold transition-colors"
              >
                Get My Custom Plan
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1f2a1d] text-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#" className="brand-logo brand-logo--stack brand-logo--on-dark mb-4">
                <span className="brand-travels">Travel</span>
                <span className="brand-mantra"><em>M</em>antra</span>
              </a>
              <p className="text-sm leading-relaxed">
                Crafting memorable journeys with expert planning, curated experiences, and trusted travel support.
              </p>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-5">Explore</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#packages" className="hover:text-white transition-colors">Destinations</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors">Experiences</a></li>
                <li><a href="#offers" className="hover:text-white transition-colors">Hot Offers</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">Stories</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-5">Services</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#visa" className="hover:text-white transition-colors">Visa</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Insurance</a></li>
                <li><a href="#enquiry" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
            <p>© 2026 Travel Mantra Holidays (P) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
