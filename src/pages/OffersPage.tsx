import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

export default function OffersPage() {
  return (
    <>
      <PageBanner label="Hot Offers" title="Limited-time deals" subtitle="Save on select packages and add-ons this season." />
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="card-equal p-6 rounded-2xl bg-[#1f2a1d] text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#336443] px-2 py-1 rounded">Flash Sale</span>
              <h4 className="text-card-title font-semibold mt-4 mb-2">Save up to ₹10,000</h4>
              <p className="text-sm text-white/70 flex-1">On select Dubai and Baku packages booked this month.</p>
              <Link to="/contact" className="inline-block mt-5 text-sm font-semibold border-b border-white/50 pb-0.5">Claim Offer</Link>
            </div>
            <div className="card-equal p-6 rounded-2xl bg-[#85AB8B]/15 border border-[#85AB8B]/30">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#1f2a1d] text-white px-2 py-1 rounded">New</span>
              <h4 className="text-card-title font-semibold text-[#1f2a1d] mt-4 mb-2">Baku Holiday Package</h4>
              <p className="text-sm text-[#4b5b47] flex-1">4N/5D with flights, hotel, visa & city tour — special launch pricing.</p>
              <Link to="/contact" className="inline-block mt-5 text-sm font-semibold text-[#336443]">Check Deals →</Link>
            </div>
            <div className="card-equal p-6 rounded-2xl border-2 border-dashed border-[#E5E5E5] text-center flex flex-col justify-center bg-white">
              <h4 className="text-card-title font-semibold text-[#336443] mb-2">Early Bird Offer</h4>
              <p className="text-sm text-[#4b5b47] flex-1">Book 60 days ahead on Vietnam & Central Asia tours.</p>
              <Link to="/contact" className="inline-block mt-4 text-sm font-semibold text-[#1f2a1d]">Learn More</Link>
            </div>
            <div className="card-equal p-6 rounded-2xl bg-white border border-[#E5E5E5]">
              <span className="text-2xl font-bold text-[#336443]">FREE</span>
              <h4 className="text-card-title font-semibold text-[#1f2a1d] mt-1 mb-2">Visa Consultation</h4>
              <p className="text-sm text-[#4b5b47] flex-1">Complimentary visa guidance with any package booking.</p>
              <Link to="/visa" className="inline-block mt-5 text-sm font-semibold text-[#336443]">Get Visa Help</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
