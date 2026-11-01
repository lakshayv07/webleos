"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Palette, Terminal, ShieldCheck } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const PROCESS_STEPS = [
  {
    num: "01",
    phase: "STEP ONE",
    title: "Initial Chat & Discovery",
    icon: Compass,
    duration: "Day 01 - 02",
    description:
      "You reach out on WhatsApp or email. We ask simple questions about what your business offers, who your customers are, and the design style you prefer.",
    milestones: [
      "Understanding Your Business Goals",
      "Scope & Timeline Agreement",
      "Content & Asset Checklist",
    ],
  },
  {
    num: "02",
    phase: "STEP TWO",
    title: "Custom Design & Preview",
    icon: Palette,
    duration: "Day 03 - 05",
    description:
      "We design a modern visual concept tailored to your brand colors and products. You get a preview link to review the layout on mobile and desktop.",
    milestones: [
      "Custom UI/UX Layout",
      "Color & Typography Scheme",
      "Design Review & Feedback",
    ],
  },
  {
    num: "03",
    phase: "STEP THREE",
    title: "Fast Next.js Development",
    icon: Terminal,
    duration: "Week 02",
    description:
      "We code your website using modern Next.js so it loads in under 1 second. We add smooth 3D interactive motion, lead forms, and direct WhatsApp buttons.",
    milestones: [
      "Sub-Second Mobile Loading",
      "Interactive 3D Motion",
      "Lead Capture & WhatsApp Setup",
    ],
  },
  {
    num: "04",
    phase: "STEP FOUR",
    title: "Testing, SEO & Live Launch",
    icon: ShieldCheck,
    duration: "Week 03",
    description:
      "We send you a private live link to test. After your final approval, we connect your domain, submit your site to Google, and hand over 100% full ownership.",
    milestones: [
      "Google Search Console & SEO",
      "Custom Domain Connection",
      "Full Code & Asset Handoff",
    ],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-surface-alt/60 border-b border-surface-border"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scroll Text Animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-surface-border"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-tertiary font-bold">
                (03) — OUR SIMPLE PROCESS
              </span>
            </div>
            <h2 className="font-heading font-black text-ink text-4xl sm:text-6xl lg:text-7xl tracking-h2 uppercase leading-none">
              FROM FIRST CHAT
              <br />
              <span className="text-secondary">TO LIVE DELIVERY</span>
            </h2>
          </div>

          <p className="font-body text-ink-muted text-base sm:text-lg max-w-md leading-relaxed">
            No confusion, no hidden delays. Here is how easy it is to build your website with Webleos from the moment you message us.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12"
        >
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-secondary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  {/* Top indicator */}
                  <div className="flex items-center justify-between pb-6 border-b border-surface-border">
                    <span className="font-mono text-2xl font-black text-secondary">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-ink group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-block font-mono text-[11px] text-tertiary font-bold uppercase tracking-wider mt-6">
                    {step.phase}
                  </span>

                  <h3 className="font-heading font-bold text-xl text-ink mt-2 mb-4 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="font-body text-ink-muted text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Milestones list */}
                <div className="pt-4 border-t border-surface-border">
                  <span className="font-mono text-[10px] text-ink uppercase tracking-wider block mb-2 font-bold">
                    What We Deliver:
                  </span>
                  <ul className="space-y-1.5">
                    {step.milestones.map((milestone, idx) => (
                      <li
                        key={idx}
                        className="font-mono text-xs text-ink-muted flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-secondary" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dedicated How It Works Link Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg sm:text-xl text-ink">
              Want to see our detailed question-by-question workflow?
            </h4>
            <p className="font-body text-sm text-ink-muted mt-1">
              Read how we gather your requirements, handle feedback revisions, and hand over your live project.
            </p>
          </div>
          <a
            href="/how-it-works"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-secondary/90 transition-colors"
          >
            <span>See Complete Workflow Page</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
