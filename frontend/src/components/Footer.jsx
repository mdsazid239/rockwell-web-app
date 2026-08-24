import React from "react";
import { useContactModal } from "../context/ContactContext.jsx";

export default function Footer() {
  const { openContact } = useContactModal();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream/80 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-serif text-2xl text-cream mb-3">11:11</p>
          <p className="text-sm leading-relaxed">
            Business Park — an address of consequence, on Linking Road, Bandra West, Mumbai.
          </p>
        </div>

        <div>
          <p className="text-gold text-xs tracking-widest2 uppercase mb-4">Explore</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#overview" className="hover:text-gold transition-colors">Overview</a></li>
            <li><a href="#location" className="hover:text-gold transition-colors">Location</a></li>
            <li><a href="#amenities" className="hover:text-gold transition-colors">Amenities</a></li>
            <li><a href="#floor-plan" className="hover:text-gold transition-colors">Floor Plan</a></li>
          </ul>
        </div>

        <div>
          <p className="text-gold text-xs tracking-widest2 uppercase mb-4">Contact</p>
          <ul className="space-y-2 text-sm">
            <li>Linking Road, Bandra West, Mumbai</li>
            <li>
              <a href="mailto:info@rockwelldeveloper.com" className="hover:text-gold transition-colors">
                info@rockwelldeveloper.com
              </a>
            </li>
            <li>
              <a href="tel:+912200000000" className="hover:text-gold transition-colors">
                +91 22 0000 0000
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gold text-xs tracking-widest2 uppercase mb-4">Get in touch</p>
          <p className="text-sm mb-4">Have a question about 11:11 Business Park?</p>
          <button
            onClick={() => openContact("Footer")}
            className="border border-gold text-gold hover:bg-gold hover:text-navy transition-colors px-6 py-2.5 text-xs tracking-widest2 uppercase"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-12 pt-6 border-t border-cream/10 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
        <p>© {year} Rockwell Developer. All rights reserved.</p>
        <p>This website is for informational purposes and does not constitute an offer.</p>
      </div>
    </footer>
  );
}
