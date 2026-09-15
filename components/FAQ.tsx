"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { fadeInUp } from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What exactly is included in the ₹14,999 website?",
      a: "A single-page, mobile-first website including: hero section with your business headline, services/features section, about section, contact section with WhatsApp click-to-chat, Google Maps embed, and footer. Built on modern web technologies — fast, secure, and fully responsive. Domain connection and hosting guidance included.",
    },
    {
      q: "Are there any hidden charges?",
      a: "None. ₹14,999 is the complete price for your website. You'll pay separately for your domain name (typically ₹500–₹800/year from GoDaddy or Hostinger) and hosting (₹1,500–₹2,000/year). We guide you through both and can set it up for you at no extra charge.",
    },
    {
      q: "How do revisions work?",
      a: "You get 2 complete revision rounds after the initial preview. A revision means changing layouts, copy, colors, or sections — not adding entirely new pages or features. Additional revision rounds can be requested at ₹500 each.",
    },
    {
      q: "What do I need to provide?",
      a: "Your business name, contact number, address, a short description of your services, your logo (or we can use a text-based logo temporarily), and any photos you'd like featured. You send everything via WhatsApp — no email threads, no drives.",
    },
    {
      q: "How fast is 72 hours, really?",
      a: "The clock starts once you've submitted all content and payment is confirmed. Most deliveries happen in 48–60 hours. The 72-hour window is our maximum commitment — and we've never missed it.",
    },
    {
      q: "Who owns the website after delivery?",
      a: "You own 100% of it. We hand over all access — hosting, domain, code — upon delivery. No lock-ins, no monthly platform fees to us.",
    },
    {
      q: "Can I upgrade or add pages later?",
      a: "Absolutely. Additional pages start at ₹1,999 each. Our maintenance plan (₹799/month) covers regular updates. We grow with your business.",
    },
    {
      q: "Do you serve businesses outside Kota/Rajasthan?",
      a: "Yes — we serve clients across India. Everything is handled remotely via WhatsApp. Location is no barrier.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-3xl mx-auto">
      <SectionHeader
        eyebrow="FAQ"
        title="Questions We've Already Answered So You Don't Have To Ask"
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-4"
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-surface-border pb-4 pt-2 transition-colors"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left py-3 font-heading font-semibold text-lg text-white hover:text-purple-300 transition-colors gap-4"
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-purple-400"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-gray-300 text-sm md:text-base leading-relaxed pt-1 pb-3 pr-6">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
