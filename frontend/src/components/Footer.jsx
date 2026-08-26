import React from "react";
import { Link } from "react-router-dom";
import { useContactModal } from "../context/ContactContext.jsx";

export default function Footer() {
  const { openContact } = useContactModal();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream/80">
      {/* Main Footer */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-10 xl:gap-x-12">
          
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="w-full max-w-sm">
              <p className="font-serif text-2xl sm:text-3xl text-cream tracking-tight mb-4">
                Rockwell Developer
              </p>

              <p className="text-sm sm:text-[15px] leading-7 text-cream/60">
                Business Park an address of consequence, on Linking Road,
                Bandra West, Mumbai.
              </p>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <p className="text-gold text-[11px] font-medium tracking-[0.28em] uppercase mb-5">
              Explore
            </p>

            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="#overview"
                  className="text-cream/65 hover:text-gold transition-colors duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  className="text-cream/65 hover:text-gold transition-colors duration-300"
                >
                  Location
                </a>
              </li>

              <li>
                <a
                  href="#amenities"
                  className="text-cream/65 hover:text-gold transition-colors duration-300"
                >
                  Amenities
                </a>
              </li>

              <li>
                <a
                  href="#floor-plan"
                  className="text-cream/65 hover:text-gold transition-colors duration-300"
                >
                  Floor Plan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-1 lg:col-span-3">
            <p className="text-gold text-[11px] font-medium tracking-[0.28em] uppercase mb-5">
              Contact
            </p>

            <div className="space-y-5 text-sm">
              <div>
                <p className="text-cream/35 text-[10px] uppercase tracking-[0.15em] mb-1.5">
                  Address
                </p>

                <p className="text-cream/65 leading-6">
                  Linking Road, Bandra West,
                  <br />
                  Mumbai
                </p>
              </div>

              <div>
                <p className="text-cream/35 text-[10px] uppercase tracking-[0.15em] mb-1.5">
                  Email
                </p>

                <a
                  href="mailto:sales@rockwelldeveloper.com"
                  className="block text-cream/65 hover:text-gold transition-colors duration-300 break-words"
                >
                  sales@rockwelldeveloper.com
                </a>
              </div>

              <div>
                <p className="text-cream/35 text-[10px] uppercase tracking-[0.15em] mb-1.5">
                  Phone
                </p>

                <a
                  href="tel:+919769966669"
                  className="text-cream/65 hover:text-gold transition-colors duration-300"
                >
                  +91 9769966669
                </a>
              </div>
            </div>
          </div>

          {/* Get In Touch */}
          <div className="sm:col-span-1 lg:col-span-3">
            <p className="text-gold text-[11px] font-medium tracking-[0.28em] uppercase mb-5">
              Get In Touch
            </p>

            <div className="w-full max-w-xs">
              <p className="text-sm sm:text-[15px] leading-7 text-cream/60 mb-6">
                Have a question about 11:11 Business Park? Our team would be
                happy to assist you.
              </p>

              {/* <button
                type="button"
                onClick={() => openContact("Footer")}
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[150px] border border-gold text-gold px-7 py-3.5 text-[11px] tracking-[0.22em] uppercase hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Contact Us
              </button> */}
              <button
  type="button"
  onClick={() => handleContactClick("Navbar")}
  className="
    group

    flex items-center justify-center
    whitespace-nowrap

    /* Mobile */
    w-full
    px-4
    py-2.5
    rounded-full

    /* Tablet */
    sm:w-auto
    sm:px-5
    sm:py-3

    /* Laptop */
    lg:px-6
    lg:py-3

    /* Desktop */
    xl:px-7
    xl:py-3.5

    bg-[#C9A24B]
    hover:bg-[#B8903F]

    text-white

    text-[10px]
    sm:text-[11px]
    lg:text-xs

    font-semibold
    tracking-[0.16em]
    sm:tracking-[0.20em]
    lg:tracking-[0.22em]

    uppercase

    shadow-[0_6px_20px_rgba(0,0,0,0.12)]

    transition-all
    duration-300

    hover:shadow-[0_10px_28px_rgba(0,0,0,0.20)]
    hover:-translate-y-0.5

    active:scale-95
  "
>
  <span>Contact Us</span>

  <span
    className="
      ml-2
      text-base
      leading-none
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
  >
    →
  </span>
</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" border-cream/10">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-7">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center">
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-xs text-cream/40">
              <Link
                to="/terms-and-conditions"
                className="hover:text-gold transition-colors duration-300"
              >
                Terms & Conditions
              </Link>

              <span className="text-cream/15">|</span>

              <Link
                to="/privacy-policy"
                className="hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>

            <p className="text-xs text-cream/35">
              © {year} 11:11 Business Park. All rights reserved.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-cream/5">
            <p className="w-full max-w-4xl mx-auto text-center px-3 sm:px-6 md:px-8 text-[10px] sm:text-[11px] md:text-xs leading-5 sm:leading-6 text-cream/30">
              This website is not an official site and it belongs to the
              authorized channel partner for information purpose only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}