import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import { featuredTours } from '../../data/content';

type FeaturedToursSectionProps = {
  limit?: number;
  viewAllHref?: string;
};

export default function FeaturedToursSection({ limit, viewAllHref }: FeaturedToursSectionProps) {
  const tours = limit ? featuredTours.slice(0, limit) : featuredTours;

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Tours"
          title="Featured Central Asia Tours"
          subtitle="Handpicked packages across Uzbekistan, Kazakhstan, Kyrgyzstan, and Russia."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {tours.map((tour) => (
            <article
              key={`${tour.title}-${tour.duration}`}
              className="card-equal flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden shrink-0">
                <img src={tour.image} alt={tour.alt} className="img-cover w-full h-full" loading="lazy" />
              </div>
              <div className="flex flex-col flex-1 p-4 sm:p-5">
                <h3 className="text-card-title font-semibold text-[#1f2a1d] leading-snug">
                  {tour.title}
                  {tour.subtitle && (
                    <span className="block text-sm font-normal text-[#4b5b47] mt-0.5">{tour.subtitle}</span>
                  )}
                </h3>
                <p className="text-sm text-[#4b5b47] mt-1.5">{tour.duration}</p>
                <p className="text-[#336443] font-semibold text-lg mt-2">
                  {tour.price === 'ON REQUEST' ? 'ON REQUEST' : `From ${tour.price}`}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 flex-1 content-start">
                  {tour.inclusions.map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] font-semibold uppercase tracking-wide text-[#336443] bg-[#85AB8B]/15 px-2 py-1 rounded"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#E5E5E5]">
                  <Link to={tour.href} className="btn-primary w-full text-center min-h-[44px]">
                    View Package
                  </Link>
                  <Link to="/build-your-package" className="btn-outline w-full text-center min-h-[44px]">
                    Send Enquiry
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {viewAllHref && (
          <div className="text-center mt-10">
            <Link to={viewAllHref} className="btn-outline min-h-[44px]">
              View All Tour Packages
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
