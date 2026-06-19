import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import SectionHeader from '../components/SectionHeader';
import { excursions } from '../data/content';

export default function ExcursionsPage() {
  return (
    <>
      <PageBanner
        label="Excursions"
        title="Day tours & local experiences"
        subtitle="Add curated excursions to any Travels Mantra package."
      />
      <section className="py-14 sm:py-20 bg-[#1f2a1d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Experiences" title="Handpicked excursions" subtitle="Private transfers and expert guides included." dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {excursions.map((exc) => (
              <article key={exc.title} className="card-equal p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#2d3a2a] hover:border-[#85AB8B]/40 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#85AB8B]">{exc.region}</span>
                <h3 className="text-card-title font-semibold text-white mt-2">{exc.title}</h3>
                <p className="text-sm text-white/65 mt-2 leading-relaxed flex-1">{exc.desc}</p>
                <Link to="/contact" className="inline-block mt-4 text-sm font-semibold text-[#85AB8B] hover:text-white transition-colors">
                  Enquire Now →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
