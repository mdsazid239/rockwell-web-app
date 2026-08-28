import React from "react";
import { useContactModal } from "../context/ContactContext.jsx";

export default function ClosingCTA() {
  const { openContact } = useContactModal();

  return (
    <section className="relative bg-navy text-cream overflow-hidden">
      <div className="relative min-h-[70vh] flex flex-col lg:block">
        
        {/* Image */}
        <img
          src="/images/bullinding-n.webp"
          alt="Mumbai skyline at dusk with 11:11 Business Park tower"
          loading="lazy"
          className="relative lg:absolute lg:inset-0 w-full h-[45vh] sm:h-[50vh] lg:h-full object-cover"
        />

        {/* Overlay - Desktop Only */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/20" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-10 sm:py-12 lg:py-20 w-full">
          <div className=" corner-frame px-7 py-10 sm:px-10 sm:py-12 max-w-xl">
            
            <h2 className="font-serif text-2xl sm:text-3xl text-navy leading-snug mb-5">
              In a city filled with addresses, few become references.
            </h2>

            <p className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-3">
              Over time, certain buildings transcend their function. They become points of
              recognition. Markers of credibility. Symbols of enterprise.
            </p>

            <p className="font-script text-2xl sm:text-3xl text-navy mt-4 mb-8 leading-tight">
              11:11 has been envisioned to belong to that rare category.
            </p>

            <button
              onClick={() => openContact("Closing CTA")}
              className="bg-gold hover:bg-gold-light text-navy px-8 py-3.5 text-xs tracking-widest2 uppercase transition-colors"
            >
              Schedule a Site Visit
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}