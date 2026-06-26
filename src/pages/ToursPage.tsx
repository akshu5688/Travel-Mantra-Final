import PageBanner from '../components/PageBanner';
import SectionHeader from '../components/SectionHeader';
import HeroPackageCard from '../components/HeroPackageCard';
import FeaturedToursSection from '../components/home/FeaturedToursSection';
import CISDestinationCards from '../components/home/CISDestinationCards';
import ComparisonTable from '../components/home/ComparisonTable';
import { heroPackages } from '../data/content';

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
          <SectionHeader
            label="Popular"
            title="Featured Central Asia Packages"
            subtitle="Our most booked Tashkent, Almaty, and Baku itineraries with flights, visa support, and local guides."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {heroPackages.map((pkg) => (
              <HeroPackageCard key={pkg.title} {...pkg} heroEqual />
            ))}
          </div>
        </div>
      </section>

      <FeaturedToursSection />
      <ComparisonTable />
      <CISDestinationCards />
    </>
  );
}
