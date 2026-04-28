/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import OurOutline from './components/OurOutline';
import WhyAMAPHIL from './components/WhyAMAPHIL';
import NewsPage from './components/NewsPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import AccreditedProviders from './components/AccreditedProviders';
import AccreditedPhysicians from './components/AccreditedPhysicians';
import DentalPartners from './components/DentalPartners';
import MedicalCoordinators from './components/MedicalCoordinators';
import TestimonialsPage from './components/TestimonialsPage';
import RecognitionsPage from './components/RecognitionsPage';
import ContactPage from './components/ContactPage';
import CareersPage from './components/CareersPage';
import MemberLoginPage from './components/MemberLoginPage';
import StatsSection from './components/StatsSection';
import MobilePromotion from './components/MobilePromotion';
import AffiliatesCarousel from './components/AffiliatesCarousel';
import LatestNews from './components/LatestNews';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop, { ScrollToTopOnRoute } from './components/ScrollToTop';
import WarningModal from './components/WarningModal';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <StatsSection />
      <MobilePromotion />
      <AffiliatesCarousel />
      <LatestNews />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRoute />
      <div className="min-h-screen selection:bg-accent selection:text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-outline" element={<OurOutline />} />
            <Route path="/why-amaphil" element={<WhyAMAPHIL />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/accredited-providers" element={<AccreditedProviders />} />
            <Route path="/accredited-physicians" element={<AccreditedPhysicians />} />
            <Route path="/dental-partners" element={<DentalPartners />} />
            <Route path="/medical-coordinators" element={<MedicalCoordinators />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/recognitions" element={<RecognitionsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/member-login" element={<MemberLoginPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
        <WarningModal />
      </div>
    </Router>
  );
}
