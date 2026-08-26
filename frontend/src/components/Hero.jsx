import React, { useState } from "react";
import { useContactModal } from "../context/ContactContext.jsx";
import { submitContactForm } from "../api/contact.js";
export default function Hero() {
  const { openContact } = useContactModal();
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="top" className="relative bg-navy text-cream overflow-hidden">
      {/* ================= HERO CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* ================= HERO IMAGE ================= */}
        {/* <div
          className="
            order-1 lg:order-2
            relative
            w-full
            h-[240px]
            sm:h-[300px]
            md:h-[380px]
            lg:h-screen
            lg:min-h-screen
          "
        >
          <img
            src="/images/hero-tower3.png"
            alt="11:11 Business Park tower at dusk, Bandra West, Mumbai"
            className="absolute inset-0 w-full  object-cover object-center"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-navy/80
              via-transparent
              to-transparent
              lg:bg-gradient-to-l
              lg:from-transparent
              lg:via-transparent
              lg:to-navy/10
            "
          />
        </div> */}
        {/* ================= HERO IMAGE ================= */}
        <div
          className="
    order-1 lg:order-2
    relative
    w-full
    h-[240px]
    sm:h-[300px]
    md:h-[380px]
    lg:h-screen
    lg:min-h-screen
  "
        >
          <img
            src="/images/hero-tower3.png"
            alt="11:11 Business Park tower at dusk, Bandra West, Mumbai"
            className="
      absolute inset-0
      w-full
      h-full
      object-cover
      object-center
    "
          />

          <div
            className="
      absolute inset-0
      bg-gradient-to-t
      from-navy/80
      via-transparent
      to-transparent
      lg:bg-gradient-to-l
      lg:from-transparent
      lg:via-transparent
      lg:to-navy/10
    "
          />
        </div>
        {/* ================= FORM ================= */}
        <div
          className="
            order-2 lg:order-1
            flex flex-col justify-center
            px-5
            sm:px-8
            md:px-10
            lg:px-12
            xl:px-14
            py-10
            sm:py-12
            md:py-14
            lg:py-0
          "
        >
          <div
            className="
              corner-frame
              bg-navy-800/60
              px-5
              sm:px-7
              md:px-8
              lg:px-9
              xl:px-10
              py-7
              sm:py-8
              md:py-9
              lg:py-10
              max-w-md
              w-full
              mx-auto
              lg:mx-0
            "
          >
            <p
              className="
                font-serif
                text-xl
                sm:text-2xl
                md:text-2xl
                leading-snug
                mb-6
                sm:mb-7
              "
            >
              For businesses that understand the value of presence.
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const mobile = e.target.mobile.value;

                if (!/^[0-9]{10}$/.test(mobile)) {
                  alert("Please enter a valid 10-digit mobile number.");
                  return;
                }

                const formData = {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  phone: mobile,
                  message: "Enquiry from Hero section",
                  sourcePage: "Hero",
                };

                try {
                  await submitContactForm(formData);
                  e.target.reset();
                  setSubmitted(true);
                } catch (err) {
                  console.error("Submit failed:", err);

                  alert(
                    err.message || "Something went wrong. Please try again.",
                  );
                }
              }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-[10px] sm:text-xs tracking-widest uppercase text-gold mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    bg-transparent
                    border border-cream/30
                    focus:border-gold
                    outline-none
                    px-3 sm:px-4
                    py-2.5 sm:py-3
                    text-xs sm:text-sm
                    text-cream
                    placeholder:text-cream/50
                    transition-colors
                  "
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-[10px] sm:text-xs tracking-widest uppercase text-gold mb-2">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter 10-digit mobile number"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                  className="
                    w-full
                    bg-transparent
                    border border-cream/30
                    focus:border-gold
                    outline-none
                    px-3 sm:px-4
                    py-2.5 sm:py-3
                    text-xs sm:text-sm
                    text-cream
                    placeholder:text-cream/50
                    transition-colors
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] sm:text-xs tracking-widest uppercase text-gold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    bg-transparent
                    border border-cream/30
                    focus:border-gold
                    outline-none
                    px-3 sm:px-4
                    py-2.5 sm:py-3
                    text-xs sm:text-sm
                    text-cream
                    placeholder:text-cream/50
                    transition-colors
                  "
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                  w-full
                  sm:w-[90%]
                  md:w-[85%]
                  lg:w-[82%]
                  mx-auto
                  bg-[#C9A24B]
                  hover:bg-gold-light
                  text-navy
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  text-[10px]
                  sm:text-xs
                  tracking-widest
                  uppercase
                  font-medium
                  transition-colors
                  shadow-sm
                  hover:shadow-md
                "
              >
                Submit Enquiry
              </button>
            </form>

            {submitted && (
              <p className="mt-4 text-xs sm:text-sm text-green text-center">
                Thank you! Your enquiry has been submitted.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BRANDING ================= */}
      <div
        className="
          relative
          bg-navy
          border-t border-gold/10
          py-7
          sm:py-8
          md:py-9
          lg:py-10
          text-center
          px-5
          sm:px-6
        "
      >
        <h1
          className="
            font-serif
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            tracking-wide
          "
        >
          11:11
        </h1>

        <p
          className="
            font-serif
            text-base
            sm:text-lg
            md:text-xl
            mt-1
            tracking-wide
          "
        >
          BUSINESS PARK
        </p>

        <p
          className="
            font-script
            text-2xl
            sm:text-3xl
            md:text-4xl
            text-gold
            mt-2
          "
        >
          An address of consequence
        </p>
      </div>
    </section>
  );
}
