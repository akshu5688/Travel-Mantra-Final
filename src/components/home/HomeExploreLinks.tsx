import { Link } from 'react-router-dom';
import { Stamp, Buildings, BookOpen, SlidersHorizontal } from '@phosphor-icons/react';
import SectionHeader from '../SectionHeader';

const exploreLinks = [
  {
    title: 'Visa Assistance',
    desc: 'LOI support, tourist visa guidance, and document checklists for Central Asia.',
    href: '/visa',
    icon: Stamp,
  },
  {
    title: 'About Travels Mantra',
    desc: 'ISO certified Central Asia specialists since 2008 with offices across CIS regions.',
    href: '/about-us',
    icon: Buildings,
  },
  {
    title: 'Travel Guides & Blogs',
    desc: 'Destination guides, visa tips, and checklists for Indian travelers.',
    href: '/blog',
    icon: BookOpen,
  },
  {
    title: 'Build Your Package',
    desc: 'Custom itineraries with flights, hotels, visa, and local support.',
    href: '/build-your-package',
    icon: SlidersHorizontal,
  },
];

export default function HomeExploreLinks() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Explore"
          title="Plan Your Central Asia Trip"
          subtitle="Visa help, custom packages, travel guides, and expert advice — each on its dedicated page."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreLinks.map(({ title, desc, href, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="card-equal p-5 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#85AB8B]/50 hover:shadow-md transition-all group"
            >
              <Icon size={28} weight="duotone" className="text-[#336443] mb-3" />
              <h3 className="font-semibold text-[#1f2a1d] group-hover:text-[#336443] transition-colors">{title}</h3>
              <p className="text-sm text-[#4b5b47] mt-2 flex-1 leading-relaxed">{desc}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-[#336443]">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
