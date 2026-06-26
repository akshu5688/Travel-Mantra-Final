import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { navLinks } from '../data/content';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navSolid, setNavSolid] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (!isHome) {
      setNavSolid(true);
      return;
    }
    const onScroll = () => setNavSolid(window.scrollY > 48);
    setNavSolid(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome, location.pathname]);

  const closeMenu = () => setMenuOpen(false);
  const showSolidNav = !isHome || navSolid;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidNav ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]/60' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <Link
            to="/"
            className={`brand-logo brand-logo--stack shrink-0 ${showSolidNav ? '' : 'brand-logo--on-dark'}`}
            aria-label="Travels Mantra Home"
          >
            <span className="brand-travels">Travels</span>
            <span className="brand-mantra"><em>M</em>antra</span>
          </Link>

          <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center max-w-5xl mx-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[13px] px-2 py-1.5 whitespace-nowrap transition-colors ${
                  location.pathname === link.href || location.pathname.startsWith(`${link.href}/`)
                    ? showSolidNav ? 'text-[#1f2a1d] font-semibold' : 'text-white font-semibold'
                    : showSolidNav ? 'text-[#4b5b47] hover:text-[#1f2a1d]' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/"
            state={{ scrollToEnquiry: true }}
            className={`hidden xl:inline-flex btn-primary !py-2.5 !px-5 !text-sm shrink-0 ${
              !showSolidNav ? '!bg-white !text-[#1f2a1d] hover:!bg-white/90' : ''
            }`}
          >
            Get Free Trip Plan
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className={`xl:hidden relative flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md border transition-all ${
              showSolidNav
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
            <Link
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className={`text-lg font-semibold py-3.5 border-b border-[#E5E5E5] transition-all ${
                location.pathname === link.href ? 'text-[#336443]' : 'text-[#1f2a1d]'
              } ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
              style={{ transitionDelay: menuOpen ? `${100 + i * 50}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" state={{ scrollToEnquiry: true }} onClick={closeMenu} className="btn-primary w-full mt-6 text-center">
            Get Free Trip Plan
          </Link>
        </div>
      </div>

      <Outlet />
      <Footer />
      <Chatbot />
    </div>
  );
}
