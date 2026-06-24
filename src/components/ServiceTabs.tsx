import { Link } from 'react-router-dom';
import {
  MapTrifold,
  Suitcase,
  Flame,
  Stamp,
  ShieldCheck,
  Airplane,
  Buildings,
  SlidersHorizontal,
  Compass,
} from '@phosphor-icons/react';
import { serviceTabs } from '../data/content';

const tabIcons = {
  tours: MapTrifold,
  holiday: Suitcase,
  offers: Flame,
  visa: Stamp,
  insurance: ShieldCheck,
  flights: Airplane,
  hotels: Buildings,
  build: SlidersHorizontal,
  excursions: Compass,
} as const;

export default function ServiceTabs() {
  return (
    <div className="service-tabs-bar w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="grid grid-cols-3 lg:grid-cols-9 gap-2 w-full overflow-visible">
        {serviceTabs.map((tab) => {
          const Icon = tabIcons[tab.id];
          return (
            <Link key={tab.id} to={tab.href} className="tm-service-tab">
              <Icon size={20} weight="fill" className="shrink-0 text-[#336443]" />
              <span className="tm-service-tab__label">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
