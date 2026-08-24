import React from "react";
import { useContactModal } from "../context/ContactContext.jsx";

export default function FloatingContactButton() {
  const { openContact } = useContactModal();

  return (
    <button
      onClick={() => openContact("Floating Button")}
      aria-label="Contact Us"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 bg-gold hover:bg-gold-light text-navy w-14 h-14 sm:w-auto sm:h-auto sm:px-6 sm:py-3.5 rounded-full sm:rounded-none shadow-xl flex items-center justify-center text-xs tracking-widest2 uppercase transition-colors"
    >
      <span className="sm:hidden text-xl">✉</span>
      <span className="hidden sm:inline">Contact Us</span>
    </button>
  );
}
