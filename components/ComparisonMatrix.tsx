"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { BRAND_NAME, WA_MESSAGES } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export default function ComparisonMatrix() {
  const comparisonRows = [
    { feature: "Total Cost", traditional: "₹25,000 – ₹35,000+", webleos: "₹14,999 Flat ✓" },
    { feature: "Delivery Time", traditional: "3 – 6 Weeks", webleos: "72 Hours ✓" },
    { feature: "Revision Policy", traditional: "Paid Extra", webleos: "2 Free Rounds ✓" },
    { feature: "Mobile Optimized", traditional: "Sometimes", webleos: "Always ✓" },
    { feature: "WhatsApp Click-CTA", traditional: "Rare", webleos: "Built-in ✓" },
    { feature: "Google Maps Embed", traditional: "Extra Cost", webleos: "Included ✓" },
    { feature: "Post-Launch Support", traditional: "Paid / Ghosted", webleos: "Included ✓" },
    { feature: "Hosting Help", traditional: "DIY", webleos: "Guided Setup ✓" },
    { feature: "Hidden Costs", traditional: "Very Common", webleos: "Zero ✓" },
    { feature: "Business Ownership", traditional: "Developer Holds", webleos: "You Own Everything ✓" },
  ];

  return (
    <section id="compare" className="py-20 px-4 max-w-5xl mx-auto">
      <SectionHeader eyebrow="WHY US" title="The Numbers Don't Lie" />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full overflow-x-auto rounded-2xl border border-white/10 bg-surface-card shadow-2xl"
      >
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-surface-border">
              <th className="p-4 sm:p-6 text-gray-400 font-heading text-sm md:text-base font-medium w-1/3">
                Feature
              </th>
              <th className="p-4 sm:p-6 bg-white/[0.02] text-gray-300 font-heading text-sm md:text-base font-semibold w-1/3">
                <div className="flex items-center gap-2">
                  <X className="w-5 h-5 text-red-400" />
                  <span>Traditional Agency</span>
                </div>
              </th>
              <th className="p-4 sm:p-6 bg-purple-900/30 border-l border-r border-purple-500/30 text-white font-heading text-base md:text-lg font-bold w-1/3 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span>{BRAND_NAME}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-gradient-to-r from-purple-500 to-orange-500 text-white px-2.5 py-0.5 rounded-full shadow-sm">
                    <Star className="w-3 h-3 fill-white" />
                    Recommended
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border font-body text-sm md:text-base">
            {comparisonRows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}
              >
                <td className="p-4 sm:p-6 text-gray-300 font-medium">
                  {row.feature}
                </td>
                <td className="p-4 sm:p-6 text-red-400 font-medium bg-white/[0.01]">
                  {row.traditional}
                </td>
                <td className="p-4 sm:p-6 text-green-400 font-semibold bg-purple-900/20 border-l border-r border-purple-500/20">
                  {row.webleos}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="mt-10 text-center">
        <WhatsAppButton
          message={WA_MESSAGES.midpage}
          label="I'm Ready — Get My Website"
          size="lg"
          variant="primary"
        />
      </div>
    </section>
  );
}
