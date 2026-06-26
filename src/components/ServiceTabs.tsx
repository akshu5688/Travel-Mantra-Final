import { Link } from 'react-router-dom';
import {
  MapTrifold,
  GlobeHemisphereWest,
  Stamp,
  Buildings,
  CalendarCheck,
  ShieldCheck,
  SlidersHorizontal,
  Compass,
} from '@phosphor-icons/react';
import { serviceTabs } from '../data/content';

const tabIcons = {
  tours: MapTrifold,
  cis: GlobeHemisphereWest,
  visa: Stamp,
  hotels: Buildings,
  fixed: CalendarCheck,
  insurance: ShieldCheck,
  build: SlidersHorizontal,
  excursions: Compass,
} as const;

export default function ServiceTabs() {
  return (
    <div className="service-tabs-bar w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="service-tabs-scroll flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-0.5 -mx-0.5 px-0.5 lg:grid lg:grid-cols-8 lg:overflow-visible lg:snap-none">
        {serviceTabs.map((tab) => {
          const Icon = tabIcons[tab.id];
          return (
            <Link key={tab.id} to={tab.href} className="tm-service-tab shrink-0 snap-start lg:shrink lg:snap-align-none min-w-[5.5rem] lg:min-w-0">
              <Icon size={20} weight="fill" className="shrink-0 text-[#336443]" />
              <span className="tm-service-tab__label">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
