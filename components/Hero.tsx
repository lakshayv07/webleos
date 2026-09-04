"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Eye, Shield, Clock, RefreshCw, Zap } from "lucide-react";
import { WA_MESSAGES } from "@/lib/constants";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { fadeInUp, scaleIn } from "@/lib/animations";

export default function Hero() {
  // Generate 20 floating particles
  const particles = useMemo(() => {
    const colors = ["bg-purple-500", "bg-orange-500", "bg-blue-500"];
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 3) + 2, // 2px-4px
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      color: colors[i % colors.length],
      duration: Math.random() * 4 + 4, // 4-8s
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center items-center pt-8 pb-16 px-4 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.1, y: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              y: [0, -25, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
            className={`absolute rounded-full ${p.color}`}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center gap-6">
        {/* Trust Badge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 backdrop-blur-md"
        >
          <Zap className="w-4 h-4 text-purple-400 fill-purple-400" />
          <span className="text-xs sm:text-sm font-medium text-purple-300">
            72-Hour Delivery Guarantee — Live or We Refund
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
        >
          Your Business Deserves a Website.{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-orange-400 bg-clip-text text-transparent block mt-1">
            Not a Bank Loan.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="font-body text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Get a sleek, mobile-ready landing page for your business — flat ₹4,999, no surprises, no callbacks. Most clients go live in 72 hours.
        </motion.p>

        {/* CTA Buttons Row */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mt-2"
        >
          <WhatsAppButton
            message={WA_MESSAGES.hero}
            label="Get My Website Now →"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto"
          />
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-500/50 text-purple-300 hover:text-white px-6 py-3.5 font-semibold text-base hover:bg-purple-500/10 transition-all duration-300 w-full sm:w-auto"
          >
            <Eye className="w-5 h-5 text-purple-400" />
            <span>See Our Work</span>
          </a>
        </motion.div>

        {/* Trust Badges Row */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 pt-2"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span>100% Advance — No Surprises</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-purple-400" />
            <span>72-Hour Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-orange-400" />
            <span>2 Free Revisions</span>
          </div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="w-full max-w-3xl mt-8 rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-md shadow-2xl p-3 sm:p-4 animate-float"
        >
          {/* Browser Chrome Header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-surface-card rounded-t-xl border-b border-surface-border">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto bg-surface-DEFAULT/80 border border-white/10 rounded-md px-4 py-1 text-xs text-gray-400 flex items-center gap-2 w-full max-w-sm justify-center font-mono">
              <span className="text-green-400 text-[10px]">🔒 https://</span>mybusiness.com
            </div>
          </div>

          {/* SVG Preview Illustration */}
          <div className="bg-surface-DEFAULT rounded-b-xl p-4 sm:p-6 overflow-hidden">
            <svg
              viewBox="0 0 800 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto rounded-lg"
            >
              {/* Header bar */}
              <rect x="0" y="0" width="800" height="40" rx="4" fill="#13132B" />
              <rect x="20" y="14" width="80" height="12" rx="3" fill="#7C3AED" />
              <rect x="580" y="14" width="50" height="12" rx="3" fill="#6B7280" opacity="0.4" />
              <rect x="645" y="14" width="50" height="12" rx="3" fill="#6B7280" opacity="0.4" />
              <rect x="710" y="10" width="70" height="20" rx="10" fill="#25D366" />

              {/* Hero Banner */}
              <rect x="0" y="50" width="800" height="180" rx="8" fill="url(#hero-grad)" />
              <rect x="200" y="80" width="400" height="24" rx="4" fill="#FFFFFF" opacity="0.9" />
              <rect x="260" y="115" width="280" height="14" rx="3" fill="#A78BFA" opacity="0.8" />
              <rect x="330" y="150" width="140" height="36" rx="18" fill="#F97316" />

              {/* 3 Column Feature Cards */}
              <rect x="0" y="245" width="250" height="120" rx="8" fill="#13132B" stroke="#1E1E3A" strokeWidth="2" />
              <circle cx="35" cy="275" r="14" fill="#7C3AED" opacity="0.3" />
              <rect x="60" y="270" width="150" height="12" rx="3" fill="#FFFFFF" opacity="0.8" />
              <rect x="25" y="300" width="200" height="8" rx="2" fill="#6B7280" opacity="0.5" />
              <rect x="25" y="316" width="160" height="8" rx="2" fill="#6B7280" opacity="0.5" />

              <rect x="275" y="245" width="250" height="120" rx="8" fill="#13132B" stroke="#7C3AED" strokeWidth="2" />
              <circle cx="310" cy="275" r="14" fill="#F97316" opacity="0.3" />
              <rect x="335" y="270" width="150" height="12" rx="3" fill="#FFFFFF" opacity="0.8" />
              <rect x="300" y="300" width="200" height="8" rx="2" fill="#6B7280" opacity="0.5" />
              <rect x="300" y="316" width="160" height="8" rx="2" fill="#6B7280" opacity="0.5" />

              <rect x="550" y="245" width="250" height="120" rx="8" fill="#13132B" stroke="#1E1E3A" strokeWidth="2" />
              <circle cx="585" cy="275" r="14" fill="#25D366" opacity="0.3" />
              <rect x="610" y="270" width="150" height="12" rx="3" fill="#FFFFFF" opacity="0.8" />
              <rect x="575" y="300" width="200" height="8" rx="2" fill="#6B7280" opacity="0.5" />
              <rect x="575" y="316" width="160" height="8" rx="2" fill="#6B7280" opacity="0.5" />

              {/* Bottom CTA section */}
              <rect x="0" y="380" width="800" height="40" rx="6" fill="#7C3AED" opacity="0.2" />
              <rect x="300" y="394" width="200" height="12" rx="3" fill="#FFFFFF" opacity="0.9" />

              <defs>
                <linearGradient id="hero-grad" x1="0" y1="50" x2="800" y2="230" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E1E3A" />
                  <stop offset="0.5" stopColor="#2A1B4E" />
                  <stop offset="1" stopColor="#13132B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
