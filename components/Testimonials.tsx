"use client";

import React from "react";
import { Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote:
        "I was paying ₹500/month for a broken Wix site that nobody could find. Nexvora built me a proper website in 3 days and my WhatsApp inquiries have tripled since launch.",
      name: "Rajesh Agarwal",
      business: "Agarwal Medical Store, Kota",
      avatarBg: "bg-purple-600",
      initials: "RA",
    },
    {
      stars: 5,
      quote:
        "I was quoted ₹22,000 by another developer. Same work, done in 72 hours, for ₹4,999. I wish I'd found them sooner. The mobile view is perfect.",
      name: "Priya Sharma",
      business: "Priya Beauty Clinic, Jaipur",
      avatarBg: "bg-pink-600",
      initials: "PS",
    },
    {
      stars: 5,
      quote:
        "Our retail shop had zero online presence. Now customers find us on Google and message directly on WhatsApp. Setup was incredibly smooth — no technical knowledge needed.",
      name: "Amit Verma",
      business: "Verma Electronics, Ajmer",
      avatarBg: "bg-blue-600",
      initials: "AV",
    },
  ];

  // Duplicate list for infinite smooth marquee
  const marqueeList = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          eyebrow="SOCIAL PROOF"
          title="Real Businesses. Real Results."
        />
      </div>

      {/* Marquee Track Container */}
      <div className="w-full overflow-hidden flex relative">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-surface-DEFAULT to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-surface-DEFAULT to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-4">
          {marqueeList.map((rev, index) => (
            <div key={index} className="w-[320px] sm:w-[380px] shrink-0">
              <GlassCard hover={false} className="h-full flex flex-col justify-between p-6 border-purple-500/20">
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: rev.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-body text-gray-300 italic text-sm sm:text-base leading-relaxed mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
                  <div
                    className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow-md`}
                  >
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-white text-sm sm:text-base">
                      {rev.name}
                    </h4>
                    <p className="font-body text-gray-400 text-xs">
                      {rev.business}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
