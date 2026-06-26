import {
  CalendarCheck,
  Stamp,
  Car,
  Buildings,
  Translate,
  Presentation,
  Airplane,
  Bus,
  SlidersHorizontal,
} from '@phosphor-icons/react';
import SectionHeader from '../SectionHeader';
import { aboutServicesSummary, travelServices } from '../../data/content';

const serviceIcons = [
  CalendarCheck,
  Stamp,
  Car,
  Buildings,
  Translate,
  Presentation,
  Airplane,
  Bus,
  SlidersHorizontal,
];

export default function TravelServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Services"
          title="Set of Our Services"
          subtitle={aboutServicesSummary}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {travelServices.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <div
                key={service}
                className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors min-h-[120px]"
              >
                <Icon size={28} weight="duotone" className="text-[#336443] mb-3" />
                <p className="text-sm font-semibold text-[#1f2a1d] leading-snug">{service}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
