import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import VisaSection from '../components/home/VisaSection';
import SectionHeader from '../components/SectionHeader';
import { visaFeaturedArticles, visaPageIntro, visaTourismPartners } from '../data/content';

export default function VisaPage() {
  return (
    <>
      <PageBanner
        label={visaPageIntro.label}
        title="Visa & Related Services"
        subtitle={visaPageIntro.certification}
      />
      <VisaSection hideHeader />

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="News & Articles" title="From the blog post" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visaFeaturedArticles.map((article) => (
              <Link
                key={article.title}
                to={article.href}
                className="block p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#85AB8B]/40 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-[#1f2a1d] leading-snug">{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-[#FAFAFA] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {visaTourismPartners.map((partner) => (
              <img
                key={partner.name}
                src={partner.image}
                alt={partner.alt}
                className="h-8 sm:h-10 w-auto object-contain opacity-90"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#1f2a1d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">
              Plan your trip with us
            </p>
            <h2 className="text-section-title font-semibold text-white">Ready for an unforgetable tour?</h2>
          </div>
          <Link to="/tours" className="btn-secondary shrink-0 w-full sm:w-auto text-center min-h-[44px]">
            Book Tour Now
          </Link>
        </div>
      </section>
    </>
  );
}
