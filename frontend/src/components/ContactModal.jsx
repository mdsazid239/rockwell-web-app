import React, { useEffect, useRef, useState } from "react";
import { useContactModal } from "../context/ContactContext.jsx";
import { submitContactForm } from "../api/contact.js";

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function ContactModal() {
  const { isOpen, closeContact, sourcePage } = useContactModal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  // Lock body scroll + focus first field while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    closeContact();
    setTimeout(() => {
      setForm(initialForm);
      setErrors({});
      setStatus("idle");
      setStatusMessage("");
    }, 250);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
    if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) errs.phone = "Enter a valid phone number.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await submitContactForm({ ...form, sourcePage });
      setStatus("success");
      setStatusMessage(res.message || "Thank you. Our team will get in touch with you shortly.");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setStatusMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close contact form"
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm cursor-default"
        onClick={handleClose}
      />

      {/* Modal card */}
      <div
        ref={dialogRef}
        className="relative bg-cream w-full max-w-lg max-h-[90vh] overflow-y-auto corner-frame shadow-2xl animate-[fadeIn_.2s_ease-out]"
      >
        <div className="px-7 py-9 sm:px-10 sm:py-11">
          <button
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-navy/60 hover:text-navy w-8 h-8 flex items-center justify-center text-xl"
          >
            ×
          </button>

          <p className="text-gold text-xs tracking-widest2 uppercase mb-2">11:11 Business Park</p>
          <h2 id="contact-modal-title" className="font-serif text-2xl sm:text-3xl text-navy mb-2">
            Contact Us
          </h2>
          <p className="text-navy/70 text-sm mb-7">
            Share your details and our team will reach out to you shortly.
          </p>

          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="text-navy font-serif text-xl mb-3">Thank you.</p>
              <p className="text-navy/80 text-sm mb-8">{statusMessage}</p>
              <button
                onClick={handleClose}
                className="bg-gold hover:bg-gold-light text-navy px-7 py-3 text-xs tracking-widest2 uppercase transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
                  Full Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
                  placeholder="you@company.com"
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
                  placeholder="+91 98765 43210"
                />
                {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
                  Message <span className="normal-case text-navy/40">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirement..."
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">{statusMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-navy px-7 py-3.5 text-xs tracking-widest2 uppercase transition-colors"
              >
                {status === "loading" ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
