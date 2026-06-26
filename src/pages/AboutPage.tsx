import { Link } from 'react-router-dom';
import {
  Buildings,
  CalendarCheck,
  Car,
  Stamp,
  Translate,
  Presentation,
  Airplane,
  Bus,
  SlidersHorizontal,
  BookOpen,
  Suitcase,
  SignIn,
  Baby,
  Wheelchair,
} from '@phosphor-icons/react';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import PageBanner from '../components/PageBanner';
import SectionHeader from '../components/SectionHeader';
import {
  aboutFeaturedArticles,
  aboutHighlights,
  aboutServicesSummary,
  aboutTravelTips,
  aboutUsIntro,
  travelServices,
  UZBEKISTAN_TOURISM_BOARD_URL,
} from '../data/content';

const serviceIcons = [
  CalendarCheck,
  Stamp,
  Car,
  Buildings,
  Translate,
  Presentation,
  Airplane,
  Bus,
  SlidersHorizontal,
];

const travelTipIcons = [BookOpen, Suitcase, SignIn, Baby, Wheelchair];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        label="About Us"
        title={aboutUsIntro.companyName}
        subtitle={aboutUsIntro.bannerSubtitle}
      />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl order-2 lg:order-1">
              <img
                src="/images/about-travels-mantra.webp"
                alt="Scenic Central Asia beach vacation view — Travels Mantra holiday and tour experiences"
                className="img-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">
                {aboutUsIntro.certification}
              </p>
              <h2 className="text-section-title font-semibold text-[#336443] mb-6">{aboutUsIntro.companyName}</h2>
              {aboutUsIntro.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-body text-[#4b5b47] mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-body text-[#4b5b47] mb-6 leading-relaxed">
                {aboutUsIntro.tourismBoardText}{' '}
                <a
                  href={UZBEKISTAN_TOURISM_BOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#336443] hover:text-[#1f2a1d] underline underline-offset-2"
                >
                  {aboutUsIntro.tourismBoardLabel}
                </a>
                .
              </p>
              <Link
                to="/build-your-package"
                className="btn-primary w-full sm:w-auto text-center inline-flex justify-center min-h-[44px]"
              >
                Get Free Trip Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />

      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Services" title="Our Central Asia Travel Services" subtitle={aboutServicesSummary} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {travelServices.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <div
                  key={service}
                  className="flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors"
                >
                  <Icon size={28} weight="duotone" className="text-[#336443] shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-[#1f2a1d] leading-snug">{service}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 aspect-[21/9] max-h-72 overflow-hidden rounded-2xl border border-[#E5E5E5]">
            <img
              src="/images/hero-central-asia-travels-mantra.webp"
              alt="Travels Mantra travel services – fixed departures, visa support, and custom Central Asia holiday planning"
              className="img-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {aboutHighlights.map((item) => (
              <div
                key={item.title}
                className="card-equal p-6 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors"
              >
                <h3 className="text-card-title font-semibold text-[#1f2a1d]">{item.title}</h3>
                <p className="text-sm text-[#4b5b47] mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Resources" title="Get to Know Us" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {aboutTravelTips.map((tip, i) => {
              const Icon = travelTipIcons[i];
              return (
                <article
                  key={tip.title}
                  className={`rounded-2xl bg-white border border-[#E5E5E5] overflow-hidden hover:border-[#85AB8B]/40 transition-colors ${
                    i === 0 ? 'lg:col-span-2' : ''
                  }`}
                >
                  {tip.image && (
                    <div className="aspect-[21/9] max-h-48 overflow-hidden">
                      <img src={tip.image} alt={tip.alt || tip.title} className="img-cover w-full h-full" loading="lazy" />
                    </div>
                  )}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <Icon size={28} weight="duotone" className="text-[#336443] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-card-title font-semibold text-[#1f2a1d]">{tip.title}</h3>
                        <p className="text-sm text-[#4b5b47] mt-2 leading-relaxed">{tip.desc}</p>
                        {'href' in tip && tip.href && (
                          <Link to={tip.href} className="inline-block mt-4 text-sm font-semibold text-[#336443] min-h-[44px] flex items-center">
                            Explore Guides →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="News & Articles" title="From the Blog Post" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutFeaturedArticles.map((article) => (
              <Link
                key={article.title}
                to={article.href}
                className="block p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#85AB8B]/40 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-[#1f2a1d] leading-snug">{article.title}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="btn-outline min-h-[44px]">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#1f2a1d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">Plan Your Trip With Us</p>
          <h2 className="text-section-title font-semibold text-white">Ready for an unforgettable tour?</h2>
          <p className="text-body text-white/80 mt-4 max-w-2xl mx-auto">
            Our team advisors are available 24/7 to help you plan your Central Asia holiday.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <Link to="/tours" className="btn-secondary min-h-[44px]">
              Book Tour Now
            </Link>
            <Link
              to="/build-your-package"
              className="btn-primary min-h-[44px] !bg-white !text-[#1f2a1d] hover:!bg-[#85AB8B] hover:!text-white"
            >
              Get Free Trip Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
