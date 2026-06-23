import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';

const insurancePlans = [
  {
    title: 'Medical & Emergency Cover',
    desc: 'Hospitalisation, medical evacuation, and emergency assistance abroad.',
  },
  {
    title: 'Trip Cancellation & Delay',
    desc: 'Protection against cancelled flights, missed connections, and trip interruptions.',
  },
  {
    title: 'Baggage & Personal Belongings',
    desc: 'Coverage for lost, stolen, or delayed baggage during your journey.',
  },
  {
    title: 'Visa-Compliant Plans',
    desc: 'Insurance policies that meet Schengen, UK, and other embassy requirements.',
  },
];

export default function InsurancePage() {
  return (
    <>
      <PageBanner
        label="Travel Insurance"
        title="Travel with complete peace of mind"
        subtitle="Medical, baggage, delay, and cancellation cover tailored for international holidays."
      />
      <section className="py-14 sm:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {insurancePlans.map((plan) => (
              <div key={plan.title} className="card-equal p-6 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-card-title font-semibold text-[#1f2a1d]">{plan.title}</h3>
                <p className="text-sm text-[#4b5b47] mt-2 leading-relaxed">{plan.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-body text-[#4b5b47] mb-6 max-w-xl mx-auto">
              Get complimentary insurance guidance with any package booking from Travels Mantra.
            </p>
            <Link to="/contact" className="btn-primary">Get Insurance Help</Link>
          </div>
        </div>
      </section>
    </>
  );
}
