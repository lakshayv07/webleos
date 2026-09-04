"use client";

import React from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <span className="uppercase text-xs tracking-[0.2em] font-semibold text-purple-400 inline-block mb-3 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
        {eyebrow}
      </span>
      <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mt-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
