import { Link } from 'react-router-dom';
import {
  SealCheck,
  Certificate,
  ShareNetwork,
  CurrencyCircleDollar,
  Globe,
  Users,
  Star,
  Headset,
  SlidersHorizontal,
} from '@phosphor-icons/react';
import SectionHeader from '../SectionHeader';
import { trustCards } from '../../data/content';

const trustIcons = [SealCheck, Certificate, ShareNetwork, CurrencyCircleDollar, Globe, Users, Star, Headset, SlidersHorizontal];

type WhyChooseUsSectionProps = {
  limit?: number;
  variant?: 'default' | 'hero';
};

export default function WhyChooseUsSection({ limit, variant = 'default' }: WhyChooseUsSectionProps) {
  const cards = limit ? trustCards.slice(0, limit) : trustCards;
  const icons = limit ? trustIcons.slice(0, limit) : trustIcons;
  const isHero = variant === 'hero';

  const content = (
    <>
      <SectionHeader
        label="Why Us"
        title="Why Travelers Choose Us"
        subtitle="Destination Specialists, Not Just Travel Planners"
        dark={isHero}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {cards.map((card, i) => {
          const Icon = icons[i];
          return (
            <div
              key={card.title}
              className={
                isHero
                  ? 'card-equal flex gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors'
                  : 'card-equal flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors'
              }
            >
              <Icon
                size={isHero ? 28 : 32}
                weight="duotone"
                className={`shrink-0 mt-0.5 ${isHero ? 'text-[#85AB8B]' : 'text-[#336443]'}`}
              />
              <div>
                <h3 className={`font-semibold leading-snug ${isHero ? 'text-sm text-white' : 'text-card-title text-[#1f2a1d]'}`}>
                  {card.title}
                </h3>
                <p className={`mt-1 leading-relaxed ${isHero ? 'text-xs text-white/80' : 'text-sm text-[#4b5b47]'}`}>
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {limit && (
        <div className={`text-center ${isHero ? 'mt-6' : 'mt-8'}`}>
          <Link
            to="/about-us"
            className={`text-sm font-semibold min-h-[44px] inline-flex items-center ${
              isHero ? 'text-[#85AB8B] hover:text-white' : 'text-[#336443] hover:text-[#1f2a1d]'
            }`}
          >
            Learn more about Travels Mantra →
          </Link>
        </div>
      )}
    </>
  );

  if (isHero) {
    return <div className="mt-10 lg:mt-12">{content}</div>;
  }

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA] border-t border-[#E5E5E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
