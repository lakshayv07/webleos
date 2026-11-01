"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { SERVICES, WA_MESSAGES, WHATSAPP_BASE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 bg-primary border-b border-surface-border overflow-hidden"
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
                (02) — OUR CORE SERVICES
              </span>
            </div>
            <h2 className="font-heading font-black text-ink text-4xl sm:text-6xl lg:text-7xl tracking-h2 uppercase leading-none">
              BUILT TO GROW
              <br />
              <span className="text-secondary">YOUR BUSINESS</span>
            </h2>
          </div>

          <p className="font-body text-ink-muted text-base sm:text-lg max-w-md leading-relaxed">
            No slow templates or confusing tech jargon. We build fast-loading websites, manage your social media, and get your business found on Google so you attract more real customers.
          </p>
        </motion.div>

        {/* Cohesive 2-Column Services Showcase with Scroll Animations */}
        <div className="divide-y divide-surface-border">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.05 }}
              className="py-12 sm:py-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left Column (5 cols): Number, Title, Tagline, and WhatsApp Button */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block font-mono text-xs text-tertiary font-bold tracking-widest uppercase mb-3 px-2.5 py-1 rounded bg-tertiary/10 border border-tertiary/20">
                      Service {service.number}
                    </span>

                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight">
                      {service.title}
                    </h3>

                    <p className="font-body text-sm sm:text-base text-ink-muted mt-3 leading-relaxed">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Aligned WhatsApp Inquiry Action */}
                  <div className="mt-8 pt-2">
                    <MagneticButton
                      id={`inquire-service-${service.number}`}
                      href={`${WHATSAPP_BASE}?text=${service.waMessage || WA_MESSAGES.services}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-secondary text-white hover:bg-secondary/90 transition-all duration-300 font-heading font-bold text-xs uppercase tracking-wider shadow-sm group">
                        <MessageCircle className="w-4 h-4 text-white" />
                        <span>Inquire on WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </MagneticButton>
                  </div>
                </div>

                {/* Right Column (7 cols): Full Description & Included Deliverables */}
                <div className="lg:col-span-7 bg-surface-card p-6 sm:p-8 lg:p-10 rounded-2xl border border-surface-border shadow-sm hover:border-secondary/40 transition-colors duration-300">
                  <p className="font-body text-ink text-base sm:text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-surface-border">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-secondary block mb-4">
                      Key Deliverables Included:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {service.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-ink/80"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

