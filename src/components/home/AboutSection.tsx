import { Link } from 'react-router-dom';
import SectionHeader from '../SectionHeader';
import { aboutUsIntro, UZBEKISTAN_TOURISM_BOARD_URL } from '../../data/content';

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#E5E5E5] shadow-sm">
            <img
              src="/images/about-travels-mantra.webp"
              alt="Relaxing beach view – Travels Mantra Central Asia tour experts offering certified travel experiences to Uzbekistan, Kazakhstan, and Kyrgyzstan"
              className="img-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeader
              label="About Us"
              title={aboutUsIntro.companyName}
              subtitle={aboutUsIntro.certification}
            />
            {aboutUsIntro.paragraphs.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`text-body text-[#4b5b47] leading-relaxed ${i === 0 ? '-mt-6' : 'mt-4'}`}
              >
                {paragraph}
              </p>
            ))}
            <p className="text-body text-[#4b5b47] leading-relaxed mt-4">
              {aboutUsIntro.tourismBoardText}{' '}
              <a
                href={UZBEKISTAN_TOURISM_BOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#336443] hover:text-[#1f2a1d] underline underline-offset-2"
              >
                {aboutUsIntro.tourismBoardLabel}
              </a>
              .
            </p>
            <Link to="/about-us" className="btn-primary inline-flex mt-6 min-h-[44px]">
              Know More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
