"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, FileText, Code2, Rocket, Clock } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: MessageCircle,
      iconBg: "bg-green-500/20 text-green-400 border-green-500/40",
      title: "Connect on WhatsApp",
      body: "Tap the button, send us a message. No forms, no calls, no waiting rooms. We respond within 2 hours during business hours.",
      time: "~2 Minutes",
    },
    {
      num: "02",
      icon: FileText,
      iconBg: "bg-purple-500/20 text-purple-400 border-purple-500/40",
      title: "Share Your Details",
      body: "Fill our simple 10-question intake form. Tell us your business name, services, contact info, and preferred color. No jargon, no technical knowledge needed.",
      time: "~15 Minutes",
    },
    {
      num: "03",
      icon: Code2,
      iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/40",
      title: "We Build — You Relax",
      body: "Our team builds your mobile-first landing page within 72 hours. You'll get a preview link to review before anything goes live.",
      time: "72 Hours",
    },
    {
      num: "04",
      icon: Rocket,
      iconBg: "bg-orange-500/20 text-orange-400 border-orange-500/40",
      title: "Go Live & Grow",
      body: "Approve, revise if needed (2 rounds on us), and we'll guide you through going live. Your business is now on the internet — permanently.",
      time: "Same Day Launch",
    },
  ];

  return (
    <section id="process" className="py-20 px-4 max-w-7xl mx-auto relative">
      <SectionHeader
        eyebrow="HOW IT WORKS"
        title="From WhatsApp to Live Website in 72 Hours"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 relative"
      >
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-1/4 left-12 right-12 h-0.5 border-t-2 border-dashed border-gradient-to-r from-purple-500 to-orange-500 border-purple-500/30 -z-10" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className="h-full flex flex-col justify-between p-6 relative border-purple-500/20">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-3xl text-purple-400/50">
                      {step.num}
                    </span>
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="font-body text-gray-400 text-sm leading-relaxed mb-4">
                    {step.body}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300 font-medium w-fit">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  {step.time}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
