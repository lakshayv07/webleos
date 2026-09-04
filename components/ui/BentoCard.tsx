"use client";

import React from "react";
import GlassCard from "./GlassCard";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2;
}

export default function BentoCard({
  children,
  className = "",
  span = 1,
}: BentoCardProps) {
  const spanClass = span === 2 ? "col-span-1 md:col-span-2" : "col-span-1";

  return (
    <GlassCard
      hover={true}
      className={`${spanClass} min-h-[200px] flex flex-col justify-between gap-4 ${className}`}
    >
      {children}
    </GlassCard>
  );
}
