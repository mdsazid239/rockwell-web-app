import React from "react";
const AMENITIES = [
  "Grand Arrival Lobby",
  "Dedicated Parking Facilities",
  "High-Speed Elevators",
  "Power Backup",
  "Intelligent Security Systems",
  "Professional Facility Management",
];
export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center px-6 sm:px-10 lg:px-0">
        <div className="relative h-[45vh] sm:h-[55vh] lg:h-[85vh] w-full">
          <img
            src="/images/elevator-lobby.jpg"
            alt="11:11 Business Park elevator lobby"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="lg:px-14">
          <div className="corner-frame  px-7 py-10 sm:px-10 sm:py-12 max-w-xl mx-auto lg:mx-0">
            <h2 className="font-serif text-2xl sm:text-3xl text-navy leading-snug mb-5">
              Designed for what happens between meetings.
            </h2>
            <p className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-3">
              The most valuable workplace amenities are those that quietly improve every day.
            </p>
            <p className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-3">
              At 11:11, carefully considered conveniences and shared spaces contribute to a more
              productive, balanced and efficient working environment.
            </p>
            <p className="text-navy font-semibold text-sm sm:text-[15px] leading-relaxed mb-6">
              Supporting business performance while enhancing the experience of those who drive it.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {AMENITIES.map((a) => (
                <li key={a} className="flex items-start gap-2 font-serif italic text-navy text-sm sm:text-base">
                  <span className="text-gold not-italic mt-0.5">◎</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-0 mt-10 lg:mt-16">
        <div className="h-[35vh] sm:h-[55vh] w-full overflow-hidden">
          <img
            src="/images/lounge-skyline.jpg"
            alt="11:11 Business Park lounge with skyline view"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
