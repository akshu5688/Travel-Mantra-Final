import PageBanner from '../components/PageBanner';
import PackageEnquiryForm from '../components/home/PackageEnquiryForm';

export default function BuildPackagePage() {
  return (
    <>
      <PageBanner
        label="Build Your Package"
        title="Build Your Central Asia Package"
        subtitle="Tell us your destination, travel dates, budget, and preferences. Our experts will create a customized Central Asia itinerary for you."
      />
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PackageEnquiryForm pageOnly />
        </div>
      </section>
    </>
  );
}
