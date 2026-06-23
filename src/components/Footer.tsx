import { Link } from 'react-router-dom';
import { navLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#1f2a1d] text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="brand-logo brand-logo--stack brand-logo--on-dark mb-4">
              <span className="brand-travels">Travels</span>
              <span className="brand-mantra"><em>M</em>antra</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Complete travel packages with flights, hotels, visa, sightseeing, transfers, and insurance.
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Services</p>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/build-package" className="hover:text-white transition-colors">Build Your Package</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#85AB8B] mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:18002121225" className="hover:text-white transition-colors">1800 2121 225</a></li>
              <li><a href="mailto:info@travelsmantra.com" className="hover:text-white transition-colors">info@travelsmantra.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/50">
          <p>© 2026 Travels Mantra Holidays (P) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
