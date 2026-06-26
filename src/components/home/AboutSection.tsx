import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm">
            <img
              src="/images/about-travels-mantra.webp"
              alt="About Travels Mantra Central Asia travel specialists"
              className="img-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              label="About Us"
              title="About Travels Mantra"
              subtitle=""
            />
            <p className="text-body text-[#4b5b47] leading-relaxed -mt-6">
              Travels Mantra is an ISO 9001:2015 certified travel company and Euro Asia certified travel agent,
              registered by Uzbekistan Tourism Board. Since 2008, we have focused on creating reliable, transparent,
              and customized travel experiences across Central Asia.
            </p>
            <p className="text-body text-[#4b5b47] leading-relaxed mt-4">
              With offices and local networks across Tashkent, Almaty, Delhi, Russia, Georgia, and other CIS regions,
              Travels Mantra helps travelers with tours, hotels, transfers, visa support, guides, and tailor-made itineraries.
            </p>
            <Link to="/about-us" className="btn-primary inline-flex mt-6 min-h-[44px]">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
