import React from "react";
export default function SplitSection({
  heading,
  body,
  tagline,
  image,
  imageAlt = "",
  imageSide = "right",
}) {
  const imageFirst = imageSide === "left";
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">
          {/* Image */}
          <div className={`w-full ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
            <div className="w-full overflow-hidden group">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto lg:h-[550px] object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
          </div>
          <div className={`w-full ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
            <div className="max-w-xl text-left">
              <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight mb-5 md:mb-6">
                {heading}
              </h2>
              <div className="space-y-4">
                {body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {tagline && (
                <p className="mt-8 text-lg md:text-xl italic leading-relaxed">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}