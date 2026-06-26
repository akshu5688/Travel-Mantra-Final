import { useState } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import SectionHeader from '../SectionHeader';
import { faqItems } from '../../data/content';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="Common questions about Central Asia tours, visas, and packages." />
        <div className="space-y-3 -mt-4">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#1f2a1d] text-sm sm:text-base">{item.question}</span>
                  <CaretDown
                    size={20}
                    weight="bold"
                    className={`shrink-0 text-[#336443] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-sm text-[#4b5b47] leading-relaxed border-t border-[#E5E5E5] pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
