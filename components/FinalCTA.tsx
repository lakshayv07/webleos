"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, Star, Zap, Flame, MessageSquare } from "lucide-react";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function FinalCTA() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/40 via-surface-card to-surface-card p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl"
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide">
            <Flame className="w-4 h-4 fill-orange-400" />
            <span>First 10 Clients This Month Get Priority Delivery</span>
          </div>

          {/* Headline */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Your Competitors Are Already Online.{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent block mt-1">
              Don't Let Them Win.
            </span>
          </h2>

          {/* Subtext */}
          <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl">
            Join the local businesses across Rajasthan getting professional websites at a price that doesn't require a business loan. One flat price. 72 hours. Zero tech headache.
          </p>

          {/* CTA */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <WhatsAppButton
              message={WA_MESSAGES.final}
              label="Start for ₹4,999 — Chat Now →"
              size="lg"
              variant="primary"
            />
            <p className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-body">
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>Average response time: under 2 hours</span>
            </p>
          </div>

          {/* 3 Micro-Trust Icons */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-400 border-t border-white/10 pt-8 mt-4 w-full">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-purple-400" />
              <span>100% Advance, Zero Risk</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>5.0 Rated by Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span>72hr or Full Refund</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
