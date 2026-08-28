// import React from "react";
// const POINTS = [
//   "Prime address on Linking Road",
//   "Minutes from Bandra Station",
//   "Excellent connectivity to BKC",
//   "Easy access to Western Express Highway",
//   "Close proximity to premium hotels and business hubs",
// ];

// export default function LocationSection() {
//   return (
//     <section

//       className=" py-12 sm:py-16 lg:py-20"
//     >
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* ================= LOCATION VIDEO ================= */}
//         <div className="relative w-full h-[220px] xs:h-[260px] sm:h-[380px] md:h-[450px] lg:h-[520px] overflow-hidden mb-8 sm:mb-10 lg:mb-14">

//           <video
//             src="/images/rockwell-vedios.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="metadata"
//             className="w-full h-full object-cover"
//           />

//           {/* Video Overlay */}
//           <div className="absolute inset-0 bg-black/10 pointer-events-none" />
//         </div>

//         {/* ================= CONTENT + MAP ================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

//           {/* ================= CONTENT ================= */}
//           <div className="corner-frame px-5 py-7 sm:px-8 sm:py-9 md:px-10 md:py-11 lg:px-10 lg:py-12"id="location">

//             <p className="text-navy/80 text-sm sm:text-[15px] md:text-base leading-relaxed mb-4" >
//               At the intersection of commerce, culture and connectivity lies
//               one of Mumbai's most influential business districts.
//             </p>

//             <p className="text-navy/80 text-sm sm:text-[15px] md:text-base leading-relaxed mb-4">
//               Positioned on Linking Road, Bandra West, 11:11 offers seamless
//               access to the{" "}
//               <span className="font-semibold text-navy">
//                 western suburbs, BKC, South Mumbai
//               </span>{" "}
//               and the city's key transportation networks.
//             </p>

//             <p className="text-navy/80 text-sm sm:text-[15px] md:text-base leading-relaxed mb-6">
//               Surrounded by premium hospitality, luxury retail, fine dining
//               and established business destinations,{" "}
//               <span className="font-semibold text-navy">
//                 it places your enterprise exactly where opportunity prefers
//                 to be.
//               </span>
//             </p>

//             {/* ================= POINTS ================= */}
//             <ul className="space-y-3 sm:space-y-4">
//               {POINTS.map((point) => (
//                 <li
//                   key={point}
//                   className="flex items-start gap-3 text-navy text-sm sm:text-base leading-relaxed"
//                 >
//                   <span className="text-gold text-lg sm:text-xl leading-5 flex-shrink-0">
//                     ◎
//                   </span>

//                   <span className="font-serif italic">
//                     {point}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ================= LOCATION MAP ================= */}
//           <div className="w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-auto min-h-[280px] overflow-hidden">

//             <img
//               src="/images/location-map.jpg"
//               alt="Map showing 11:11 Business Park location on Linking Road, Bandra West with connectivity to BKC and the airport"
//               className="w-full h-full object-cover sm:object-contain"
//               loading="lazy"
//             />

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section
      className="
        w-full
        py-10
        sm:py-14
        md:py-16
        lg:py-20
        xl:py-24
      "
    >
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12
        "
      >
        {/* ================= LOCATION VIDEO ================= */}
        <div
          className="
            relative
            w-full
            h-[220px]
            sm:h-[320px]
            md:h-[400px]
            lg:h-[500px]
            xl:h-[550px]
            overflow-hidden
            mb-8
            sm:mb-10
            md:mb-12
            lg:mb-14
          "
        >
          <video
            src="/images/rockwell-vedios.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="
              block
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>

        {/* ================= CONTENT + MAP ================= */}
        <div
         id="location"
          className="
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-8
    sm:gap-10
    md:gap-12
    lg:gap-14
    xl:gap-16
    items-stretch
  "
        >
          {/* ================= CONTENT ================= */}
          <div
           
            className="
              corner-frame
              w-full
              px-5
              sm:px-7
              md:px-9
              lg:px-10
              xl:px-12
              py-7
              sm:py-9
              md:py-10
              lg:py-12
              xl:py-14
              order-1
            "
          >
            {/* Paragraph 1 */}
            <p
              className="
                text-navy/80
                text-sm
                sm:text-[15px]
                md:text-base
                leading-relaxed
                mb-4
                sm:mb-5
              "
            >
              At the intersection of commerce, culture and connectivity lies one
              of Mumbai's most influential business districts.
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                text-navy/80
                text-sm
                sm:text-[15px]
                md:text-base
                leading-relaxed
                mb-4
                sm:mb-5
              "
            >
              Positioned on Linking Road, Bandra West, 11:11 offers seamless
              access to the{" "}
              <span className="font-semibold text-navy">
                western suburbs, BKC, South Mumbai
              </span>{" "}
              and the city's key transportation networks.
            </p>

            {/* Paragraph 3 */}
            <p
              className="
                text-navy/80
                text-sm
                sm:text-[15px]
                md:text-base
                leading-relaxed
                mb-6
                sm:mb-7
              "
            >
              Surrounded by premium hospitality, luxury retail, fine dining and
              established business destinations,{" "}
              <span className="font-semibold text-navy">
                it places your enterprise exactly where opportunity prefers to
                be.
              </span>
            </p>
            <ul
              className="
                space-y-3
                sm:space-y-4
              "
            >
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="
                    flex
                    items-start
                    gap-3
                    text-navy
                    text-sm
                    sm:text-base
                    leading-relaxed
                  "
                >
                  <span
                    className="
                      text-gold
                      text-lg
                      sm:text-xl
                      leading-5
                      flex-shrink-0
                    "
                  >
                    ◎
                  </span>

                  <span className="font-serif italic">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="
              w-full
              h-[280px]
              sm:h-[350px]
              md:h-[420px]
              lg:h-auto
              lg:min-h-[500px]
              xl:min-h-[550px]
              overflow-hidden
              order-2
            "
          >
            <img
              src="/images/location-map.jpg"
              alt="Map showing 11:11 Business Park location on Linking Road, Bandra West with connectivity to BKC and the airport"
              loading="lazy"
              decoding="async"
              className="
                block
                w-full
                h-full
                object-cover
                object-center
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
