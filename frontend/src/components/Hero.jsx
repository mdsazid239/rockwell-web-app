import React from "react";
import { useContactModal } from "../context/ContactContext.jsx";

export default function Hero() {
  const { openContact } = useContactModal();

  return (
    <section id="top" className="relative bg-navy text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: address card */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-0">
          <div className="corner-frame bg-navy-800/60 border border-gold/20 px-7 py-10 sm:px-10 sm:py-12 max-w-md">
            <p className="font-serif text-xl sm:text-2xl leading-snug mb-6">
              For businesses that understand the value of presence.
            </p>
            <p className="text-xs sm:text-sm tracking-wide">
              <span className="text-gold font-medium">Address:</span> Linking Road, Bandra West, Mumbai
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openContact("Hero")}
                className="bg-gold hover:bg-gold-light text-navy px-7 py-3 text-xs tracking-widest2 uppercase transition-colors"
              >
                Enquire Now
              </button>
              <a
                href="#overview"
                className="border border-cream/40 hover:border-gold hover:text-gold px-7 py-3 text-xs tracking-widest2 uppercase text-center transition-colors"
              >
                Explore
              </a>
            </div>
          </div>
        </div>

        {/* Right: tower image */}
        <div className="order-1 lg:order-2 relative min-h-[55vh] lg:min-h-screen">
          <img
            src="/images/hero-tower.jpg"
            alt="11:11 Business Park tower at dusk, Bandra West, Mumbai"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-navy/10" />
        </div>
      </div>

      {/* Bottom title band */}
      <div className="relative bg-navy border-t border-gold/10 py-8 sm:py-10 text-center px-6">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-wide">11:11</h1>
        <p className="font-serif text-lg sm:text-xl mt-1 tracking-wide">BUSINESS PARK</p>
        <p className="font-script text-3xl sm:text-4xl text-gold mt-2">An address of consequence.</p>
      </div>
    </section>
  );
}
