"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  const baseClasses =
    "bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 relative overflow-hidden transition-all duration-300";

  const hoverClasses = hover
    ? "group hover:border-purple-500/40 hover:bg-purple-500/[0.05] hover:shadow-xl hover:shadow-purple-500/10"
    : "";

  if (hover) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={`${baseClasses} ${hoverClasses} ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
