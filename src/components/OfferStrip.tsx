import { Link } from 'react-router-dom';
import { heroOffers } from '../data/content';

type OfferStripProps = {
  /** White heading on dark hero; dark heading on light sections */
  variant?: 'hero' | 'default';
};

export default function OfferStrip({ variant = 'default' }: OfferStripProps) {
  const headingClass =
    variant === 'hero'
      ? 'text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]'
      : 'text-[#1f2a1d]';

  return (
    <div className="w-full">
      <p className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${headingClass}`}>Hot Offers</p>
      <div className="offer-scroll flex gap-3 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory -mx-1 px-1">
        {heroOffers.map((offer) => (
          <article
            key={offer.title}
            className="offer-card shrink-0 snap-start w-[min(78vw,240px)] sm:w-[220px] flex gap-3 p-3 rounded-xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 shrink-0 rounded-lg overflow-hidden">
              <img src={offer.image} alt={offer.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <h4 className="font-semibold text-[#1f2a1d] text-sm leading-snug truncate">{offer.title}</h4>
              <p className="text-[11px] text-[#336443] font-semibold mt-0.5">{offer.priceNote}</p>
              <p className="text-[10px] text-[#4b5b47] mt-0.5 line-clamp-2 leading-relaxed">{offer.text}</p>
              <Link
                to={offer.href}
                className="mt-auto pt-2 text-xs font-semibold text-[#336443] hover:text-[#1f2a1d] transition-colors"
              >
                View Deal →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
