import { useParams, Link, Navigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { featuredTours, heroPackages } from '../data/content';

type TourDetail = {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
  inclusions: readonly string[];
  visa?: string;
};

function findTour(slug: string | undefined): TourDetail | null {
  if (!slug) return null;

  const featured = featuredTours.find((t) => t.href === `/tours/${slug}`);
  if (featured) {
    return {
      title: featured.title,
      subtitle: featured.subtitle,
      duration: featured.duration,
      price: featured.price,
      image: featured.image,
      alt: featured.alt,
      inclusions: featured.inclusions,
    };
  }

  const hero = heroPackages.find((t) => t.href === `/tours/${slug}`);
  if (hero) {
    return {
      title: hero.title,
      duration: hero.duration,
      price: hero.priceLabel.replace(/^Starting from\s*/i, ''),
      image: hero.image,
      alt: hero.alt,
      inclusions: hero.inclusions,
      visa: hero.visa,
    };
  }

  return null;
}

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const tour = findTour(slug);

  if (!tour) {
    return <Navigate to="/tours" replace />;
  }

  return (
    <>
      <PageBanner
        label="Tour Package"
        title={tour.title}
        subtitle={tour.subtitle ? `${tour.subtitle} · ${tour.duration}` : tour.duration}
      />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E5E5]">
              <img src={tour.image} alt={tour.alt} className="img-cover w-full h-full" />
            </div>
            <div>
              <p className="text-[#336443] font-semibold text-2xl">
                {tour.price === 'ON REQUEST' || tour.price.includes('REQUEST') ? 'ON REQUEST' : `From ${tour.price}`}
              </p>
              {tour.visa && (
                <p className="text-sm text-[#4b5b47] mt-2">
                  Visa: <span className="font-semibold text-[#1f2a1d]">{tour.visa}</span>
                </p>
              )}
              <p className="text-body text-[#4b5b47] mt-4 leading-relaxed">
                Complete Central Asia tour package with flights, hotels, meals, visa support, sightseeing, transfers, and 24/7 local assistance.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {tour.inclusions.map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] font-semibold uppercase tracking-wide text-[#336443] bg-[#85AB8B]/15 px-2.5 py-1.5 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link to="/" state={{ scrollToEnquiry: true }} className="btn-secondary flex-1 text-center min-h-[44px]">
                  Send Enquiry
                </Link>
                <Link to="/contact-us" className="btn-outline flex-1 text-center min-h-[44px]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
