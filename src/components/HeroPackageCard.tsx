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
  visa?: string;
  compact?: boolean;
  desktopHero?: boolean;
  slider?: boolean;
  heroEqual?: boolean;
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
  visa,
  compact = false,
  desktopHero = false,
  slider = false,
  heroEqual = false,
}: HeroPackageCardProps) {
  if (heroEqual) {
    return (
      <article className="hero-pkg-card hero-pkg-card--equal flex flex-col h-full overflow-hidden rounded-xl bg-white border border-[#E5E5E5] shadow-md">
        <div className="aspect-[4/3] overflow-hidden shrink-0">
          <img src={image} alt={alt} className="w-full h-full object-cover object-center" loading="eager" />
        </div>
        <div className="flex flex-col flex-1 p-3 sm:p-4">
          <h3 className="font-semibold text-[#1f2a1d] text-sm leading-snug">{title}</h3>
          <p className="text-xs text-[#4b5b47] mt-1">{duration}</p>
          <p className="text-[#336443] font-semibold text-xs sm:text-sm mt-1.5">{priceLabel}</p>
          {visa && (
            <p className="text-[10px] sm:text-xs text-[#4b5b47] mt-1">
              Visa: <span className="font-semibold text-[#1f2a1d]">{visa}</span>
            </p>
          )}
          <Link
            to={href}
            className="mt-auto pt-3 inline-flex items-center justify-center w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-xs font-semibold px-3 py-2.5 rounded-lg transition-colors min-h-[44px]"
          >
            {cta}
          </Link>
        </div>
      </article>
    );
  }

  if (slider) {
    return (
      <article className="hero-pkg-card hero-pkg-card--slider shrink-0 snap-start w-[min(78vw,260px)] flex flex-col overflow-hidden rounded-xl bg-white border border-[#E5E5E5] shadow-sm">
        <div className="aspect-[4/3] overflow-hidden shrink-0">
          <img src={image} alt={alt} className="w-full h-full object-cover object-center" loading="eager" />
        </div>
        <div className="flex flex-col flex-1 p-3">
          <h3 className="font-semibold text-[#1f2a1d] text-sm leading-snug line-clamp-2">{title}</h3>
          <p className="text-xs text-[#4b5b47] mt-1">{duration}</p>
          <p className="text-[#336443] font-semibold text-xs mt-1.5">{priceLabel}</p>
          {visa && <p className="text-[10px] text-[#4b5b47] mt-1">Visa: {visa}</p>}
          <Link
            to={href}
            className="mt-3 inline-flex items-center justify-center w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors min-h-[44px]"
          >
            {cta}
          </Link>
        </div>
      </article>
    );
  }

  if (desktopHero) {
    return (
      <article className="hero-pkg-card hero-pkg-card--desktop flex flex-row w-full overflow-hidden rounded-lg bg-white/95 backdrop-blur-sm border border-white/40 shadow-md">
        <div className="pkg-img-wrap shrink-0 w-[88px]">
          <img src={image} alt={alt} className="pkg-img" loading="eager" />
        </div>
        <div className="flex flex-col flex-1 min-w-0 p-2.5 justify-center">
          <h3 className="font-semibold text-[#1f2a1d] text-xs leading-snug line-clamp-1">{title}</h3>
          <p className="text-[10px] text-[#4b5b47] mt-0.5">{duration}</p>
          <p className="text-[#336443] font-semibold text-[11px] mt-1">{priceLabel}</p>
          <Link
            to={href}
            className="mt-1.5 inline-flex items-center justify-center w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white font-semibold px-2 py-1 rounded-md text-[10px] transition-colors"
          >
            {cta}
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`hero-pkg-card flex overflow-hidden rounded-xl bg-white/95 backdrop-blur-sm border border-white/40 shadow-lg ${
        compact
          ? 'hero-pkg-card--compact flex-row w-[min(72vw,220px)] shrink-0 snap-start'
          : 'flex-col lg:flex-row w-full'
      }`}
    >
      <div className={`pkg-img-wrap shrink-0 ${compact ? 'w-[76px]' : 'lg:w-[120px]'}`}>
        <img src={image} alt={alt} className="pkg-img" loading="eager" />
      </div>
      <div className={`flex flex-col flex-1 min-w-0 ${compact ? 'p-2' : 'p-3 sm:p-4'}`}>
        <h3 className={`font-semibold text-[#1f2a1d] leading-snug ${compact ? 'text-xs' : 'text-sm sm:text-base'}`}>
          {title}
        </h3>
        <p className={`text-[#4b5b47] ${compact ? 'text-[10px] mt-0.5' : 'text-xs mt-0.5'}`}>{duration}</p>
        {!compact && (
          <p className="text-[10px] sm:text-xs text-[#4b5b47] mt-1.5 leading-relaxed line-clamp-2">
            Includes: {inclusions.join(', ')}
          </p>
        )}
        <p className={`text-[#336443] font-semibold ${compact ? 'text-[11px] mt-1' : 'text-sm sm:text-base mt-1.5'}`}>
          {priceLabel}
        </p>
        <Link
          to={href}
          className={`inline-flex items-center justify-center w-full bg-[#1f2a1d] hover:bg-[#2a3827] text-white font-semibold rounded-lg transition-colors ${
            compact ? 'mt-1.5 px-2 py-1 text-[10px]' : 'mt-2.5 px-4 py-2 text-btn min-h-[44px]'
          }`}
        >
          {cta}
        </Link>
      </div>
    </article>
  );
}
