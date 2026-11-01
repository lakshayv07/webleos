"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Our customer inquiries doubled within a month after Webleos launched our new website. The speed on mobile phones and clean layout made our business look truly world-class.",
    name: "Siddharth Singhania",
    role: "Managing Director",
    company: "Singhania Logistics",
    location: "Mumbai / Dubai",
    initials: "SS",
  },
  {
    quote:
      "Webleos built us a fast, stunning website that immediately impressed our clients and investors. They delivered right on schedule with zero hassle and total transparency.",
    name: "Marcus Sterling",
    role: "Founding Partner",
    company: "Sterling Ventures",
    location: "London, UK",
    initials: "MS",
  },
  {
    quote:
      "Working with Webleos was completely effortless. They understood what we needed from our first WhatsApp chat and delivered a site that converts visitors into real inquiries.",
    name: "Elena Rostova",
    role: "VP of Product",
    company: "Veloce Technologies",
    location: "Berlin, DE",
    initials: "ER",
  },
  {
    quote:
      "The website loads in under a second and looks incredible on every smartphone. The Webleos team was always available on WhatsApp for quick answers and smooth updates.",
    name: "Claire Vance",
    role: "Chief Growth Officer",
    company: "Lumina Labs",
    location: "Toronto, CA",
    initials: "CV",
  },
];

export default function Testimonials() {
  const marqueeList = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative py-28 sm:py-36 bg-surface-alt/40 border-b border-surface-border overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-surface-border"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-tertiary font-bold">
                (05) — CLIENT REVIEWS
              </span>
            </div>
            <h2 className="font-heading font-black text-ink text-4xl sm:text-6xl lg:text-7xl tracking-h2 uppercase leading-none">
              WHAT FOUNDERS SAY
              <br />
              <span className="text-secondary">ABOUT WORKING WITH US</span>
            </h2>
          </div>

          <p className="font-body text-ink-muted text-base sm:text-lg max-w-md leading-relaxed">
            Real feedback from business owners and founders who trust Webleos to design, build, and scale their online presence.
          </p>
        </motion.div>
      </div>

      {/* Infinite Smooth Testimonial Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee py-4">
          {marqueeList.map((item, index) => (
            <div
              key={index}
              className="w-[340px] sm:w-[440px] shrink-0 p-8 rounded-2xl bg-surface-card border border-surface-border shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header with Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-tertiary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-tertiary" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-secondary opacity-40" />
                </div>

                <p className="font-body text-ink text-sm sm:text-base leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-6 border-t border-surface-border">
                <div className="w-10 h-10 rounded-full bg-secondary text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-ink">
                    {item.name}
                  </h4>
                  <p className="font-mono text-xs text-ink-muted">
                    {item.role}, {item.company} · {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
