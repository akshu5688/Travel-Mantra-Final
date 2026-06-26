import { Link } from 'react-router-dom';
import { tourRegions } from '../data/tourRegions';

type ToursMegaMenuProps = {
  onNavigate?: () => void;
};

export default function ToursMegaMenu({ onNavigate }: ToursMegaMenuProps) {
  return (
    <div className="w-[min(96vw,1100px)] rounded-xl border border-[#E5E5E5] bg-white p-4 sm:p-5 shadow-2xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {tourRegions.map((region) => (
          <div key={region.name} className="min-w-0">
            <Link
              to={`/tours?region=${encodeURIComponent(region.name)}`}
              onClick={onNavigate}
              className="group block overflow-hidden rounded-lg border border-[#E5E5E5] hover:border-[#85AB8B]/60 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={region.image}
                  alt={region.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="px-2 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1f2a1d] bg-[#FAFAFA] border-t border-[#E5E5E5]">
                {region.name}
              </p>
            </Link>
            <ul className="mt-2 space-y-1">
              {region.destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    to={dest.href}
                    onClick={onNavigate}
                    className="block text-xs text-[#4b5b47] hover:text-[#336443] py-0.5 truncate"
                  >
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-[#4b5b47]">
          Flights, hotels, visa, sightseeing, transfers &amp; travel guide — curated for every traveller.
        </p>
        <Link to="/tours" onClick={onNavigate} className="text-sm font-semibold text-[#336443] hover:text-[#1f2a1d]">
          View all tour packages →
        </Link>
      </div>
    </div>
  );
}
