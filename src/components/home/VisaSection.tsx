import { Link } from 'react-router-dom';
import { Stamp, FileText, ListChecks, GlobeHemisphereWest, Package, ShieldCheck } from '@phosphor-icons/react';
import SectionHeader from '../SectionHeader';
import { visaServices } from '../../data/content';

const visaIcons = [Stamp, FileText, ListChecks, GlobeHemisphereWest, Package, ShieldCheck];

export default function VisaSection() {
  return (
    <section id="visa" className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Visa"
          title="Central Asia Visa Assistance"
          subtitle="Get LOI, tourist visa guidance, document checklist, and country-wise visa support for Central Asian travel."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visaServices.map((service, i) => {
            const Icon = visaIcons[i];
            return (
              <div
                key={service.title}
                className="card-equal flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors"
              >
                <Icon size={32} weight="duotone" className="text-[#336443] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-card-title font-semibold text-[#1f2a1d]">{service.title}</h3>
                  <p className="text-sm text-[#4b5b47] mt-1 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#1f2a1d] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm sm:text-base leading-relaxed text-white/90">
            Travels Mantra provides full Letter of Invitation and visa assistance for Central Asian countries.
          </p>
          <Link to="/visa" className="btn-secondary shrink-0 w-full sm:w-auto text-center min-h-[44px]">
            Get Visa Help
          </Link>
        </div>
      </div>
    </section>
  );
}
