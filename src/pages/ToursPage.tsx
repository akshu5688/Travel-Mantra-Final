import PageBanner from '../components/PageBanner';
import FeaturedToursSection from '../components/home/FeaturedToursSection';
import CISDestinationCards from '../components/home/CISDestinationCards';
import ComparisonTable from '../components/home/ComparisonTable';

export default function ToursPage() {
  return (
    <>
      <PageBanner
        label="Tour Packages"
        title="Central Asia Tour Packages"
        subtitle="Complete packages with flights, hotels, food, visa, LOI support, sightseeing, travel guide, transport, and 24/7 assistance."
      />
      <FeaturedToursSection />
      <ComparisonTable />
      <CISDestinationCards />
    </>
  );
}
