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

export default function WhyChooseUsSection({ limit }: { limit?: number }) {
  const cards = limit ? trustCards.slice(0, limit) : trustCards;
  const icons = limit ? trustIcons.slice(0, limit) : trustIcons;

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA] border-t border-[#E5E5E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Us"
          title="Why Travelers Choose Us"
          subtitle="Destination Specialists, Not Just Travel Planners"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="card-equal flex gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/40 transition-colors"
              >
                <Icon size={32} weight="duotone" className="text-[#336443] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-card-title font-semibold text-[#1f2a1d]">{card.title}</h3>
                  <p className="text-sm text-[#4b5b47] mt-1 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {limit && (
          <div className="text-center mt-8">
            <Link to="/about-us" className="text-sm font-semibold text-[#336443] hover:text-[#1f2a1d]">
              Learn more about Travels Mantra →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
