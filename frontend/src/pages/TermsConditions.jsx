import React from "react";
import { Link } from "react-router-dom";
export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-cream text-navy-950">
      <section className="bg-navy-950 text-cream py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl">
            Terms & Conditions
          </h1>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="space-y-10 text-sm md:text-base leading-8">
          <div>
            <h2 className="font-serif text-2xl mb-3">
              1. Introduction
            </h2>
            <p>
              By accessing and using this website, you agree to comply with
              the terms and conditions mentioned on this page. If you do not
              agree with these terms, please discontinue use of the website.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-3">
              2. Website Information
            </h2>
            <p>
              The information provided on this website is intended for general
              informational purposes only. Project details, specifications,
              images, amenities, pricing and other information may be subject
              to change without prior notice.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-3">
              3. Property Information
            </h2>
            <p>
              Images, illustrations, floor plans, specifications and other
              project-related materials displayed on this website are for
              representational purposes only and should not be considered as
              a final representation of the project.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-3">
              4. Enquiries
            </h2>
            <p>
              When you submit an enquiry through this website, you agree that
              the information provided by you may be used to contact you
              regarding the project, property details, availability and
              related information.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-3">
              5. Third-Party Links
            </h2>
            <p>
              This website may contain links or references to third-party
              websites. We are not responsible for the content, privacy
              practices or availability of such external websites.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-3">
              6. Disclaimer
            </h2>
            <p>
              This website is not an official website of the developer. It
              belongs to an authorized channel partner and is intended for
              information purposes only. Visitors are advised to independently
              verify all project-related information before making any
              decision.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-3">
              7. Changes to Terms
            </h2>
            <p>
              These terms and conditions may be updated or modified from time
              to time without prior notice. Continued use of the website
              constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-12">
          <Link
            to="/"
            className="inline-block border border-navy-950 px-7 py-3 text-xs tracking-[0.2em] uppercase hover:bg-navy-950 hover:text-cream transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}