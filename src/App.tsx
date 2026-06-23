import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToursPage from './pages/ToursPage';
import ExcursionsPage from './pages/ExcursionsPage';
import AboutPage from './pages/AboutPage';
import OffersPage from './pages/OffersPage';
import VisaPage from './pages/VisaPage';
import BuildPackagePage from './pages/BuildPackagePage';
import InsurancePage from './pages/InsurancePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="excursions" element={<ExcursionsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="offers" element={<OffersPage />} />
        <Route path="visa" element={<VisaPage />} />
        <Route path="insurance" element={<InsurancePage />} />
        <Route path="build-package" element={<BuildPackagePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
