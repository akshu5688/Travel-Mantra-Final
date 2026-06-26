import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SealCheck } from '@phosphor-icons/react';
import BoomerangVideoBg from '../BoomerangVideoBg';
import ServiceTabs from '../components/ServiceTabs';
import WhatWeProvideSection from '../components/home/WhatWeProvideSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { heroTrustBadges, heroTrustCopy } from '../data/content';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const HERO_HEADLINE = 'Central Asia Travel Experts Since 2008';
const HERO_SUBHEADLINE =
  'Premium tours to Uzbekistan, Kazakhstan, Azerbaijan & more. Local offices in Tashkent, Almaty & Delhi with full visa and LOI support.';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollToEnquiry) {
      navigate('/build-your-package', { replace: true });
    }
  }, [location.state, navigate]);

  return (
    <section className="hero-section relative w-full overflow-hidden bg-[#1f2a1d]">
      <BoomerangVideoBg
        src={BG_VIDEO}
        className="absolute inset-0 z-0 h-full w-full"
        poster="/images/hero-central-asia-travels-mantra.webp"
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1f2a1d]/80 via-[#1f2a1d]/60 to-[#1f2a1d]/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[4.75rem] sm:pt-28 lg:pt-[7.25rem] pb-12 sm:pb-16 flex flex-col">
        <ServiceTabs />

        <div className="mt-8 lg:mt-12 max-w-3xl">
          <h1 className="hero-title font-display text-hero-compact font-semibold text-white drop-shadow-lg">
            {HERO_HEADLINE}
          </h1>
          <p className="text-sm sm:text-body text-white/90 mt-3 leading-relaxed drop-shadow-md">
            {HERO_SUBHEADLINE}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {heroTrustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-white bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1.5 rounded-full"
              >
                <SealCheck size={14} weight="fill" className="text-[#85AB8B] shrink-0" />
                {badge}
              </span>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-white/80 mt-4 leading-relaxed max-w-2xl">{heroTrustCopy}</p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 mt-5">
            <Link to="/tours" className="btn-secondary w-full sm:w-auto min-h-[44px]">
              Explore Central Asia Packages
            </Link>
            <Link
              to="/search"
              className="btn-primary w-full sm:w-auto min-h-[44px] !bg-white !text-[#1f2a1d] hover:!bg-gradient-to-r hover:!from-[#F97316] hover:!to-[#FB923C] hover:!text-white"
            >
              Search
            </Link>
          </div>
        </div>

        <WhatWeProvideSection variant="hero" />
        <WhyChooseUsSection variant="hero" limit={6} />
        <TestimonialsSection variant="hero" />
      </div>
    </section>
  );
}
