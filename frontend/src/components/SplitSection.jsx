import React from "react";

/**
 * Recreates the brochure's recurring two-column spread:
 * a cream quote card with a heading + body copy + script tagline,
 * paired with a full-bleed photograph. `imageSide` flips which
 * column the photo sits on, matching the brochure's alternating layout.
 */
export default function SplitSection({
  id,
  heading,
  body,
  tagline,
  bullets,
  image,
  imageAlt,
  imageSide = "right",
  dark = false,
}) {
  const cardOrder = imageSide === "right" ? "lg:order-1" : "lg:order-2";
  const imageOrder = imageSide === "right" ? "lg:order-2" : "lg:order-1";

  return (
    <section
      id={id}
      className={`${dark ? "bg-navy" : "bg-white"} py-14 sm:py-20`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center px-6 sm:px-10 lg:px-0">
        {/* Text card */}
        <div className={`${cardOrder} lg:px-14`}>
          <div className="corner-frame bg-cream px-7 py-10 sm:px-10 sm:py-12 max-w-xl mx-auto lg:mx-0">
            <h2 className="font-serif text-2xl sm:text-3xl text-navy leading-snug mb-5">
              {heading}
            </h2>
            {body.map((p, i) => (
              <p key={i} className="text-navy/80 text-sm sm:text-[15px] leading-relaxed mb-3">
                {p}
              </p>
            ))}
            {bullets && (
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-5">
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-navy text-sm font-medium">
                    <span className="text-gold mt-1">◆</span>
                    <span className="italic font-serif">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {tagline && (
              <p className="font-script text-2xl sm:text-3xl text-navy mt-6 leading-tight">
                {tagline}
              </p>
            )}
          </div>
        </div>

        {/* Image */}
        <div className={`${imageOrder} relative h-[45vh] sm:h-[55vh] lg:h-[85vh] w-full`}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
