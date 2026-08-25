import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import OverviewSections from "./components/OverviewSections.jsx";
import LocationSection from "./components/LocationSection.jsx";
import AmenitiesSection from "./components/AmenitiesSection.jsx";
import FloorPlanSection from "./components/FloorPlanSection.jsx";
import ClosingCTA from "./components/ClosingCTA.jsx";
import Footer from "./components/Footer.jsx";
import ContactModal from "./components/ContactModal.jsx";
import FloatingContactButton from "./components/FloatingContactButton.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <OverviewSections />
        <LocationSection />
        <AmenitiesSection />
        <FloorPlanSection />
        <ClosingCTA />
      </main>
      <Footer />
      <ContactModal />
      <FloatingContactButton />
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <ContactProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsConditions />}
          />
        </Routes>
      </ContactProvider>
    </BrowserRouter>
  );
}