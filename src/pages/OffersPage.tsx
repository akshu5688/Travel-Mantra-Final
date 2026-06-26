import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { hotOfferDestinations } from '../data/content';

export default function OffersPage() {
  return (
    <>
      <PageBanner
        label="Hot Offers"
        title="Limited-time deals"
        subtitle="Russia, Armenia, Central Asia, Caucasus, Ukraine, Belarus, and Turkey — special pricing on select packages."
      />
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {hotOfferDestinations.map((dest) => (
              <article
                key={dest.href}
                className="card-equal flex flex-col overflow-hidden rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-lg transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden shrink-0">
                  <img src={dest.image} alt={dest.alt} className="img-cover w-full h-full" loading="lazy" />
                </div>
                <div className="flex flex-col flex-1 p-4 sm:p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d35400]">Hot Offer</span>
                  <h3 className="text-card-title font-semibold text-[#1f2a1d] mt-2">{dest.label}</h3>
                  <p className="text-sm text-[#4b5b47] mt-2 flex-1 leading-relaxed">{dest.desc}</p>
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#E5E5E5]">
                    <Link to={dest.href} className="btn-primary w-full text-center min-h-[44px]">
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
        </div>
      </section>
    </>
  );
}
