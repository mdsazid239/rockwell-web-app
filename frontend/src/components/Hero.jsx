import React, { useState } from "react";
import { useContactModal } from "../context/ContactContext.jsx";
import { submitContactForm } from "../api/contact.js";
export default function Hero() {
  const { openContact } = useContactModal();
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="top" className="relative bg-navy text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-0">
          <div className="corner-frame bg-navy-800/60 border border-gold/20 px-7 py-8 sm:px-10 sm:py-10 max-w-md w-full">
            <p className="font-serif text-xl sm:text-2xl leading-snug mb-6">
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
                  alert(err.message || "Something went wrong. Please try again.");
                }
              }}
              className="space-y-5"
            >
              <div>
                <label className="block text-xs tracking-widest uppercase text-gold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full bg-transparent border border-cream/30 focus:border-gold outline-none px-4 py-3 text-sm text-cream placeholder:text-cream/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gold mb-2">
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
                  className="w-full bg-transparent border border-cream/30 focus:border-gold outline-none px-4 py-3 text-sm text-cream placeholder:text-cream/50 transition-colors"
                />
                {/* <p className="text-[10px] text-cream/50 mt-1">
                  Enter exactly 10 digits
                </p> */}
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-gold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border border-cream/30 focus:border-gold outline-none px-4 py-3 text-sm text-cream placeholder:text-cream/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-navy px-7 py-3.5 text-xs tracking-widest2 uppercase font-medium transition-colors"
              >
                Submit Enquiry
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-sm text-gold text-center">
                Thank you! Your enquiry has been submitted.
              </p>
            )}
          </div>
        </div>
        <div className="order-1 lg:order-2 relative min-h-[55vh] lg:min-h-screen">
          <img
            src="/images/hero-tower3.png"
            alt="11:11 Business Park tower at dusk, Bandra West, Mumbai"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-navy/10" />
        </div>
      </div>
      <div className="relative bg-navy border-t border-gold/10 py-8 sm:py-10 text-center px-6">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-wide">
          11:11
        </h1>
        <p className="font-serif text-lg sm:text-xl mt-1 tracking-wide">
          BUSINESS PARK
        </p>
        <p className="font-script text-3xl sm:text-4xl text-gold mt-2">
          An address of consequence.
        </p>
      </div>
    </section>
  );
}