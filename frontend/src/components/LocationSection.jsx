import React from "react";

const POINTS = [
  "Prime address on Linking Road",
  "Minutes from Bandra Station",
  "Excellent connectivity to BKC",
  "Easy access to Western Express Highway",
  "Close proximity to premium hotels and business hubs",
];

export default function LocationSection() {
  return (
    <section id="location" className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="h-[35vh] sm:h-[50vh] w-full overflow-hidden mb-10">
          <img
            src="/images/lounge-interior.jpg"
            alt="11:11 Business Park interior lounge with skyline view"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="corner-frame  px-7 py-10 sm:px-10 sm:py-12">
            <p className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-3">
              At the intersection of commerce, culture and connectivity lies one of Mumbai's most
              influential business districts.
            </p>
            <p className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-3">
              Positioned on Linking Road, Bandra West, 11:11 offers seamless access to the{" "}
              <span className="font-semibold text-navy">
                western suburbs, BKC, South Mumbai
              </span>{" "}
              and the city's key transportation networks.
            </p>
            <p className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-6">
              Surrounded by premium hospitality, luxury retail, fine dining and established
              business destinations,{" "}
              <span className="font-semibold text-navy">
                it places your enterprise exactly where opportunity prefers to be.
              </span>
            </p>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 font-serif italic text-navy text-sm sm:text-base">
                  <span className="text-gold not-italic">◎</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="h-[40vh] sm:h-[50vh] lg:h-full w-full overflow-hidden">
            <img
              src="/images/location-map.jpg"
              alt="Map showing 11:11 Business Park location on Linking Road, Bandra West with connectivity to BKC and the airport"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
