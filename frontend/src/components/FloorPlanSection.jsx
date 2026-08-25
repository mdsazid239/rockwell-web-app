import React from "react";
export default function FloorPlanSection() {
  return (
    <section id="floor-plan" className="bg-navy py-14 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center px-6 sm:px-10 lg:px-0">
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[85vh] w-full order-2 lg:order-1">
          <img
            src="/images/tower-full.jpg"
            alt="11:11 Business Park full tower elevation"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 lg:px-14 text-center lg:text-left">
          <div className="corner-frame bg-cream inline-block px-7 py-8 sm:px-10 sm:py-9 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-navy leading-snug">
              Purpose, drawn with precision
            </h2>
            <p className="text-navy/70 text-sm mt-2 italic">Where every corner has a reason</p>
          </div>
          <div className="w-full overflow-hidden border border-gold/20">
            <img
              src="/images/floor-plan.jpg"
              alt="Typical floor plan of 11:11 Business Park"
              loading="lazy"
              className="w-full h-auto bg-white"
            />
          </div>
          <p className="text-cream/60 text-xs mt-3 tracking-wide">
            Typical Floor Plan — 4th–8th, 10th–13th, 15th–18th, 20th &amp; 21st Floors
          </p>
        </div>
      </div>
    </section>
  );
}
