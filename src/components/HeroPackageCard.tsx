import { Link } from 'react-router-dom';

type HeroPackageCardProps = {
  title: string;
  duration: string;
  inclusions: readonly string[];
  priceLabel: string;
  image: string;
  alt: string;
  cta: string;
  href: string;
  compact?: boolean;
};

export default function HeroPackageCard({
  title,
  duration,
  inclusions,
  priceLabel,
  image,
  alt,
  cta,
  href,
  compact = false,
}: HeroPackageCardProps) {
  return (
    <article
      className={`hero-pkg-card flex overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm border border-white/40 shadow-lg ${
        compact
          ? 'flex-col w-[min(82vw,280px)] shrink-0 snap-start'
          : 'flex-col lg:flex-row w-full'
      }`}
    >
      <div className={`pkg-img-wrap shrink-0 ${compact ? '' : 'lg:w-[120px]'}`}>
        <img src={image} alt={alt} className="pkg-img" loading="eager" />
      </div>
      <div className="flex flex-col flex-1 p-3 sm:p-4 min-w-0">
        <h3 className="font-semibold text-[#1f2a1d] text-sm sm:text-base leading-snug">{title}</h3>
        <p className="text-xs text-[#4b5b47] mt-0.5">{duration}</p>
        <p className="text-[10px] sm:text-xs text-[#4b5b47] mt-1.5 leading-relaxed line-clamp-2">
          Includes: {inclusions.join(', ')}
        </p>
        <p className="text-[#336443] font-semibold text-sm sm:text-base mt-1.5">
          {priceLabel === 'ON REQUEST' ? 'ON REQUEST' : priceLabel}
        </p>
        <Link
          to={href}
          className="mt-2.5 inline-flex items-center justify-center w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-btn font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
