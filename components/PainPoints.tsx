"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingDown, Clock, AlertTriangle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function PainPoints() {
  const points = [
    {
      icon: TrendingDown,
      iconColor: "text-red-400",
      iconBg: "bg-red-500/10 border-red-500/20",
      stat: "₹15,000 – ₹25,000+",
      title: "Web Developers Price You Out",
      body: "Most local developers charge upwards of ₹15,000 for a basic website — before hidden costs, domain setup, or hosting. For a small clinic or shop, that's a month's salary just to exist online.",
    },
    {
      icon: Clock,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/10 border-amber-500/20",
      stat: "3 – 6 Weeks",
      title: "Endless Delays, Zero Clarity",
      body: "Projects drag on for months with no progress updates, unclear deliverables, and constant back-and-forth meetings. Your competitors go live while you're still 'in design'.",
    },
    {
      icon: AlertTriangle,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      stat: "Zero Support",
      title: "Ghosted After Launch",
      body: "Once the payment clears, most developers vanish. Simple content updates cost extra, bugs go unfixed for weeks, and you're left managing something you were never trained to use.",
    },
  ];

  return (
    <section id="pain-points" className="py-20 px-4 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="THE PROBLEM"
        title="Why Small Businesses Stay Invisible Online"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className="h-full flex flex-col justify-between p-8 border-white/[0.08] hover:border-red-500/30">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${point.iconBg}`}>
                      <Icon className={`w-6 h-6 ${point.iconColor}`} />
                    </div>
                    <span className="font-heading font-extrabold text-xl text-white/90 tracking-tight">
                      {point.stat}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {point.title}
                  </h3>

                  <p className="font-body text-gray-400 text-sm leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
