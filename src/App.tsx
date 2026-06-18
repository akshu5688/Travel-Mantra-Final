import { useState, useEffect } from 'react';
import { LogIn, UserPlus, Play, Menu, X, ChevronDown } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';
import ContentSections from './ContentSections';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#packages', label: 'Destinations' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#offers', label: 'Hot Offers' },
    { href: '#stories', label: 'Stories' },
    { href: '#enquiry', label: 'Contact' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-5 transition-all duration-300 ${
          navSolid ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]/60' : ''
        }`}
      >
        <a
          href="#"
          className={`brand-logo brand-logo--stack shrink-0 ${navSolid ? '' : 'brand-logo--on-dark'}`}
          aria-label="Travel Mantra Home"
        >
          <span className="brand-travels">Travel</span>
          <span className="brand-mantra"><em>M</em>antra</span>
        </a>

        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 transition-colors ${
                i === 0 ? 'font-semibold text-[#1f2a1d]' : 'font-medium text-[#4b5b47] hover:text-[#1f2a1d]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enquiry"
            className="ml-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Plan My Trip
          </a>
        </div>

        <div className={`flex items-center gap-3 sm:gap-6 ${navSolid ? 'text-[#2d3a2a]' : 'text-white'}`}>
          <a href="#enquiry" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <UserPlus className="w-4 h-4" />
            Sign Up
          </a>
          <a href="#login" className="hidden sm:flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity">
            <LogIn className="w-4 h-4" />
            Login
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#1f2a1d] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/40 backdrop-blur-sm" />
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-40 w-[85%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`text-2xl font-semibold text-[#1f2a1d] py-4 border-b border-[#1f2a1d]/10 transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <a href="#enquiry" onClick={closeMenu} className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden">
              <UserPlus className="w-4 h-4" />
              Sign Up
            </a>
            <a href="#login" onClick={closeMenu} className="flex items-center gap-2 text-sm font-medium text-[#2d3a2a] sm:hidden">
              <LogIn className="w-4 h-4" />
              Login
            </a>
            <a
              href="#enquiry"
              onClick={closeMenu}
              className="mt-2 bg-[#1f2a1d] hover:bg-[#2a3827] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors text-center"
            >
              Plan My Trip
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden bg-[#FAFAFA] flex flex-col sm:block">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 z-0 h-full w-full" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1f2a1d]/40 via-[#1f2a1d]/10 via-50% to-transparent pointer-events-none" />
        <div
          className="hero-scroll-fade absolute inset-x-0 bottom-0 z-[2] h-36 sm:h-44 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-1 flex-col items-center text-center pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 sm:flex-none">
          <h1
            className="font-display font-normal leading-tight text-white max-w-5xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span className="block text-[2rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-semibold">
              We organize your trip
            </span>
            <span className="block mt-3 sm:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] font-light text-white/90">
              Discover the most engaging places
            </span>
          </h1>
          <a
            href="#enquiry"
            className="mt-8 sm:mt-10 inline-flex items-center justify-center bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#EA580C] hover:to-[#F97316] text-white text-sm sm:text-base font-semibold px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg shadow-lg transition-all"
          >
            Take a dream trip
          </a>
          <div className="mt-8 sm:mt-10 flex overflow-x-auto gap-2 sm:flex-wrap sm:justify-center sm:overflow-visible pb-1 max-w-2xl scrollbar-hide">
            {['Curated Packages', 'Visa Assistance', 'Handpicked Hotels', '24/7 Travel Support'].map((tag) => (
              <span
                key={tag}
                className="shrink-0 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white/90 border border-white/25 bg-white/15 backdrop-blur-sm px-3 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-4 mt-6 max-w-sm rounded-2xl bg-black/35 backdrop-blur-sm p-4 sm:absolute sm:mx-0 sm:mt-0 sm:left-6 md:left-10 sm:right-auto sm:bottom-8 md:bottom-10 sm:p-5">
          <div className="text-white mb-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            <span className="text-sm font-semibold">Travel Mantra</span>
          </div>
          <p className="text-white/95 text-sm leading-relaxed mb-6 max-w-xs drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
            Travel Mantra unites flights, hotels, visa, and insurance into seamless itineraries — without the hassle of planning every detail yourself.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#enquiry"
              className="bg-white hover:bg-[#F5F2EB] text-[#1f2a1d] text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-lg"
            >
              Plan My Trip
            </a>
            <a
              href="#about"
              className="text-white text-sm font-semibold hover:text-white/80 transition-colors drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]"
            >
              Know More.
            </a>
          </div>
        </div>

        <div className="hidden sm:flex absolute right-6 md:right-10 bottom-8 md:bottom-10 z-10 items-center gap-2 text-white/90 text-sm">
          <a href="#about" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm">
              <Play className="w-3 h-3 fill-white text-white ml-0.5" />
            </span>
            <span className="font-medium">How we plan?</span>
            <span className="text-white/60">1:35</span>
          </a>
        </div>

        <a
          href="#about"
          className="relative z-10 flex flex-col items-center gap-1 mx-auto mt-3 mb-[max(1.25rem,env(safe-area-inset-bottom))] text-white/90 hover:opacity-80 transition-opacity animate-bounce drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:absolute sm:mt-0 sm:mb-0 sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2"
          aria-label="Scroll to learn more"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      <ContentSections />
    </div>
  );
}

export default App;
