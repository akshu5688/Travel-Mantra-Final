import SectionHeader from '../SectionHeader';
import { testimonials } from '../../data/content';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader label="Reviews" title="What Our Travelers Say" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <blockquote key={t.trip} className="card-equal p-6 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA]">
              <div className="text-[#85AB8B] text-sm mb-4 tracking-widest">★ ★ ★ ★ ★</div>
              <p className="text-sm text-[#4b5b47] leading-relaxed italic flex-1">&ldquo;{t.quote}&rdquo;</p>
              <footer className="flex items-center gap-3 mt-5 pt-5 border-t border-[#E5E5E5]">
                <div className="w-12 h-12 rounded-full bg-[#336443] text-white flex items-center justify-center text-sm font-semibold shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#1f2a1d] text-sm">Verified Traveller</p>
                  <p className="text-xs text-[#4b5b47] mt-0.5">{t.trip}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
