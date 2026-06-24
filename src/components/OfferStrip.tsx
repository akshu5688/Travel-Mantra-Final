import { Link } from 'react-router-dom';
import { heroOffers } from '../data/content';

type OfferStripProps = {
  variant?: 'hero' | 'default';
};

export default function OfferStrip({ variant = 'default' }: OfferStripProps) {
  const headingClass =
    variant === 'hero'
      ? 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]'
      : 'text-[#1f2a1d]';

  return (
    <div className="w-full">
      <div className="flex items-end justify-between gap-3 mb-4">
        <div>
          <p className={`text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-1`}>Limited Time</p>
          <h2 className={`text-lg sm:text-xl font-display font-semibold ${headingClass}`}>
            Hot Offers &amp; Limited Deals
          </h2>
        </div>
        <Link
          to="/offers"
          className="shrink-0 text-xs sm:text-sm font-semibold text-[#336443] hover:text-[#1f2a1d] border-b border-[#336443]/40 pb-0.5 transition-colors whitespace-nowrap"
        >
          View All Offers
        </Link>
      </div>
      <div className="offer-scroll flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory -mx-1 px-1">
        {heroOffers.map((offer) => (
          <article
            key={offer.title}
            className="offer-card shrink-0 snap-start w-[min(78vw,260px)] sm:w-[240px] flex flex-col rounded-xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 hover:shadow-md transition-all overflow-hidden"
          >
            <div className="h-28 sm:h-32 overflow-hidden">
              <img src={offer.image} alt={offer.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col flex-1 p-3 sm:p-4">
              <h4 className="font-semibold text-[#1f2a1d] text-sm leading-snug">{offer.title}</h4>
              <p className="text-xs text-[#336443] font-semibold mt-1">{offer.priceNote}</p>
              <p className="text-[11px] text-[#4b5b47] mt-1.5 line-clamp-2 leading-relaxed flex-1">{offer.text}</p>
              <Link
                to={offer.href}
                className="mt-3 inline-flex items-center justify-center w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                View Deal
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
