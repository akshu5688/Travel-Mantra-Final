import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BoomerangVideoBg from '../BoomerangVideoBg';
import HeroPackageCard from '../components/HeroPackageCard';
import TripSearchBox from '../components/TripSearchBox';
import ServiceTabs from '../components/ServiceTabs';
import SectionHeader from '../components/SectionHeader';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import CISDestinationCards from '../components/home/CISDestinationCards';
import ComparisonTable from '../components/home/ComparisonTable';
import FeaturedToursSection from '../components/home/FeaturedToursSection';
import VisaSection from '../components/home/VisaSection';
import AboutSection from '../components/home/AboutSection';
import TravelServicesSection from '../components/home/TravelServicesSection';
import BlogPreviewSection from '../components/home/BlogPreviewSection';
import FAQSection from '../components/home/FAQSection';
import PackageEnquiryForm from '../components/home/PackageEnquiryForm';
import { SealCheck } from '@phosphor-icons/react';
import { heroPackages, heroTrustBadges, heroTrustCopy, testimonials } from '../data/content';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

const HERO_HEADLINE = 'Central Asia Travel Experts Since 2008';
const HERO_SUBHEADLINE =
  'Premium tours to Uzbekistan, Kazakhstan, Azerbaijan & more. Local offices in Tashkent, Almaty & Delhi with full visa and LOI support.';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToEnquiry) {
      document.getElementById('hero-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location.state]);

  return (
    <>
      <section className="hero-section relative w-full overflow-hidden bg-[#1f2a1d]">
        <BoomerangVideoBg
          src={BG_VIDEO}
          className="absolute inset-0 z-0 h-full w-full"
          poster="/images/hero-central-asia-travels-mantra.webp"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1f2a1d]/80 via-[#1f2a1d]/60 to-[#1f2a1d]/90 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-[4.75rem] sm:pt-28 lg:pt-[7.25rem] pb-8 sm:pb-10">
          <ServiceTabs />

          <div className="mt-4 lg:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="min-w-0 text-left">
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

              <p className="text-xs sm:text-sm text-white/80 mt-4 leading-relaxed max-w-lg">{heroTrustCopy}</p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-5">
                <Link to="/tours" className="btn-secondary w-full sm:w-auto min-h-[44px]">
                  Explore Central Asia Packages
                </Link>
                <Link
                  to="/"
                  state={{ scrollToEnquiry: true }}
                  className="btn-primary w-full sm:w-auto min-h-[44px] !bg-white !text-[#1f2a1d] hover:!bg-gradient-to-r hover:!from-[#F97316] hover:!to-[#FB923C] hover:!text-white"
                >
                  Get Free Trip Plan
                </Link>
              </div>
            </div>

            <div className="hero-pkg-grid grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-3 w-full">
              {heroPackages.map((pkg) => (
                <HeroPackageCard key={pkg.title} {...pkg} heroEqual />
              ))}
            </div>
          </div>

          <div className="mt-6 lg:mt-8 hero-search-panel rounded-xl sm:rounded-2xl bg-white border border-[#E5E5E5] shadow-xl p-3 sm:p-4 lg:p-6">
            <TripSearchBox inHero />
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <CISDestinationCards />
      <ComparisonTable />
      <FeaturedToursSection />
      <VisaSection />
      <AboutSection />
      <TravelServicesSection />
      <BlogPreviewSection />

      <section id="testimonials" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Reviews" title="What Our Travelers Say" />
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

      <FAQSection />
      <PackageEnquiryForm />
    </>
  );
}
