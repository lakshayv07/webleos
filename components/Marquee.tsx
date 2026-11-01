"use client";

import React from "react";

const WORDS = [
  "BESPOKE ARCHITECTURE",
  "3D INTERACTIVE WEB",
  "BRAND IDENTITY",
  "TECHNICAL SEO",
  "AWARD-WINNING DESIGN",
  "CORE WEB VITALS 99+",
  "GROWTH SYSTEMS",
  "GLOBAL STANDARDS",
];

export default function Marquee() {
  return (
    <div
      className="relative w-full overflow-hidden border-y border-surface-border bg-surface-alt/80 py-5 select-none"
      aria-label="Capabilities Marquee"
    >
      <div className="flex animate-marquee">
        {/* Double array for seamless infinite looping */}
        {[...WORDS, ...WORDS, ...WORDS].map((word, index) => (
          <div
            key={index}
            className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6 shrink-0"
          >
            <span className="font-heading font-black text-sm sm:text-base tracking-widest uppercase text-ink/80 hover:text-secondary transition-colors cursor-default">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-tertiary" />
          </div>
        ))}
      </div>
    </div>
  );
}
