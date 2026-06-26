import { Link } from 'react-router-dom';
import {
  footerCentralAsia,
  footerServices,
  footerCompany,
  footerSupport,
} from '../data/content';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#1f2a1d] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="brand-logo brand-logo--stack brand-logo--on-dark mb-4">
              <span className="brand-travels">Travels</span>
              <span className="brand-mantra"><em>M</em>antra</span>
            </Link>
            <p className="text-sm font-semibold text-white mb-2">Travels Mantra Holidays (P) Ltd.</p>
            <p className="text-sm leading-relaxed">
              Central Asia travel specialists — tours, visa, hotels, and tailor-made CIS itineraries since 2008.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Central Asia</p>
            <ul className="space-y-2 text-sm">
              {footerCentralAsia.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Services</p>
            <ul className="space-y-2 text-sm">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Support</p>
            <ul className="space-y-2 text-sm mb-6">
              {footerSupport.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:18002121225" className="hover:text-white transition-colors">Call: 1800 2121 225</a></li>
              <li>
                <a href="mailto:Info@stag.travelsmantra.com" className="hover:text-white transition-colors break-all">
                  Info@stag.travelsmantra.com
                </a>
              </li>
              <li className="leading-relaxed">
                911, IndraPrakash Building, 21, Barakhamba Rd, Connaught Place, New Delhi, Delhi 110001
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>© 2026 Travels Mantra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
