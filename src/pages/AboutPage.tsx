import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        label="About Us"
        title="Central Asia Travel Experts Since 2008"
        subtitle="ISO 9001:2015 certified, Euro Asia certified, and registered by Uzbekistan Tourism Board."
      />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
              <img
                src="/images/about-travels-mantra.webp"
                alt="About Travels Mantra Central Asia travel specialists"
                className="img-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-body text-[#4b5b47] mb-4">
                Travels Mantra is an ISO 9001:2015 certified travel company and Euro Asia certified travel agent,
                registered by Uzbekistan Tourism Board. Since 2008, we have focused on creating reliable, transparent,
                and customized travel experiences across Central Asia.
              </p>
              <p className="text-body text-[#4b5b47] mb-6">
                With offices and local networks across Tashkent, Almaty, Delhi, Russia, Georgia, and other CIS regions,
                Travels Mantra helps travelers with tours, hotels, transfers, visa support, Hindi-speaking guides, and tailor-made itineraries.
              </p>
              <Link
                to="/"
                state={{ scrollToEnquiry: true }}
                className="btn-primary w-full sm:w-auto text-center inline-flex justify-center min-h-[44px]"
              >
                Get Free Trip Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
