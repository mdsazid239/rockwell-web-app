import React, { useEffect, useState } from "react";
import { useContactModal } from "../context/ContactContext.jsx";
const LINKS = [
  { label: "Home", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plan", href: "#floor-plan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { openContact } = useContactModal();

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = (href) => {
    setMenuOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Open contact modal
  const handleContactClick = (source) => {
    setMenuOpen(false);
    openContact(source);
  };

  // Go to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-navy shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          {/* ================= LOGO ================= */}
          <a
            href="#top"
            onClick={handleLogoClick}
            className="flex items-center shrink-0"
            aria-label="Rockwell Developer"
          >
            {/*
              File must actually exist at: public/images/logo-rockwell.jpg
              (public/ is served at the site root by Vite/CRA, so no
              "public" prefix and no import needed here).
              Double check the exact file name + extension on disk.
            */}
            <img
              src="/images/logo-rockwell.jpg"
              alt="Rockwell Developer"
              className="block w-auto h-10 sm:h-11 lg:h-12 object-contain"
            />
          </a>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <ul className="flex items-center gap-6 xl:gap-8">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleLinkClick(link.href)}
                    className="relative text-cream hover:text-gold text-xs xl:text-sm tracking-widest uppercase whitespace-nowrap transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute left-0 -bottom-2 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleContactClick("Navbar")}
              className="border border-gold text-gold hover:bg-gold hover:text-navy px-5 xl:px-6 py-2.5 text-xs tracking-widest uppercase whitespace-nowrap transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 text-cream focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 top-0 w-6 h-[2px] bg-current transition-all duration-300 ${
                  menuOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 w-6 h-[2px] bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 w-6 h-[2px] bg-current transition-all duration-300 ${
                  menuOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden overflow-hidden bg-navy border-t border-white/10 transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-7">
          <ul className="flex flex-col items-center gap-6">
            {LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="text-cream hover:text-gold text-sm tracking-widest uppercase transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}

            <li className="pt-2">
              <button
                type="button"
                onClick={() => handleContactClick("Mobile Menu")}
                className="border border-gold text-gold hover:bg-gold hover:text-navy px-7 py-3 text-xs tracking-widest uppercase transition-all duration-300"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}



