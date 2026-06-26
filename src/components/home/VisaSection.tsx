import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import { visaAnnouncements, visaPageIntro, visaProducts } from '../../data/content';

type VisaSectionProps = {
  hideHeader?: boolean;
};

export default function VisaSection({ hideHeader = false }: VisaSectionProps) {
  return (
    <section id="visa" className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <SectionHeader
            label={visaPageIntro.label}
            title="Visa & Related Services"
            subtitle={visaPageIntro.certification}
          />
        )}

        <div className="max-w-3xl mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#85AB8B] mb-3">
            {visaPageIntro.label}
          </p>
          <h2 className="text-section-title font-semibold text-[#1f2a1d] mb-6">{visaPageIntro.title}</h2>
          <p className="text-body text-[#4b5b47] mb-4 leading-relaxed">{visaPageIntro.paragraphs[0]}</p>
          <p className="text-body text-[#4b5b47] mb-4 leading-relaxed">{visaPageIntro.paragraphs[1]}</p>
          <p className="text-body text-[#4b5b47] mb-4 leading-relaxed">
            <span className="font-semibold text-[#1f2a1d]">Travels Mantra</span> Visa Consultant team –{' '}
            {visaPageIntro.paragraphs[2]}
          </p>
          <p className="text-body text-[#4b5b47] leading-relaxed">{visaPageIntro.paragraphs[3]}</p>
        </div>

        <div className="mb-10 overflow-hidden rounded-xl bg-[#1f2a1d] text-white">
          <div className="flex animate-marquee whitespace-nowrap py-3 text-sm font-medium">
            {[...visaAnnouncements, ...visaAnnouncements].map((item, i) => (
              <span key={`${item.anchor}-${i}`} className="inline-flex items-center px-6">
                <a href={`#${item.anchor}`} className="hover:text-[#85AB8B] transition-colors">
                  {item.text}
                </a>
                <span className="mx-6 text-white/40">|</span>
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {visaProducts.map((product) => (
            <Link
              key={product.id}
              id={product.id}
              to="/build-your-package"
              className="card-equal flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border border-[#E5E5E5] bg-[#FAFAFA] flex items-center justify-center shrink-0">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#1f2a1d] mt-4 group-hover:text-[#336443] transition-colors leading-snug">
                {product.title}
              </h3>
              <p className="text-sm text-[#336443] font-semibold mt-2">
                <span className="text-[10px] font-normal text-[#4b5b47] uppercase tracking-wide">From</span>{' '}
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
