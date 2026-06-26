import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import TourSearchBar from '../components/TourSearchBar';
import TourRegionsGrid from '../components/TourRegionsGrid';
import TourPackageGrid from '../components/TourPackageGrid';
import FeaturedToursSection from '../components/home/FeaturedToursSection';

export default function ToursPage() {
  const [searchParams] = useSearchParams();
  const region = searchParams.get('region');
  const dest = searchParams.get('dest');
  const tripType = searchParams.get('type');

  useEffect(() => {
    if (searchParams.get('dest') || searchParams.get('type') || searchParams.get('budget')) {
      document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <>
      <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#1f2a1d] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url(/images/hero-central-asia-travels-mantra.webp)' }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2a1d]/80 via-[#1f2a1d]/70 to-[#1f2a1d]/90" aria-hidden />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">Tour Search</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3">
            Plan your perfect holiday package
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Get the hot deals — see it, believe it, book it. Complete packages with flights, hotels, visa,
            sightseeing, travel guide, transport, transfers, and insurance.
          </p>
          <TourSearchBar compact />
        </div>
      </section>

      <TourPackageGrid
        destinationFilter={dest}
        tripTypeFilter={tripType}
        regionFilter={region}
      />

      <TourRegionsGrid activeRegion={region} />

      <FeaturedToursSection limit={4} viewAllHref="/tours#packages" />
    </>
  );
}
