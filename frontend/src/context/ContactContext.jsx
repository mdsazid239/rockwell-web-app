import React, { createContext, useContext, useState, useCallback } from "react";
const ContactContext = createContext(null);
export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sourcePage, setSourcePage] = useState("Homepage");

  const openContact = useCallback((source = "Homepage") => {
    setSourcePage(source);
    setIsOpen(true);
  }, []);

  const closeContact = useCallback(() => setIsOpen(false), []);

  return (
    <ContactContext.Provider value={{ isOpen, sourcePage, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within a ContactProvider");
  }
  return ctx;
}
