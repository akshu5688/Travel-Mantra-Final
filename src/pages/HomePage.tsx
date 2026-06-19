import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CaretDown } from '@phosphor-icons/react';
import BoomerangVideoBg from '../BoomerangVideoBg';
import QuickTripEnquiry from '../components/QuickTripEnquiry';
import SectionHeader from '../components/SectionHeader';
import { SealCheck, Timer, MapTrifold, Stamp, ShieldCheck, SlidersHorizontal } from '@phosphor-icons/react';
import { trustCards, testimonials } from '../data/content';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const trustIcons = [SealCheck, Timer, MapTrifold, Stamp, ShieldCheck, SlidersHorizontal];

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToEnquiry) {
      document.getElementById('hero-enquiry')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <>
      <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#1f2a1d] flex flex-col">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 z-0 h-full w-full" poster="/images/hero-poster.webp" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1f2a1d]/55 via-[#1f2a1d]/20 to-[#1f2a1d]/35 sm:to-[#1f2a1d]/70 pointer-events-none" />
        <div className="hero-scroll-fade absolute inset-x-0 bottom-0 z-[2] h-32 sm:h-40 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-1 flex-col min-h-[100dvh] px-3 sm:px-6 pt-20 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto">
            <h1 className="text-hero font-semibold text-white drop-shadow-lg">
              Plan Your Dream Holiday with Travels <span className="text-[#85AB8B]">M</span>antra
            </h1>
          </div>

          <div className="w-full max-w-3xl mx-auto shrink-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full sm:w-auto sm:mx-auto">
              <Link to="/tours" className="btn-secondary w-full sm:w-auto !py-2.5 sm:!py-3 text-sm sm:text-base">Explore Packages</Link>
              <Link to="/" state={{ scrollToEnquiry: true }} className="btn-primary w-full sm:w-auto !py-2.5 sm:!py-3 text-sm sm:text-base !bg-white !text-[#1f2a1d] hover:!bg-white/90">Get Free Trip Plan</Link>
            </div>
            <a
              href="#hero-enquiry"
              className="flex flex-col items-center gap-1 mt-5 sm:mt-6 text-white/80 hover:opacity-80 transition-opacity"
              aria-label="Scroll to enquiry form"
            >
              <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
              <CaretDown size={20} weight="bold" className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 sm:-mt-8 py-10 sm:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
            <p className="text-body text-[#4b5b47] leading-relaxed">
              Book complete travel packages with flights, hotels, visa assistance, sightseeing, transfers, insurance, and expert travel support.
            </p>
          </div>
          <QuickTripEnquiry />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:mt-12">
            {trustCards.map((card, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={card.title} className="card-equal flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors">
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

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Traveller Stories" title="What our travellers say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <blockquote key={t.trip} className="card-equal p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="text-[#85AB8B] text-sm mb-4 tracking-widest">★ ★ ★ ★ ★</div>
                <p className="text-sm text-[#4b5b47] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3 mt-5 pt-5 border-t border-[#E5E5E5]">
                  <div className="w-12 h-12 rounded-full bg-[#336443] text-white flex items-center justify-center text-sm font-semibold shrink-0">{t.initials}</div>
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
