import { Link } from 'react-router-dom';
import { Heart } from '@phosphor-icons/react';
import type { Hotel } from '../../types/hotel';
import { formatPrice } from '../../utils/hotelSearch';

type HotelCardProps = {
  hotel: Hotel;
  onSelect?: () => void;
  highlighted?: boolean;
};

function StarRow({ count }: { count: number }) {
  return (
    <span className="text-amber-500 text-xs tracking-tight" aria-label={`${count} star`}>
      {'★'.repeat(count)}
    </span>
  );
}

export default function HotelCard({ hotel, onSelect, highlighted }: HotelCardProps) {
  return (
    <article
      id={`hotel-${hotel.id}`}
      className={`hotel-card grid grid-cols-1 md:grid-cols-[200px_1fr_auto] bg-white border rounded-xl overflow-hidden mb-4 transition-shadow ${
        highlighted ? 'border-blue-500 shadow-lg ring-2 ring-blue-200' : 'border-[#E5E5E5] hover:shadow-md'
      }`}
      onMouseEnter={onSelect}
    >
      <div className="relative h-48 md:h-auto md:min-h-[160px]">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" loading="lazy" />
        <button
          type="button"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-[#4b5b47] hover:text-red-500 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart size={18} />
        </button>
        <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-semibold px-2 py-1 rounded">
          {hotel.photoCount} Photos
        </span>
      </div>

      <div className="p-4 border-b md:border-b-0 md:border-r border-[#E5E5E5]">
        <h2 className="text-base font-bold text-[#1f2a1d] flex flex-wrap items-center gap-2">
          {hotel.name}
          <StarRow count={hotel.stars} />
        </h2>
        <p className="text-sm text-[#4b5b47] mt-1">
          {hotel.locality} · {hotel.locationNote}
        </p>
        <span className="inline-block mt-2 text-[10px] font-semibold uppercase tracking-wide bg-[#E8F5E9] text-[#336443] px-2 py-0.5 rounded">
          {hotel.tag}
        </span>
        <ul className="mt-3 space-y-1">
          {hotel.features.map((feature) => (
            <li key={feature} className="text-xs text-[#4b5b47] flex items-start gap-1.5">
              <span className="text-[#336443] shrink-0">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 flex flex-col items-end justify-between min-w-[160px]">
        <div className="text-right">
          <div className="inline-flex flex-col items-end bg-[#E8F5E9] rounded-lg px-3 py-2">
            <span className="text-[10px] font-semibold text-[#336443]">{hotel.ratingLabel}</span>
            <span className="text-lg font-bold text-[#1f2a1d]">{hotel.rating}</span>
            <span className="text-[10px] text-[#4b5b47]">{hotel.ratingCount.toLocaleString('en-IN')} ratings</span>
          </div>
        </div>
        <div className="text-right mt-3">
          <strong className="text-xl font-bold text-[#1f2a1d]">{formatPrice(hotel.price)}</strong>
          <p className="text-xs text-[#4b5b47]">+ {formatPrice(hotel.taxes)} taxes & fees</p>
          <p className="text-[10px] text-[#4b5b47] uppercase tracking-wide mt-0.5">per night</p>
        </div>
        <Link to="/contact" className="text-sm font-semibold text-blue-600 hover:underline mt-3">
          Enquire to Book
        </Link>
      </div>
    </article>
  );
}
