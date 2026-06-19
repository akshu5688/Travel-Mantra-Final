import { useState, useEffect } from 'react';
import { List, X, CaretDown } from '@phosphor-icons/react';
import BoomerangVideoBg from './BoomerangVideoBg';
import ContentSections from './ContentSections';
import Chatbot from './components/Chatbot';
import { navLinks } from './data/content';

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navSolid ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]/60' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <a
            href="#"
            className={`brand-logo brand-logo--stack shrink-0 ${navSolid ? '' : 'brand-logo--on-dark'}`}
            aria-label="Travels Mantra Home"
          >
            <span className="brand-travels">Travels</span>
            <span className="brand-mantra"><em>M</em>antra</span>
          </a>

          <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center max-w-4xl mx-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] px-2 py-1.5 whitespace-nowrap transition-colors ${
                  navSolid ? 'text-[#4b5b47] hover:text-[#1f2a1d]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#hero-enquiry"
            className={`hidden lg:inline-flex btn-primary !py-2.5 !px-5 !text-sm shrink-0 ${
              !navSolid ? '!bg-white !text-[#1f2a1d] hover:!bg-white/90' : ''
            }`}
          >
            Get Free Trip Plan
          </a>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`xl:hidden relative flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md border transition-all ${
              navSolid
                ? 'bg-white border-[#E5E5E5] text-[#1f2a1d]'
                : 'bg-white/20 border-white/30 text-white'
            }`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <List size={20} weight="bold" className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100'}`} />
            <X size={20} weight="bold" className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 -rotate-90 scale-50'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`xl:hidden fixed inset-0 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeMenu}
      >
        <div className="absolute inset-0 bg-[#1f2a1d]/50 backdrop-blur-sm" />
      </div>

      <div
        className={`xl:hidden fixed top-0 right-0 bottom-0 z-40 w-[min(88vw,360px)] bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`text-lg font-semibold text-[#1f2a1d] py-3.5 border-b border-[#E5E5E5] transition-all ${
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a href="#hero-enquiry" onClick={closeMenu} className="btn-primary w-full mt-6 text-center">
            Get Free Trip Plan
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#1f2a1d] flex flex-col">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 z-0 h-full w-full" poster="/images/hero-poster.webp" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#1f2a1d]/55 via-[#1f2a1d]/20 to-[#1f2a1d]/35 sm:to-[#1f2a1d]/70 pointer-events-none" />
        <div className="hero-scroll-fade absolute inset-x-0 bottom-0 z-[2] h-32 sm:h-40 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-1 flex-col min-h-[100dvh] px-3 sm:px-6 pt-20 sm:pt-28 pb-6 sm:pb-8 max-w-7xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-3xl mx-auto">
            <h1 className="text-hero font-semibold text-white drop-shadow-lg">
              Plan Your Dream Holiday with{' '}
              <span className="text-white">
                <span className="hero-brand-accent">T</span>ravels{' '}
                <span className="hero-brand-accent">M</span>antra
              </span>
            </h1>
          </div>

          <div className="w-full max-w-3xl mx-auto shrink-0">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center w-full sm:w-auto sm:mx-auto">
              <a href="#tours" className="btn-secondary w-full sm:w-auto !py-2.5 sm:!py-3 text-sm sm:text-base">Explore Packages</a>
              <a href="#hero-enquiry" className="btn-primary w-full sm:w-auto !py-2.5 sm:!py-3 text-sm sm:text-base !bg-white !text-[#1f2a1d] hover:!bg-white/90">Get Free Trip Plan</a>
            </div>
            <a
              href="#hero-enquiry"
              className="flex flex-col items-center gap-1 mt-5 sm:mt-6 text-white/80 hover:opacity-80 transition-opacity"
              aria-label="Scroll to enquiry form"
            >
              <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
              <CaretDown size={20} weight="bold" className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      <ContentSections />
      <Chatbot />
    </div>
  );
}

export default App;
