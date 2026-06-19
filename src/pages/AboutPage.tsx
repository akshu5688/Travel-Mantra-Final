import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function AboutPage() {
  return (
    <>
      <PageBanner label="About Us" title="Your trusted travel partner" subtitle="Full-service travel agency for Indian travellers worldwide." />
      <section className="py-14 sm:py-20 bg-white">
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
              <p className="text-body text-[#4b5b47] mb-4">
                Travels Mantra is a full-service travel agency offering Tours, Excursions, Hot Offers, Visa, Travel Insurance, and custom Build Your Package services for Indian travellers.
              </p>
              <p className="text-body text-[#4b5b47] mb-6">
                Every package includes flights, hotels, food, visa assistance, sightseeing, a dedicated travel guide, transport, transfers, and insurance — so you travel with complete peace of mind.
              </p>
              <Link to="/contact" className="btn-primary w-full sm:w-auto text-center inline-flex justify-center">Get Free Trip Plan</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
