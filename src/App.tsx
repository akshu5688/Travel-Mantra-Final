import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import TourDetailPage from './pages/TourDetailPage';
import ExcursionsPage from './pages/ExcursionsPage';
import AboutPage from './pages/AboutPage';
import OffersPage from './pages/OffersPage';
import VisaPage from './pages/VisaPage';
import BuildPackagePage from './pages/BuildPackagePage';
import InsurancePage from './pages/InsurancePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import HotelsPage from './pages/HotelsPage';
import SearchPage from './pages/SearchPage';
import HotelResultsPage from './pages/HotelResultsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hotels" element={<HotelsPage />} />
        <Route path="hotels/results" element={<HotelResultsPage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="tour-search" element={<Navigate to="/tours" replace />} />
        <Route path="tours/:slug" element={<TourDetailPage />} />
        <Route path="excursions" element={<ExcursionsPage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="about" element={<Navigate to="/about-us" replace />} />
        <Route path="hot-offers" element={<OffersPage />} />
        <Route path="offers" element={<Navigate to="/hot-offers" replace />} />
        <Route path="visa" element={<VisaPage />} />
        <Route path="travel-insurance" element={<InsurancePage />} />
        <Route path="insurance" element={<Navigate to="/travel-insurance" replace />} />
        <Route path="build-your-package" element={<BuildPackagePage />} />
        <Route path="build-package" element={<Navigate to="/build-your-package" replace />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="contact" element={<Navigate to="/contact-us" replace />} />
      </Route>
    </Routes>
  );
}
