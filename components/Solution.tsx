"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Search, Headphones, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import BentoCard from "@/components/ui/BentoCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Solution() {
  const landingTags = [
    "Next.js",
    "Mobile-First",
    "72hr Delivery",
    "WhatsApp CTA",
    "2 Revisions",
  ];

  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="THE SOLUTION"
        title="Everything You Need to Win Online — At a Price That Makes Sense"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {/* Large Card (span 2) */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
          <BentoCard span={2} className="p-8 border-purple-500/30 bg-gradient-to-br from-purple-900/20 via-surface-card to-surface-card">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="flex-1">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/10">
                  <Globe className="w-7 h-7 text-purple-400" />
                </div>

                <div className="inline-block bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-300 mb-3">
                  MOST POPULAR • CORE SERVICE
                </div>

                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-white mb-4">
                  Professional Landing Page — <span className="text-purple-400">₹14,999 Flat</span>
                </h3>

                <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mb-6">
                  A conversion-optimized, mobile-first landing page built for real businesses. Fast, beautiful, and designed to turn visitors into customers — not just look pretty. Includes WhatsApp click-to-chat, Google Maps embed, contact section, and full mobile optimization.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {landingTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-purple-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Card 2: Instagram Management */}
        <motion.div variants={fadeInUp}>
          <BentoCard className="p-8 border-pink-500/20">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-500/20 border border-pink-500/30 flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-pink-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Instagram Management — <span className="text-pink-400">₹2,499/mo</span>
              </h3>

              <p className="font-body text-gray-400 text-sm leading-relaxed">
                12 curated posts/month, branded Reels covers, caption copy, hashtag strategy. We handle your feed so you can handle your business.
              </p>
            </div>
          </BentoCard>
        </motion.div>

        {/* Card 3: Visibility Booster Pack */}
        <motion.div variants={fadeInUp}>
          <BentoCard className="p-8 border-blue-500/20">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Visibility Booster Pack — <span className="text-blue-400">₹1,999</span>
              </h3>

              <p className="font-body text-gray-400 text-sm leading-relaxed">
                Google Business Profile setup, local SEO meta tags, WhatsApp Business catalog — everything that makes you findable in your city.
              </p>
            </div>
          </BentoCard>
        </motion.div>

        {/* Card 4: Priority Maintenance */}
        <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
          <BentoCard span={2} className="p-8 border-green-500/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-green-400" />
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Priority Maintenance — <span className="text-green-400">₹1799/mo</span>
                </h3>

                <p className="font-body text-gray-400 text-sm leading-relaxed max-w-2xl">
                  Two content changes/month, uptime monitoring, SSL renewal, and priority WhatsApp support. Your digital presence stays fresh without lifting a finger.
                </p>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
