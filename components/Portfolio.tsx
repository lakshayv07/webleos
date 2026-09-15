"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Portfolio() {
  const projects = [
    {
      category: "Medical Clinic",
      title: "Dr. Arora's Wellness Clinic",
      description: "Full landing page with appointment WhatsApp CTA + Google Maps embed",
      tags: ["Mobile-First", "WhatsApp CTA", "Google Maps"],
      deliveryTime: "Delivered in 48 Hours",
      accentColor: "#A78BFA",
      gradient: "from-purple-900/40 via-surface-card to-surface-card",
      svgMockup: (
        <svg viewBox="0 0 400 220" fill="none" className="w-full h-auto rounded-lg">
          <rect width="400" height="220" fill="#0D0D1A" rx="6" />
          <rect width="400" height="24" fill="#13132B" />
          <circle cx="15" cy="12" r="3" fill="#EF4444" />
          <circle cx="27" cy="12" r="3" fill="#F59E0B" />
          <circle cx="39" cy="12" r="3" fill="#10B981" />
          <rect x="60" y="7" width="200" height="10" rx="3" fill="#1E1E3A" />
          {/* Clinic Hero */}
          <rect x="20" y="38" width="360" height="70" rx="6" fill="#1E1E3A" />
          <rect x="35" y="52" width="180" height="12" rx="3" fill="#A78BFA" />
          <rect x="35" y="70" width="130" height="8" rx="2" fill="#9CA3AF" />
          <rect x="35" y="84" width="70" height="16" rx="8" fill="#25D366" />
          {/* Services row */}
          <rect x="20" y="118" width="110" height="80" rx="4" fill="#13132B" stroke="#7C3AED" strokeWidth="1" />
          <circle cx="40" cy="138" r="8" fill="#7C3AED" opacity="0.4" />
          <rect x="30" y="152" width="70" height="6" rx="2" fill="#FFFFFF" />
          <rect x="30" y="164" width="90" height="5" rx="2" fill="#6B7280" />

          <rect x="145" y="118" width="110" height="80" rx="4" fill="#13132B" stroke="#1E1E3A" strokeWidth="1" />
          <circle cx="165" cy="138" r="8" fill="#F97316" opacity="0.4" />
          <rect x="155" y="152" width="70" height="6" rx="2" fill="#FFFFFF" />
          <rect x="155" y="164" width="90" height="5" rx="2" fill="#6B7280" />

          <rect x="270" y="118" width="110" height="80" rx="4" fill="#13132B" stroke="#1E1E3A" strokeWidth="1" />
          <circle cx="290" cy="138" r="8" fill="#25D366" opacity="0.4" />
          <rect x="280" y="152" width="70" height="6" rx="2" fill="#FFFFFF" />
          <rect x="280" y="164" width="90" height="5" rx="2" fill="#6B7280" />
        </svg>
      ),
    },
    {
      category: "Retail Shop",
      title: "Urban Apparel Co.",
      description: "Sleek catalog landing page with direct order WhatsApp chat",
      tags: ["Product Showcase", "Fast Load", "WhatsApp Order"],
      deliveryTime: "Delivered in 48 Hours",
      accentColor: "#F97316",
      gradient: "from-orange-900/30 via-surface-card to-surface-card",
      svgMockup: (
        <svg viewBox="0 0 400 220" fill="none" className="w-full h-auto rounded-lg">
          <rect width="400" height="220" fill="#0D0D1A" rx="6" />
          <rect width="400" height="24" fill="#13132B" />
          <circle cx="15" cy="12" r="3" fill="#EF4444" />
          <circle cx="27" cy="12" r="3" fill="#F59E0B" />
          <circle cx="39" cy="12" r="3" fill="#10B981" />
          <rect x="60" y="7" width="200" height="10" rx="3" fill="#1E1E3A" />
          {/* Shop Hero */}
          <rect x="20" y="38" width="360" height="70" rx="6" fill="#1E1E3A" />
          <rect x="35" y="52" width="160" height="12" rx="3" fill="#F97316" />
          <rect x="35" y="70" width="140" height="8" rx="2" fill="#9CA3AF" />
          <rect x="35" y="84" width="70" height="16" rx="8" fill="#25D366" />
          {/* Products grid */}
          <rect x="20" y="118" width="110" height="80" rx="4" fill="#13132B" stroke="#F97316" strokeWidth="1" />
          <rect x="30" y="126" width="90" height="40" rx="3" fill="#F97316" opacity="0.2" />
          <rect x="30" y="172" width="60" height="6" rx="2" fill="#FFFFFF" />

          <rect x="145" y="118" width="110" height="80" rx="4" fill="#13132B" stroke="#1E1E3A" strokeWidth="1" />
          <rect x="155" y="126" width="90" height="40" rx="3" fill="#7C3AED" opacity="0.2" />
          <rect x="155" y="172" width="60" height="6" rx="2" fill="#FFFFFF" />

          <rect x="270" y="118" width="110" height="80" rx="4" fill="#13132B" stroke="#1E1E3A" strokeWidth="1" />
          <rect x="280" y="126" width="90" height="40" rx="3" fill="#25D366" opacity="0.2" />
          <rect x="280" y="172" width="60" height="6" rx="2" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      category: "Home Services",
      title: "QuickFix Plumbing",
      description: "High-converting emergency call & WhatsApp booking landing page",
      tags: ["Local SEO", "1-Click Call", "WhatsApp Booking"],
      deliveryTime: "Delivered in 48 Hours",
      accentColor: "#3B82F6",
      gradient: "from-blue-900/30 via-surface-card to-surface-card",
      svgMockup: (
        <svg viewBox="0 0 400 220" fill="none" className="w-full h-auto rounded-lg">
          <rect width="400" height="220" fill="#0D0D1A" rx="6" />
          <rect width="400" height="24" fill="#13132B" />
          <circle cx="15" cy="12" r="3" fill="#EF4444" />
          <circle cx="27" cy="12" r="3" fill="#F59E0B" />
          <circle cx="39" cy="12" r="3" fill="#10B981" />
          <rect x="60" y="7" width="200" height="10" rx="3" fill="#1E1E3A" />
          {/* Service Hero */}
          <rect x="20" y="38" width="360" height="70" rx="6" fill="#1E1E3A" />
          <rect x="35" y="52" width="190" height="12" rx="3" fill="#3B82F6" />
          <rect x="35" y="70" width="120" height="8" rx="2" fill="#9CA3AF" />
          <rect x="35" y="84" width="70" height="16" rx="8" fill="#25D366" />
          {/* Reviews section */}
          <rect x="20" y="118" width="360" height="80" rx="4" fill="#13132B" stroke="#3B82F6" strokeWidth="1" />
          <circle cx="45" cy="140" r="12" fill="#3B82F6" opacity="0.3" />
          <rect x="70" y="132" width="100" height="8" rx="2" fill="#FFFFFF" />
          <rect x="70" y="146" width="280" height="6" rx="2" fill="#6B7280" />
          <rect x="70" y="158" width="220" height="6" rx="2" fill="#6B7280" />
        </svg>
      ),
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="OUR WORK"
        title="Websites That Convert, Not Just Look Good"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <GlassCard className="h-full flex flex-col justify-between p-6 border-purple-500/20">
              <div>
                {/* SVG Mockup */}
                <div className="mb-6 border border-white/10 rounded-xl overflow-hidden shadow-lg bg-surface-DEFAULT">
                  {project.svgMockup}
                </div>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 mb-3">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-gray-300 border border-white/5 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-surface-border flex items-center gap-1.5 text-purple-400 text-xs font-semibold">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>{project.deliveryTime}</span>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-12 text-center flex flex-col items-center gap-4">
        <p className="text-gray-400 italic text-sm md:text-base font-body">
          Every website shown above was delivered for ₹14,999. Yours is next.
        </p>

        <WhatsAppButton
          message={WA_MESSAGES.midpage}
          label="Start My Project Today"
          size="lg"
          variant="primary"
        />
      </div>
    </section>
  );
}
