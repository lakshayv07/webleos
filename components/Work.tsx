"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, Layers } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { WA_MESSAGES, WHATSAPP_BASE } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

interface Project {
  id: string;
  year: string;
  client: string;
  title: string;
  scope: string[];
  recognition: string;
  gradient: string;
  summary: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    year: "2024",
    client: "Aura Neurologics",
    title: "Interactive 3D Website & High-Conversion Brand Platform",
    scope: ["3D WebGL Motion", "Custom UI/UX", "Next.js Engine"],
    recognition: "Awwwards Nominee",
    gradient: "from-[#226192] to-[#18476B]",
    summary:
      "Built a modern 3D interactive website communicating cutting-edge authority, resulting in a 240% increase in investor and client inquiries.",
  },
  {
    id: "02",
    year: "2024",
    client: "Chronos Horology",
    title: "Luxury Watch Showcase & Interactive Product Experience",
    scope: ["3D Model Rendering", "Fast Loading", "Mobile Responsive"],
    recognition: "FWA Honorable Mention",
    gradient: "from-[#EF8557] to-[#D86B3E]",
    summary:
      "Crafted a luxury showcase for high-end timepiece collectors with buttery smooth mobile scroll and instant photo loading.",
  },
  {
    id: "03",
    year: "2024",
    client: "Vault Capital",
    title: "Fast FinTech Landing Page & Customer Dashboard",
    scope: ["Google Speed 100", "Local & Global SEO", "Lead Forms"],
    recognition: "CSS Design Winner",
    gradient: "from-[#1C1917] to-[#226192]",
    summary:
      "Developed an ultra-fast financial website with sub-second page loads, bank-grade SSL security, and high conversion rates.",
  },
  {
    id: "04",
    year: "2024",
    client: "Kinetic Robotics",
    title: "Tech Hardware Showcase & WhatsApp Lead Integration",
    scope: ["Smooth Motion", "Modern Branding", "WhatsApp Leads"],
    recognition: "Studio Best in Category",
    gradient: "from-[#226192] to-[#EF8557]",
    summary:
      "Created an interactive digital showroom with smooth animations and direct WhatsApp buttons for fast customer inquiries.",
  },
];

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(PROJECTS[0]);

  return (
    <section
      id="work"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-primary border-b border-surface-border"
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
                (04) — OUR WORK &amp; RESULTS
              </span>
            </div>
            <h2 className="font-heading font-black text-ink text-4xl sm:text-6xl lg:text-7xl tracking-h2 uppercase leading-none">
              RECENT WEBSITES &amp;
              <br />
              <span className="text-secondary">CLIENT PROJECTS</span>
            </h2>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              BUILT FOR REAL RESULTS
            </span>
            <p className="font-body text-ink text-base max-w-sm">
              Custom designs, sub-second speed, and high-conversion layouts that turn visitors into paying clients.
            </p>
          </div>
        </motion.div>

        {/* Minimalist Interactive Projects Table with Scroll Animations */}
        <div className="divide-y divide-surface-border mt-4">
          {PROJECTS.map((project, index) => {
            const isHovered = hoveredProject?.id === project.id;

            return (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project)}
                className={`group py-8 sm:py-12 transition-all duration-300 cursor-pointer ${
                  isHovered ? "bg-surface-alt/50 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                  {/* Client & Number */}
                  <div className="lg:col-span-4 flex items-center gap-6">
                    <span className="font-mono text-xs text-ink-muted">
                      [{project.id}]
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-ink group-hover:text-secondary transition-colors">
                        {project.client}
                      </h3>
                      <span className="font-mono text-[11px] text-ink-muted uppercase">
                        {project.year} · Case Study
                      </span>
                    </div>
                  </div>

                  {/* Title & Scope */}
                  <div className="lg:col-span-5">
                    <p className="font-body text-ink-muted text-sm sm:text-base leading-snug group-hover:text-ink transition-colors">
                      {project.title}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.scope.map((tag, i) => (
                        <span
                          key={i}
                          className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-surface-card border border-surface-border text-ink-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recognition & CTA */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center gap-4">
                    <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-tertiary">
                      <Award className="w-3.5 h-3.5" />
                      <span className="truncate max-w-[150px]">{project.recognition}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-surface-border bg-white flex items-center justify-center text-ink group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Expanded Context on Mobile or Hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-surface-border/40 text-xs font-body text-ink-muted flex flex-col sm:flex-row justify-between sm:items-center gap-2"
                  >
                    <p className="max-w-2xl">{project.summary}</p>
                    <span className="font-mono text-secondary font-bold shrink-0">
                      View Architecture Breakdown →
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Agency Note with Scroll Animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 p-8 rounded-2xl bg-surface-card border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-ink">
                Have an idea or custom requirement for your business?
              </h4>
              <p className="font-body text-xs sm:text-sm text-ink-muted">
                Message us on WhatsApp. We can discuss your project and show you live demos of similar work.
              </p>
            </div>
          </div>

          <MagneticButton
            id="rfp-inquiry-button"
            href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.contact}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="px-6 py-3 rounded-full bg-ink text-primary font-heading font-semibold text-xs uppercase tracking-wider hover:bg-secondary transition-colors">
              Chat With Us on WhatsApp
            </div>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
