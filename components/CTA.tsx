"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Sparkles, Clock } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { WA_MESSAGES, WHATSAPP_BASE, EMAIL } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-secondary text-white overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-tertiary/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-tertiary" />
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            ACCEPTING NEW CLIENTS
          </span>
        </motion.div>

        {/* Massive Headline */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-hero uppercase leading-[0.95] max-w-5xl"
        >
          READY TO GROW
          <br />
          <span className="text-tertiary">YOUR BUSINESS</span>
          <br />
          ONLINE?
        </motion.h2>

        {/* Narrative Subtext */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-body text-primary/80 text-base sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mt-8"
        >
          Partner with Webleos to build a fast, modern website, manage your social media, and get found on Google. We handle everything from design to live delivery.
        </motion.p>

        {/* Action Cluster with Magnetic CTAs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto"
        >
          <MagneticButton
            id="cta-whatsapp-primary"
            href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.final}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <div className="flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-tertiary text-white font-heading font-bold text-base sm:text-lg tracking-wide hover:bg-tertiary-dark transition-all duration-300 shadow-xl group">
              <span>TALK TO US ON WHATSAPP</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </MagneticButton>

          <MagneticButton
            id="cta-email-secondary"
            href={`mailto:${EMAIL}?subject=New%20Project%20Inquiry%20-%20Webleos`}
            className="w-full sm:w-auto"
          >
            <div className="flex items-center justify-center gap-3 px-8 py-5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-heading font-semibold text-base sm:text-lg tracking-wide hover:bg-white/20 transition-all duration-300">
              <Mail className="w-5 h-5" />
              <span>{EMAIL}</span>
            </div>
          </MagneticButton>
        </motion.div>

        {/* Studio Commitment Footnote */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-mono text-primary/70 mt-12 pt-8 border-t border-white/15 w-full"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-tertiary" />
            <span>QUICK RESPONSE UNDER 2 HOURS</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span>100% OWNERSHIP OF YOUR WEBSITE</span>
          <span className="hidden sm:inline">·</span>
          <span>DIRECT WHATSAPP SUPPORT</span>
        </motion.div>
      </div>
    </section>
  );
}
