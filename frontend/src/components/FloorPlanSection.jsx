import React from "react";

export default function FloorPlanSection() {
  return (
    <section
      id="floor-plan"
      className="bg-navy py-12 sm:py-16 lg:py-20"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-2
          gap-8 sm:gap-10 lg:gap-12
          items-stretch
        "
      >
        {/* ================= TOWER IMAGE ================= */}
        <div
          className="
            w-full
            aspect-[4/3]
            sm:aspect-[16/10]
            lg:aspect-[4/3]
            overflow-hidden
            order-2 lg:order-1
          "
        >
          <img
            src="/images/tower-full1.png"
            alt="11:11 Business Park full tower elevation"
            loading="lazy"
            className="
              w-full
              h-full
              
              block
            "
          />
        </div>

        {/* ================= FLOOR PLAN IMAGE ================= */}
        <div
          className="
            w-full
            order-1 lg:order-2
            flex flex-col
            justify-center
          "
        >
          <div
            className="
              w-full
              aspect-[4/3]
              sm:aspect-[16/10]
              lg:aspect-[4/3]
              overflow-hidden
              border border-gold/20
              bg-white
            "
          >
            <img
              src="/images/floor-plan.jpg"
              alt="Typical floor plan of 11:11 Business Park"
              loading="lazy"
              className="
                w-full
                h-full
                object-cover
                block
              "
            />
          </div>

          <p
            className="
              mt-3
              text-center
              text-cream/60
              text-[11px] sm:text-xs
              leading-relaxed
              tracking-wide
            "
          >
            Typical Floor Plan — 4th–8th, 10th–13th, 15th–18th,
            20th &amp; 21st Floors
          </p>
        </div>
      </div>
    </section>
  );
}