"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface FAQItem {
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    q: "What makes Webleos websites different from standard WordPress or templates?",
    a: "We custom-code websites using modern Next.js and React rather than heavy WordPress templates. Your website opens in under a second on mobile phones, includes modern interactive 3D touches, and is designed specifically for your brand to convert visitors into customers.",
  },
  {
    q: "How long does it take to design and launch my website?",
    a: "A high-converting professional landing page is typically completed and delivered live within 7 to 10 days. A full multi-page website takes about 2 to 3 weeks. You get a private staging link to test everything on your phone before launch.",
  },
  {
    q: "Do you help with domain connection and Google Search setup?",
    a: "Yes, completely! If you already have a domain on GoDaddy, Namecheap, Hostinger, or any registrar, we connect it with free SSL security. We also set up Google Search Console and Google Maps (GMB) so customers can find your business online.",
  },
  {
    q: "Who owns the website, code, and graphics once delivered?",
    a: "You retain 100% full legal and intellectual property ownership of your website, design files, and source code. Once the project is delivered, everything belongs to you with zero lock-in or recurring software licensing fees.",
  },
  {
    q: "What are your 4 core services?",
    a: "We offer 4 specialized services: 1) Professional Landing Page for high conversions, 2) Instagram Management & Creatives, 3) Visibility Booster Pack for Google Maps & Local SEO ranking, and 4) Priority Maintenance & Support for fast updates.",
  },
  {
    q: "Can I update text, prices, or photos after the website is live?",
    a: "Yes! With our Priority Maintenance service, you can simply text us on WhatsApp whenever you need to update prices, photos, or text. We handle updates and backups immediately so you can focus on running your business.",
  },
  {
    q: "How do we communicate throughout the project?",
    a: "We keep communication fast and straightforward through a direct WhatsApp chat and email. You get regular preview links, quick answers, and zero complicated corporate bureaucracy.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-primary border-b border-surface-border"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header with Scroll Animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-tertiary font-bold">
              (06) — CLEAR ANSWERS
            </span>
          </div>
          <h2 className="font-heading font-black text-ink text-4xl sm:text-5xl lg:text-6xl tracking-h2 uppercase leading-none">
            FREQUENTLY ASKED
            <br />
            <span className="text-secondary">QUESTIONS</span>
          </h2>
          <p className="font-body text-ink-muted text-base max-w-lg mx-auto mt-4">
            Everything you need to know about our process, delivery timeline, domain setup, and website maintenance.
          </p>
        </motion.div>

        {/* Accordion List with Scroll Animation */}
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.04 }}
                className="py-6 transition-colors"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left font-heading font-bold text-lg sm:text-xl text-ink hover:text-secondary transition-colors gap-6 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-mono text-xs text-tertiary">
                      0{index + 1}
                    </span>
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center shrink-0 text-ink bg-white">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-secondary" />
                    ) : (
                      <Plus className="w-4 h-4 text-ink-muted" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-ink-muted text-base sm:text-lg leading-relaxed pt-4 pb-2 pl-8 pr-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
