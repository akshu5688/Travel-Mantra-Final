import { Link } from 'react-router-dom';
import HotelSearchForm from '../components/hotels/HotelSearchForm';

const HERO_BG =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&fit=crop';

export default function HotelsPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <section className="relative min-h-[calc(100vh-80px)] pt-8 pb-16 px-4 sm:px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2a1d]/75 via-[#1f2a1d]/65 to-[#1f2a1d]/85" aria-hidden />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-center mb-2">
            Find Your Perfect Stay
          </h1>
          <p className="text-center text-white/85 text-sm sm:text-base mb-8">
            Search hotels, resorts & homestays across India and abroad
          </p>

          <HotelSearchForm variant="page" />

          <p className="text-center mt-10">
            <Link to="/" className="text-sm text-white/70 hover:text-white underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
