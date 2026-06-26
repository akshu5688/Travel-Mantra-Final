import PageBanner from '../components/PageBanner';
import VisaSection from '../components/home/VisaSection';
import FAQSection from '../components/home/FAQSection';

export default function VisaPage() {
  return (
    <>
      <PageBanner
        label="Visa Assistance"
        title="Central Asia Visa Assistance"
        subtitle="Get LOI, tourist visa guidance, document checklist, and country-wise visa support for Central Asian travel."
      />
      <VisaSection hideHeader />
      <FAQSection limit={4} />
    </>
  );
}
