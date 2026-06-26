import { Link, useSearchParams } from 'react-router-dom';
import TripSearchBox from '../components/TripSearchBox';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') === 'hotels' ? 'hotels' : 'packages';

  return (
    <div className="min-h-screen bg-[#1f2a1d]">
      <section className="relative min-h-[calc(100vh-80px)] pt-24 sm:pt-28 pb-16 px-4 sm:px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-central-asia-travels-mantra.webp)' }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2a1d]/80 via-[#1f2a1d]/70 to-[#1f2a1d]/90" aria-hidden />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="hero-search-panel rounded-xl sm:rounded-2xl bg-white border border-[#E5E5E5] shadow-xl p-4 sm:p-5 lg:p-6 overflow-visible">
            <TripSearchBox key={tab} defaultTab={tab} />
          </div>
          <p className="text-center mt-8">
            <Link to="/" className="text-sm text-white/70 hover:text-white underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
