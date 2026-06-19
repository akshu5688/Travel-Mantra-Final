import { Link } from 'react-router-dom';
import { BookOpenText, ClipboardText, PenNib, Heartbeat, GlobeHemisphereEast } from '@phosphor-icons/react';
import PageBanner from '../components/PageBanner';
import SectionHeader from '../components/SectionHeader';
import { visaServices } from '../data/content';

const icons = [BookOpenText, ClipboardText, PenNib, Heartbeat, GlobeHemisphereEast];

export default function VisaPage() {
  return (
    <>
      <PageBanner label="Visa Assistance" title="Visa help made effortless" subtitle="From document checklist to embassy follow-up — we handle it all." />
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#85AB8B]/25 bg-[#FAFAFA] p-6 sm:p-10 md:p-12 rounded-2xl">
            <SectionHeader label="Our Services" title="Complete visa support" subtitle="Tourist visa guidance for Indian passport holders." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {visaServices.map(({ title, desc }, i) => {
                const Icon = icons[i];
                return (
                  <div key={title} className="card-equal p-5 sm:p-6 text-center rounded-xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 transition-colors">
                    <Icon size={32} weight="duotone" className="text-[#336443] mx-auto mb-3" />
                    <h3 className="text-card-title font-semibold text-[#1f2a1d] mb-2">{title}</h3>
                    <p className="text-sm text-[#4b5b47] leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link to="/contact" className="btn-outline inline-flex">Get Visa Help</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
