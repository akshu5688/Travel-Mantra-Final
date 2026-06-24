import { Link } from 'react-router-dom';
import { popularDestinations } from '../data/content';

type PopularDestinationsProps = {
  onDark?: boolean;
};

export default function PopularDestinations({ onDark = true }: PopularDestinationsProps) {
  const headingClass = onDark
    ? 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]'
    : 'text-[#1f2a1d]';

  const renderDestination = (dest: (typeof popularDestinations)[number], layout: 'grid' | 'scroll') => (
    <Link
      key={dest.name}
      to="/tours"
      className={`dest-pill group flex flex-col items-center text-center transition-transform hover:-translate-y-0.5 ${
        layout === 'grid' ? 'w-full min-w-0 px-1' : 'shrink-0 snap-start w-[4.75rem] sm:w-20'
      }`}
    >
      <div
        className={`rounded-full overflow-hidden border-2 shadow-md transition-colors ${
          onDark ? 'border-white/40 group-hover:border-white' : 'border-[#E5E5E5] group-hover:border-[#85AB8B]'
        } ${layout === 'grid' ? 'w-14 h-14 sm:w-16 sm:h-16 lg:w-[3.75rem] lg:h-[3.75rem] xl:w-16 xl:h-16 mx-auto' : 'w-14 h-14 sm:w-16 sm:h-16'}`}
      >
        <img
          src={dest.image}
          alt={dest.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <span
        className={`mt-1.5 text-[10px] sm:text-[11px] font-semibold leading-tight line-clamp-1 w-full ${
          onDark ? 'text-white' : 'text-[#1f2a1d]'
        }`}
      >
        {dest.name}
      </span>
      <span
        className={`text-[8px] sm:text-[9px] leading-tight line-clamp-1 w-full ${
          onDark ? 'text-white/75' : 'text-[#4b5b47]'
        }`}
      >
        Tours &amp; Packages
      </span>
    </Link>
  );

  return (
    <div
      className={`destinations-bar w-full rounded-2xl p-3 sm:p-4 lg:p-5 ${
        onDark
          ? 'bg-white/8 backdrop-blur-sm border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-white border border-[#E5E5E5]'
      }`}
    >
      <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 sm:mb-4 ${headingClass}`}>
        Popular Destinations
      </p>

      <div className="hidden md:grid md:grid-cols-5 xl:grid-cols-10 md:gap-3 lg:gap-2 xl:gap-3 w-full">
        {popularDestinations.map((dest) => renderDestination(dest, 'grid'))}
      </div>

      <div className="md:hidden dest-scroll flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full pb-0.5 -mx-0.5 px-0.5">
        {popularDestinations.map((dest) => renderDestination(dest, 'scroll'))}
      </div>
    </div>
  );
}
