import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import { experienceStats, testimonials } from '../../data/content';

type TestimonialsSectionProps = {
  variant?: 'default' | 'hero';
};

export default function TestimonialsSection({ variant = 'default' }: TestimonialsSectionProps) {
  const isHero = variant === 'hero';

  const content = (
    <>
      <SectionHeader
        label="Reviews & Experience"
        title="What Our Travelers Say"
        subtitle="Real experiences from Indian travelers who explored Central Asia with Travels Mantra."
        dark={isHero}
      />

      <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${isHero ? 'mb-8' : 'mb-10'}`}>
        {experienceStats.map((stat) => (
          <div
            key={stat.label}
            className={
              isHero
                ? 'text-center p-3 sm:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20'
                : 'text-center p-4 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5]'
            }
          >
            <p className={`font-display font-semibold ${isHero ? 'text-xl sm:text-2xl text-[#85AB8B]' : 'text-xl sm:text-2xl text-[#336443]'}`}>
              {stat.value}
            </p>
            <p className={`text-[10px] sm:text-xs mt-1 font-semibold uppercase tracking-wide ${isHero ? 'text-white/75' : 'text-[#4b5b47]'}`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {testimonials.map((t) => (
          <blockquote
            key={t.trip}
            className={
              isHero
                ? 'card-equal p-5 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20'
                : 'card-equal p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA]'
            }
          >
            <div className={`text-sm mb-4 tracking-widest ${isHero ? 'text-[#85AB8B]' : 'text-[#85AB8B]'}`}>★ ★ ★ ★ ★</div>
            <p className={`text-sm leading-relaxed italic flex-1 ${isHero ? 'text-white/90' : 'text-[#4b5b47]'}`}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className={`flex items-center gap-3 mt-5 pt-5 border-t ${isHero ? 'border-white/20' : 'border-[#E5E5E5]'}`}>
              <div className="w-11 h-11 rounded-full bg-[#336443] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                {t.initials}
              </div>
              <div>
                <p className={`font-semibold text-sm ${isHero ? 'text-white' : 'text-[#1f2a1d]'}`}>Verified Traveller</p>
                <p className={`text-xs mt-0.5 ${isHero ? 'text-white/70' : 'text-[#4b5b47]'}`}>{t.trip}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>

      <div className={`text-center ${isHero ? 'mt-6' : 'mt-8'}`}>
        <Link
          to="/about-us#testimonials"
          className={`text-sm font-semibold min-h-[44px] inline-flex items-center ${
            isHero ? 'text-[#85AB8B] hover:text-white' : 'text-[#336443] hover:text-[#1f2a1d]'
          }`}
        >
          Read more traveler stories →
        </Link>
      </div>
    </>
  );

  if (isHero) {
    return <div id="testimonials" className="mt-10 lg:mt-12">{content}</div>;
  }

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{content}</div>
    </section>
  );
}
