import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import { cisDestinations } from '../../data/content';

type CISDestinationCardsProps = {
  limit?: number;
  viewAllHref?: string;
};

export default function CISDestinationCards({ limit, viewAllHref }: CISDestinationCardsProps) {
  const destinations = limit ? cisDestinations.slice(0, limit) : cisDestinations;
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Central Asia"
          title="Popular CIS Destinations"
          subtitle="Explore Uzbekistan, Kazakhstan, Azerbaijan, Kyrgyzstan, and the Caucasus with specialist tour packages."
        />
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {destinations.map((dest) => (
            <article
              key={dest.name}
              className="card-equal flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden shrink-0">
                <img src={dest.image} alt={dest.alt} className="img-cover w-full h-full" loading="lazy" />
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-[#1f2a1d]">{dest.name}</h3>
                <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-wide mt-0.5">{dest.country}</p>
                <p className="text-sm text-[#4b5b47] mt-2 flex-1 leading-relaxed">{dest.desc}</p>
                <Link to={dest.href} className="btn-primary w-full text-center mt-4 min-h-[44px]">
                  View Packages
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="sm:hidden dest-scroll flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1 -mx-1 px-1">
          {destinations.map((dest) => (
            <article
              key={dest.name}
              className="card-equal shrink-0 snap-start w-[min(78vw,280px)] flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E5E5E5]"
            >
              <div className="aspect-[4/3] overflow-hidden shrink-0">
                <img src={dest.image} alt={dest.alt} className="img-cover w-full h-full" loading="lazy" />
              </div>
              <div className="flex flex-col flex-1 p-4">
                <h3 className="font-semibold text-[#1f2a1d]">{dest.name}</h3>
                <p className="text-xs text-[#85AB8B] font-semibold uppercase tracking-wide mt-0.5">{dest.country}</p>
                <p className="text-sm text-[#4b5b47] mt-2 flex-1">{dest.desc}</p>
                <Link to={dest.href} className="btn-primary w-full text-center mt-4 min-h-[44px]">
                  View Packages
                </Link>
              </div>
            </article>
          ))}
        </div>
        {viewAllHref && (
          <div className="text-center mt-10">
            <Link to={viewAllHref} className="btn-outline min-h-[44px]">
              View All CIS Destinations
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
