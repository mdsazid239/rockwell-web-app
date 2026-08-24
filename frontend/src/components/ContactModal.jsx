// import React, { useEffect, useRef, useState } from "react";
// import { useContactModal } from "../context/ContactContext.jsx";
// import { submitContactForm } from "../api/contact.js";
// const initialForm = { name: "", email: "", phone: "", message: "" };
// export default function ContactModal() {
//   const { isOpen, closeContact, sourcePage } = useContactModal();
//   const [form, setForm] = useState(initialForm);
//   const [errors, setErrors] = useState({});
//   const [status, setStatus] = useState("idle"); // idle | loading | success | error
//   const [statusMessage, setStatusMessage] = useState("");
//   const dialogRef = useRef(null);
//   const firstFieldRef = useRef(null);
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//       setTimeout(() => firstFieldRef.current?.focus(), 50);
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape" && isOpen) handleClose();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [isOpen]);
//   if (!isOpen) return null;
//   const handleClose = () => {
//     closeContact();
//     setTimeout(() => {
//       setForm(initialForm);
//       setErrors({});
//       setStatus("idle");
//       setStatusMessage("");
//     }, 250);
//   };
//   const validate = () => {
//     const errs = {};
//     if (!form.name.trim()) errs.name = "Please enter your name.";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email address.";
//     if (!/^[0-9+\-\s()]{7,20}$/.test(form.phone)) errs.phone = "Enter a valid phone number.";
//     setErrors(errs);
//     return Object.keys(errs).length === 0;
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((f) => ({ ...f, [name]: value }));
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     setStatus("loading");
//     try {
//       const res = await submitContactForm({ ...form, sourcePage });
//       setStatus("success");
//       setStatusMessage(res.message || "Thank you. Our team will get in touch with you shortly.");
//       setForm(initialForm);
//     } catch (err) {
//       setStatus("error");
//       setStatusMessage(err.message || "Something went wrong. Please try again.");
//     }
//   };
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="contact-modal-title"
//     >
//       <button
//         aria-label="Close contact form"
//         className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm cursor-default"
//         onClick={handleClose}
//       />
//       <div
//         ref={dialogRef}
//         className="relative bg-cream w-full max-w-lg max-h-[90vh] overflow-y-auto corner-frame shadow-2xl animate-[fadeIn_.2s_ease-out]"
//       >
//         <div className="px-7 py-9 sm:px-10 sm:py-11">
//           <button
//             onClick={handleClose}
//             aria-label="Close"
//             className="absolute top-4 right-4 text-navy/60 hover:text-navy w-8 h-8 flex items-center justify-center text-xl"
//           >
//             ×
//           </button>
//           <p className="text-gold text-xs tracking-widest2 uppercase mb-2">11:11 Business Park</p>
//           <h2 id="contact-modal-title" className="font-serif text-2xl sm:text-3xl text-navy mb-2">
//             Contact Us
//           </h2>
//           <p className="text-navy/70 text-sm mb-7">
//             Share your details and our team will reach out to you shortly.
//           </p>
//           {status === "success" ? (
//             <div className="py-8 text-center">
//               <p className="text-navy font-serif text-xl mb-3">Thank you.</p>
//               <p className="text-navy/80 text-sm mb-8">{statusMessage}</p>
//               <button
//                 onClick={handleClose}
//                 className="bg-gold hover:bg-gold-light text-navy px-7 py-3 text-xs tracking-widest2 uppercase transition-colors"
//               >
//                 Close
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} noValidate className="space-y-5">
//               <div>
//                 <label htmlFor="name" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
//                   Full Name
//                 </label>
//                 <input
//                   ref={firstFieldRef}
//                   id="name"
//                   name="name"
//                   type="text"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
//                   placeholder="Your full name"
//                 />
//                 {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
//               </div>
//               <div>
//                 <label htmlFor="email" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
//                   placeholder="you@company.com"
//                 />
//                 {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
//               </div>
//               <div>
//                 <label htmlFor="phone" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
//                   placeholder="+91 98765 43210"
//                 />
//                 {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
//               </div>
//               <div>
//                 <label htmlFor="message" className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5">
//                   Message <span className="normal-case text-navy/40">(optional)</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={3}
//                   value={form.message}
//                   onChange={handleChange}
//                   className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors resize-none"
//                   placeholder="Tell us about your requirement..."
//                 />
//               </div>
//               {status === "error" && (
//                 <p className="text-red-600 text-sm">{statusMessage}</p>
//               )}
//               <button
//                 type="submit"
//                 disabled={status === "loading"}
//                 className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-navy px-7 py-3.5 text-xs tracking-widest2 uppercase transition-colors"
//               >
//                 {status === "loading" ? "Sending..." : "Submit Enquiry"}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useRef, useState } from "react";
import { useContactModal } from "../context/ContactContext.jsx";
import { submitContactForm } from "../api/contact.js";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactModal() {
  const { isOpen, closeContact, sourcePage } = useContactModal();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const firstFieldRef = useRef(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        firstFieldRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Close and reset modal
  const handleClose = () => {
    closeContact();

    setTimeout(() => {
      setForm(initialForm);
      setErrors({});
      setStatus("idle");
      setStatusMessage("");
    }, 250);
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    // EXACTLY 10 digits
    if (!form.phone) {
      newErrors.phone = "Please enter your mobile number.";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Mobile number must be exactly 10 digits.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mobile number: only digits + maximum 10 digits
    if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "").slice(0, 10);

      setForm((prev) => ({
        ...prev,
        phone: onlyDigits,
      }));

      // Clear phone error while typing
      if (errors.phone) {
        setErrors((prev) => ({
          ...prev,
          phone: "",
        }));
      }

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");

    try {
      const res = await submitContactForm({
        ...form,
        sourcePage,
      });

      setStatus("success");

      setStatusMessage(
        res.message ||
          "Thank you. Our team will get in touch with you shortly."
      );

      setForm(initialForm);
    } catch (error) {
      setStatus("error");

      setStatusMessage(
        error.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      {/* Background Overlay */}
      <button
        type="button"
        aria-label="Close contact form"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-cream w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="px-7 py-9 sm:px-10 sm:py-11">

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-navy/60 hover:text-navy w-8 h-8 flex items-center justify-center text-xl"
          >
            ×
          </button>

          {/* Heading */}
          <p className="text-gold text-xs tracking-widest uppercase mb-2">
            11:11 Business Park
          </p>

          <h2
            id="contact-modal-title"
            className="font-serif text-2xl sm:text-3xl text-navy mb-2"
          >
            Contact Us
          </h2>

          <p className="text-navy/70 text-sm mb-7">
            Share your details and our team will reach out to you shortly.
          </p>

          {/* Success */}
          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="text-navy font-serif text-xl mb-3">
                Thank you.
              </p>

              <p className="text-navy/80 text-sm mb-8">
                {statusMessage}
              </p>

              <button
                type="button"
                onClick={handleClose}
                className="bg-gold hover:bg-gold-light text-navy px-7 py-3 text-xs tracking-widest uppercase transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5"
                >
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

                {errors.name && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5"
                >
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

                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5"
                >
                  Mobile Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={10}
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-navy/15 focus:border-gold px-4 py-2.5 text-sm text-navy outline-none transition-colors"
                  placeholder="Enter 10 digit mobile number"
                />

                <p className="text-navy/40 text-xs mt-1">
                  {form.phone.length}/10 digits
                </p>

                {errors.phone && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-wide uppercase text-navy/70 mb-1.5"
                >
                  Message{" "}
                  <span className="normal-case text-navy/40">
                    (optional)
                  </span>
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

              {/* Error */}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  {statusMessage}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gold hover:bg-gold-light disabled:opacity-60 text-navy px-7 py-3.5 text-xs tracking-widest uppercase transition-colors"
              >
                {status === "loading"
                  ? "Sending..."
                  : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}