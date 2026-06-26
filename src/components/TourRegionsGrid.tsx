import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { tourRegions } from '../data/tourRegions';

type TourRegionsGridProps = {
  activeRegion?: string | null;
};

export default function TourRegionsGrid({ activeRegion }: TourRegionsGridProps) {
  const regions = activeRegion
    ? tourRegions.filter((r) => r.name.toLowerCase() === activeRegion.toLowerCase())
    : tourRegions;

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA]" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Explore"
          title={activeRegion ? `${activeRegion} tour destinations` : 'Explore our tour destinations'}
          subtitle="India, Asia, Central Asia, Europe, Middle East, Africa, North America, Balkans, and Oceania — tap a region or destination to enquire."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((region) => (
            <article
              key={region.name}
              className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#85AB8B]/50 hover:shadow-md transition-all"
            >
              <Link to={`/tours?region=${encodeURIComponent(region.name)}`} className="block group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 py-3 border-b border-[#E5E5E5] bg-[#FAFAFA]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#1f2a1d]">{region.name}</h3>
                </div>
              </Link>
              <ul className="p-4 grid grid-cols-2 gap-x-3 gap-y-1.5">
                {region.destinations.map((dest) => (
                  <li key={dest.label}>
                    <Link
                      to={dest.href}
                      className="text-sm text-[#4b5b47] hover:text-[#336443] transition-colors"
                    >
                      {dest.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
