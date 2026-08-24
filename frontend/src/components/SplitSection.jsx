import React from "react";
export default function SplitSection({
  heading,
  body,
  tagline,
  image,
  imageAlt,
  imageSide = "right",
}) {
  const imageFirst = imageSide === "left";
  return (
    <section className="w-full py-16 md:py-24 lg:py-28">
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <div
            className={`
              w-full
              ${imageFirst ? "lg:order-1" : "lg:order-2"}
            `}
          >
            <div className="w-full overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
          <div
            className={`
              w-full
              ${imageFirst ? "lg:order-2" : "lg:order-1"}
            `}
          >
            <div className="max-w-xl">
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
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