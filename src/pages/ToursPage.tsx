import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import SectionHeader from '../components/SectionHeader';
import PackageCard from '../components/PackageCard';
import { featuredTours, destinationCategories } from '../data/content';

export default function ToursPage() {
  return (
    <>
      <PageBanner
        label="Tour Packages"
        title="Central Asia Tour Packages"
        subtitle="Complete packages with flights, hotels, food, visa, LOI support, sightseeing, travel guide, transport, and 24/7 assistance."
      />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {featuredTours.map((pkg) => (
              <PackageCard key={`${pkg.title}-${pkg.duration}`} {...pkg} href={pkg.href} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Destinations"
            title="Explore Central Asia & CIS"
            subtitle="Uzbekistan, Kazakhstan, Azerbaijan, Kyrgyzstan, Georgia, and Armenia."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-5">
            {destinationCategories.map((dest) => (
              <Link
                key={dest.name}
                to="/contact-us"
                className="group card-equal overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#85AB8B]/50 hover:shadow-md transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={dest.image} alt={dest.alt} className="img-cover w-full h-full group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-3 sm:p-4 text-center">
                  <h3 className="text-card-title font-semibold text-[#1f2a1d]">{dest.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
