import { Link } from 'react-router-dom';
import {
  Headset,
  Stamp,
  Airplane,
  Car,
  ForkKnife,
  SlidersHorizontal,
  CheckCircle,
} from '@phosphor-icons/react';
import SectionHeader from '../SectionHeader';
import { inclusionBadges, whatWeProvideItems, whatWeProvideSummary } from '../../data/content';

const itemIcons = [Headset, Stamp, Airplane, Car, ForkKnife, SlidersHorizontal];

type WhatWeProvideSectionProps = {
  variant?: 'default' | 'hero';
};

export default function WhatWeProvideSection({ variant = 'default' }: WhatWeProvideSectionProps) {
  const isHero = variant === 'hero';

  const content = (
    <>
      <SectionHeader
        label="What We Provide"
        title="Everything You Need for a Worry-Free Trip"
        subtitle={whatWeProvideSummary}
        dark={isHero}
      />

      <div className={`flex flex-wrap gap-2 ${isHero ? 'justify-center mb-6' : 'mb-8'}`}>
        {inclusionBadges.map((badge) => (
          <span
            key={badge}
            className={
              isHero
                ? 'inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-white bg-[#336443]/40 border border-[#85AB8B]/40 px-2.5 py-1.5 rounded-full'
                : 'inline-flex items-center gap-1.5 text-xs font-semibold text-[#336443] bg-[#336443]/10 border border-[#336443]/20 px-3 py-1.5 rounded-full'
            }
          >
            <CheckCircle size={14} weight="fill" className={isHero ? 'text-[#85AB8B]' : 'text-[#336443]'} />
            {badge}
          </span>
        ))}
        <span
          className={
            isHero
              ? 'inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#1f2a1d] bg-[#85AB8B] border border-[#85AB8B] px-2.5 py-1.5 rounded-full'
              : 'inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#336443] border border-[#336443] px-3 py-1.5 rounded-full'
          }
        >
          <Headset size={14} weight="fill" />
          24×7 Support
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {whatWeProvideItems.map((item, i) => {
          const Icon = itemIcons[i];
          const highlighted = 'highlight' in item && item.highlight;
          return (
            <div
              key={item.title}
              className={
                isHero
                  ? `card-equal flex gap-3 p-4 rounded-xl border transition-colors ${
                      highlighted
                        ? 'bg-[#85AB8B]/20 backdrop-blur-sm border-[#85AB8B]/50 hover:bg-[#85AB8B]/25'
                        : 'bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15'
                    }`
                  : `card-equal flex gap-4 p-5 rounded-2xl bg-white border transition-colors ${
                      highlighted ? 'border-[#336443]/40 shadow-sm' : 'border-[#E5E5E5] hover:border-[#85AB8B]/40'
                    }`
              }
            >
              <Icon
                size={isHero ? 28 : 32}
                weight="duotone"
                className={`shrink-0 mt-0.5 ${isHero ? (highlighted ? 'text-[#85AB8B]' : 'text-[#85AB8B]') : 'text-[#336443]'}`}
              />
              <div>
                <h3
                  className={`font-semibold leading-snug ${
                    isHero ? `text-sm ${highlighted ? 'text-white' : 'text-white'}` : 'text-card-title text-[#1f2a1d]'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`mt-1 leading-relaxed ${isHero ? 'text-xs text-white/80' : 'text-sm text-[#4b5b47]'}`}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`text-center ${isHero ? 'mt-6' : 'mt-8'}`}>
        <Link
          to="/about-us"
          className={`text-sm font-semibold min-h-[44px] inline-flex items-center ${
            isHero ? 'text-[#85AB8B] hover:text-white' : 'text-[#336443] hover:text-[#1f2a1d]'
          }`}
        >
          View all our travel services →
        </Link>
      </div>
    </>
  );

  if (isHero) {
    return <div className="mt-10 lg:mt-12">{content}</div>;
  }

  return (
    <section className="py-14 sm:py-20 bg-white border-t border-[#E5E5E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
