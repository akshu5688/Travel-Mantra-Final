import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { tourSearchPackages } from '../data/tourSearchPackages';
import { featuredTours } from '../data/content';

type CombinedPackage = {
  key: string;
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
  href: string;
  badge?: string;
  region?: string;
  tripTypes?: string[];
};

function toCombined(): CombinedPackage[] {
  const fromFeatured: CombinedPackage[] = featuredTours.map((t) => ({
    key: `featured-${t.title}-${t.duration}`,
    title: t.title,
    subtitle: t.subtitle,
    duration: t.duration,
    price: t.price,
    image: t.image,
    alt: t.alt,
    href: t.href,
    region: 'Central Asia',
    tripTypes: ['Hot Offers', 'Russia', 'Group Tour'],
  }));

  const fromSearch: CombinedPackage[] = tourSearchPackages.map((t) => ({
    key: `search-${t.title}-${t.duration}`,
    title: t.title,
    duration: t.duration,
    price: t.price,
    image: t.image,
    alt: t.alt,
    href: t.href,
    badge: t.badge,
    region: t.region,
    tripTypes: t.tripTypes,
  }));

  return [...fromSearch, ...fromFeatured];
}

type TourPackageGridProps = {
  destinationFilter?: string | null;
  tripTypeFilter?: string | null;
  regionFilter?: string | null;
  initialVisible?: number;
};

export default function TourPackageGrid({
  destinationFilter,
  tripTypeFilter,
  regionFilter,
  initialVisible = 12,
}: TourPackageGridProps) {
  const [visible, setVisible] = useState(initialVisible);
  const all = useMemo(() => toCombined(), []);

  const filtered = useMemo(() => {
    return all.filter((pkg) => {
      if (regionFilter && pkg.region?.toLowerCase() !== regionFilter.toLowerCase()) return false;
      if (destinationFilter) {
        const q = destinationFilter.toLowerCase();
        const match =
          pkg.title.toLowerCase().includes(q) ||
          pkg.region?.toLowerCase().includes(q) ||
          pkg.alt.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (tripTypeFilter && tripTypeFilter !== 'All') {
        if (!pkg.tripTypes?.includes(tripTypeFilter)) return false;
      }
      return true;
    });
  }, [all, destinationFilter, tripTypeFilter, regionFilter]);

  const shown = filtered.slice(0, visible);

  return (
    <section className="py-14 sm:py-20 bg-white" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tour Packages"
          title="Plan your perfect holiday package"
          subtitle="Flight tickets, hotels, visa, sightseeing, transfers and travel guide — curated packages for every traveller."
        />

        {filtered.length === 0 ? (
          <div className="text-center py-12 rounded-2xl border border-dashed border-[#E5E5E5] bg-[#FAFAFA]">
            <p className="text-[#4b5b47] mb-4">No packages match your search yet.</p>
            <Link to="/build-your-package" className="btn-primary inline-flex min-h-[44px]">
              Build Your Package
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {shown.map((pkg) => (
                <article
                  key={pkg.key}
                  className="card-equal flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                    <img src={pkg.image} alt={pkg.alt} className="img-cover w-full h-full" loading="lazy" />
                    {pkg.badge && (
                      <span className="absolute top-3 left-3 bg-[#d35400] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 p-4 sm:p-5">
                    <h3 className="text-card-title font-semibold text-[#1f2a1d] leading-snug">
                      {pkg.title}
                      {pkg.subtitle && (
                        <span className="block text-sm font-normal text-[#4b5b47] mt-0.5">{pkg.subtitle}</span>
                      )}
                    </h3>
                    <p className="text-sm text-[#4b5b47] mt-1.5">{pkg.duration}</p>
                    <p className="text-[#336443] font-semibold text-lg mt-2">
                      {pkg.price === 'ON REQUEST' ? 'ON REQUEST' : `From ${pkg.price}`}
                    </p>
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#E5E5E5] mt-auto">
                      <Link to={pkg.href} className="btn-primary w-full text-center min-h-[44px]">
                        Book Now
                      </Link>
                      <Link to="/contact-us" className="btn-outline w-full text-center min-h-[44px]">
                        Send Enquiry
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {visible < filtered.length && (
              <div className="text-center mt-10">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + 8)}
                  className="btn-outline min-h-[44px] px-8"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
