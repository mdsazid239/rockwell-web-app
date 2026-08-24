import React, { useEffect, useState } from "react";
import { useContactModal } from "../context/ContactContext.jsx";

const LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plan", href: "#floor-plan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openContact } = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-navy shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-cream"
        >
          <span className="font-serif text-2xl tracking-wide">11:11</span>
          <span className="hidden sm:block text-[10px] tracking-widest2 uppercase border-l border-gold/50 pl-2 leading-tight">
            Business
            <br />
            Park
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 text-cream text-sm tracking-wide uppercase">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLinkClick(l.href)}
                className="hover:text-gold transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => openContact("Navbar")}
            className="border border-gold text-gold hover:bg-gold hover:text-navy transition-colors px-6 py-2.5 text-xs tracking-widest2 uppercase"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile / tablet hamburger */}
        <button
          className="lg:hidden text-cream w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-cream text-sm tracking-wide uppercase">
          {LINKS.map((l) => (
            <li key={l.href}>
              <button onClick={() => handleLinkClick(l.href)} className="hover:text-gold">
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                openContact("Mobile Menu");
              }}
              className="border border-gold text-gold hover:bg-gold hover:text-navy transition-colors px-7 py-2.5 text-xs tracking-widest2 uppercase"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
