"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, Globe, ArrowUpRight } from "lucide-react";
import { WA_MESSAGES, WHATSAPP_BASE, EMAIL } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

// Dynamically import Three.js ParticleField with SSR disabled
const ParticleField = dynamic(() => import("@/components/three/ParticleField"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden bg-primary"
    >
      {/* 3D WebGL Particle System Background */}
      <ParticleField />

      {/* Subtle Ambient Radial Lighting */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40 blur-[120px] bg-secondary/15"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-30 blur-[100px] bg-tertiary/20"
        aria-hidden="true"
      />

      {/* Top Meta Status Row */}
      <div className="relative z-10 w-full flex flex-wrap items-center justify-between gap-4 border-b border-surface-border/60 pb-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
            AVAILABLE FOR Q4 / Q1 COMMISSIONS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-ink-muted">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-secondary" />
            <span>WORLDWIDE CLIENTS</span>
          </div>
          <span>EST. 2024</span>
          <span>WEBLEOS STUDIO 2.0</span>
        </div>
      </div>

      {/* Main Hero Content: Left-Down Corner Composition */}
      <div className="relative z-10 w-full max-w-7xl mt-auto pt-16 sm:pt-24 pb-4">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-border bg-surface-card/60 backdrop-blur-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-tertiary" />
          <span className="text-xs font-semibold tracking-wider uppercase text-ink">
            Awwwards-Caliber Digital Agency
          </span>
        </motion.div>

        {/* Massive H1 Heading - Arial 900 specification */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-black text-ink text-[clamp(2.75rem,8.5vw,10.5rem)] leading-[0.92] tracking-hero uppercase select-none"
        >
          WE BUILD
          <br />
          <span className="text-secondary">DIGITAL EMPIRES</span>
          <br />
          <span className="text-transparent [-webkit-text-stroke:1.5px_#1C1917] sm:[-webkit-text-stroke:2.5px_#1C1917] hover:text-ink transition-colors duration-500">
            FOR AMBITIOUS
          </span>{" "}
          <span className="text-tertiary">BRANDS.</span>
        </motion.h1>

        {/* Narrative Punchline + CTAs Row */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-body text-ink-muted text-base sm:text-xl lg:text-2xl leading-relaxed max-w-2xl">
              We engineer bespoke 3D web experiences, high-conversion digital architecture, and iconic brand identities that command authority and turn visitors into devoted advocates.
            </p>

            {/* Micro value props */}
            <div className="flex flex-wrap items-center gap-6 mt-6 font-mono text-xs text-ink uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Zero Templates
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                Sub-Second Speed
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                Bespoke 3D Motion
              </span>
            </div>
          </motion.div>

          {/* Interactive Action Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-4 lg:justify-end"
          >
            <MagneticButton
              id="hero-cta-primary"
              href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.hero}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-secondary text-white font-heading font-bold text-sm sm:text-base tracking-wide hover:bg-secondary-dark transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </MagneticButton>

            <MagneticButton
              id="hero-cta-secondary"
              href="#services"
              className="w-full sm:w-auto"
            >
              <div className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-surface-border bg-white/70 backdrop-blur-sm text-ink font-heading font-semibold text-sm sm:text-base tracking-wide hover:border-secondary transition-all duration-300">
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 text-ink-muted" />
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Bottom Ticker / Scroll Prompt */}
      <div className="relative z-10 w-full pt-8 flex items-center justify-between border-t border-surface-border/60">
        <span className="font-mono text-xs text-ink-muted uppercase tracking-widest hidden sm:inline-block">
          SCROLL TO EXPLORE
        </span>
        <div className="flex items-center gap-3">
          <div className="w-12 h-[1px] bg-surface-border" />
          <span className="font-mono text-xs text-ink-muted uppercase">01 / 06</span>
        </div>
      </div>
    </section>
  );
}
