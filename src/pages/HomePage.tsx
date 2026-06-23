import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BoomerangVideoBg from '../BoomerangVideoBg';
import HeroPackageCard from '../components/HeroPackageCard';
import TripSearchBox from '../components/TripSearchBox';
import OfferStrip from '../components/OfferStrip';
import SectionHeader from '../components/SectionHeader';
import { SealCheck, Timer, MapTrifold, Stamp, ShieldCheck, SlidersHorizontal } from '@phosphor-icons/react';
import { heroPackages, trustCards, testimonials } from '../data/content';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const trustIcons = [SealCheck, Timer, MapTrifold, Stamp, ShieldCheck, SlidersHorizontal];

const HERO_SUBHEADLINE =
  'Book complete travel packages with flights, hotels, visa assistance, sightseeing, transfers, insurance, and expert travel support.';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToEnquiry) {
      document.getElementById('hero-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location.state]);

  return (
    <>
      {/* Hero */}
      <section className="hero-section relative w-full overflow-hidden bg-[#1f2a1d]">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 z-0 h-full w-full" poster="/images/hero-poster.webp" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1f2a1d]/70 via-[#1f2a1d]/50 to-[#1f2a1d]/80 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 lg:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start lg:items-center">
            <div className="text-left">
              <h1 className="hero-title font-display text-hero font-semibold text-white drop-shadow-lg">
                Plan Your Dream Holiday with Travels Mantra
              </h1>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6">
                <Link to="/tours" className="btn-secondary w-full sm:w-auto">
                  Explore Packages
                </Link>
                <Link
                  to="/"
                  state={{ scrollToEnquiry: true }}
                  className="btn-primary w-full sm:w-auto !bg-white !text-[#1f2a1d] hover:!bg-white/90"
                >
                  Get Free Trip Plan
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex flex-col gap-3">
              {heroPackages.map((pkg) => (
                <HeroPackageCard key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>

          {/* Mobile featured packages — stays in hero */}
          <div className="lg:hidden mt-6 pb-2">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)] mb-3">
              Featured Packages
            </p>
            <div className="hero-pkg-scroll flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-1 -mx-1 px-1">
              {heroPackages.map((pkg) => (
                <HeroPackageCard key={pkg.title} {...pkg} compact />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro + hot offers — below hero (mobile + desktop) */}
      <section className="relative z-20 pt-8 lg:pt-14 pb-8 sm:pb-10 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
          <p className="text-body text-[#4b5b47] max-w-3xl leading-relaxed mb-6 sm:mb-8">
            {HERO_SUBHEADLINE}
          </p>
          <OfferStrip />
        </div>
      </section>

      {/* Trust cards */}
      <section className="py-10 sm:py-14 bg-[#FAFAFA] border-t border-[#E5E5E5]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustCards.map((card, i) => {
              const Icon = trustIcons[i];
              return (
                <div
                  key={card.title}
                  className="card-equal flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors"
                >
                  <Icon size={32} weight="duotone" className="text-[#336443] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-card-title font-semibold text-[#1f2a1d]">{card.title}</h3>
                    <p className="text-sm text-[#4b5b47] mt-1 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search + testimonials */}
      <section className="py-14 sm:py-20 bg-white pb-24 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-search-panel rounded-2xl bg-white border border-[#E5E5E5] shadow-xl p-3 sm:p-4 lg:p-6 mb-10 sm:mb-12 lg:mb-14">
            <TripSearchBox />
          </div>

          <SectionHeader label="Traveller Stories" title="What our travellers say" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <blockquote key={t.trip} className="card-equal p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="text-[#85AB8B] text-sm mb-4 tracking-widest">★ ★ ★ ★ ★</div>
                <p className="text-sm text-[#4b5b47] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3 mt-5 pt-5 border-t border-[#E5E5E5]">
                  <div className="w-12 h-12 rounded-full bg-[#336443] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1f2a1d] text-sm">Verified Traveller</p>
                    <p className="text-xs text-[#4b5b47] mt-0.5">{t.trip}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
