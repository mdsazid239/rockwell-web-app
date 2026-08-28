import React from "react";
import SplitSection from "./SplitSection.jsx";
const sections = [
  {
    heading: "Some buildings are seen. A few are recognised.",
    body: [
      "11:11 rises above convention with a striking architectural expression that commands attention without demanding it.",
      "Defined by clean lines, dramatic verticality and a sculpted glass façade, the tower establishes a strong visual identity on one of Mumbai's most coveted commercial corridors.",
      "Every element has been considered to create a workplace that reflects confidence, credibility and enduring relevance.",
    ],
    tagline:
      "Because exceptional businesses deserve more than space. They deserve presence.",
    image: "/images/home-t.png",
    imageAlt: "11:11 Business Park tower exterior in daylight",
    imageSide: "left",
  },
  {
    heading: "Credibility begins at the entrance.",
    body: [
      "The arrival experience at 11:11 has been designed with the same precision as the tower itself. A refined entrance sequence, elegant drop-off experience and thoughtfully detailed common areas create a sense of confidence from the very first moment.",
    ],
    tagline: "Because reputation is often established before the first meeting begins.",
    image: "/images/bullinding-M.png",
    imageAlt: "11:11 Business Park grand lobby entrance",
    imageSide: "right",
  },
  {
    heading: "The best decisions need room to think.",
    body: [
      "Generous floor plates, abundant natural light and efficient planning create workplaces that feel open, adaptable and future-ready.",
      "Designed to accommodate evolving business needs, the spaces encourage clarity, productivity and seamless collaboration.",
    ],
    tagline: "Because great workplaces give great ideas room to grow.",
    image: "/images/bullinding-F.png",
    imageAlt: "11:11 Business Park boardroom with skyline view",
    imageSide: "left",
  },
  {
    heading: "Efficiency is the most underrated luxury.",
    body: [
      "Behind the tower's striking presence lies infrastructure engineered for reliability. From advanced building systems and security protocols to seamless vertical mobility and operational efficiency, every detail works towards one objective:",
    ],
    tagline: "Allowing businesses to operate without interruption.",
    image: "/images/bullinding-t.png",
    imageAlt: "11:11 Business Park atrium and reception",
    imageSide: "right",
  },
];
export default function OverviewSections() {
  return (
    <div id="overview">
      {sections.map((section, index) => (
        <div key={section.heading} className={index % 2 === 1 ? "" : ""}>
          <SplitSection {...section} />
        </div>
      ))}
    </div>
  );
}

