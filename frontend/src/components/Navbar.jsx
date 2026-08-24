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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleContactClick = (source) => {
    setMenuOpen(false);
    openContact(source);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-navy shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex items-center gap-2 text-cream shrink-0"
        >
          <span className="font-serif text-2xl tracking-wide">
            11:11
          </span>

          <span className="hidden sm:block text-[10px] tracking-widest uppercase border-l border-gold/50 pl-2 leading-tight">
            Business
            <br />
            Park
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 xl:gap-10 ml-auto">
          <ul className="flex items-center gap-6 xl:gap-9 text-cream text-sm tracking-wide uppercase">
            {LINKS.map((link) => (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => handleLinkClick(link.href)}
                  className="hover:text-gold transition-colors whitespace-nowrap"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <button
            type="button"
            onClick={() => handleContactClick("Navbar")}
            className="border border-gold text-gold hover:bg-gold hover:text-navy transition-colors px-5 xl:px-6 py-2.5 text-xs tracking-widest uppercase whitespace-nowrap"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          className="lg:hidden text-cream w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />

          <span
            className={`block h-[1.5px] w-6 bg-current transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile / Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-cream text-sm tracking-wide uppercase">
          {LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              onClick={() => handleContactClick("Mobile Menu")}
              className="border border-gold text-gold hover:bg-gold hover:text-navy transition-colors px-7 py-2.5 text-xs tracking-widest uppercase"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
