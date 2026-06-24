import { Link, useLocation } from 'react-router-dom';
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

function isTabActive(href: string, pathname: string, tabId: string) {
  if (pathname === '/') return tabId === 'tours' || tabId === 'holiday';
  if (href === '/tours') return pathname === '/tours';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function tabClassName(active: boolean, layout: 'grid' | 'scroll') {
  const base =
    'service-tab flex flex-col items-center justify-center gap-1.5 rounded-xl border transition-all text-center';
  const sizing =
    layout === 'grid'
      ? 'min-h-[4.5rem] px-1.5 py-2.5 w-full'
      : 'shrink-0 snap-start min-w-[4.75rem] sm:min-w-[5.5rem] px-2.5 py-2.5';
  const state = active
    ? 'bg-white text-[#1f2a1d] border-white shadow-md'
    : 'bg-white/92 text-[#4b5b47] border-white/55 hover:bg-white hover:text-[#1f2a1d] hover:shadow-sm';
  return `${base} ${sizing} ${state}`;
}

export default function ServiceTabs() {
  const { pathname } = useLocation();

  const renderTab = (tab: (typeof serviceTabs)[number], layout: 'grid' | 'scroll') => {
    const Icon = tabIcons[tab.id];
    const active = isTabActive(tab.href, pathname, tab.id);
    return (
      <Link key={tab.id} to={tab.href} className={tabClassName(active, layout)}>
        <Icon
          size={layout === 'grid' ? 20 : 22}
          weight={active ? 'fill' : 'duotone'}
          className={`shrink-0 ${active ? 'text-[#336443]' : 'text-[#336443]/80'}`}
        />
        <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-semibold leading-tight line-clamp-2 w-full">
          {tab.label}
        </span>
      </Link>
    );
  };

  return (
    <div className="service-tabs-bar w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 lg:p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="hidden lg:grid lg:grid-cols-9 lg:gap-2 w-full">
        {serviceTabs.map((tab) => renderTab(tab, 'grid'))}
      </div>
      <div className="lg:hidden service-tabs-scroll flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full pb-0.5">
        {serviceTabs.map((tab) => renderTab(tab, 'scroll'))}
      </div>
    </div>
  );
}
