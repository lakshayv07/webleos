"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_BASE } from "@/lib/constants";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  className?: string;
}

export default function WhatsAppButton({
  message,
  label,
  size = "md",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const href = `${WHATSAPP_BASE}?text=${message}`;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2.5",
    lg: "px-8 py-4 text-lg gap-3 font-bold",
  }[size];

  const variantClasses = {
    primary:
      "text-white shadow-lg shadow-green-500/20 hover:shadow-green-500/40 border border-green-400/30",
    ghost:
      "bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10",
  }[variant];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={
        variant === "primary"
          ? { background: "linear-gradient(135deg, #25D366, #128C7E)" }
          : {}
      }
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${sizeClasses} ${variantClasses} ${className}`}
    >
      <MessageCircle className={size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
      <span>{label}</span>
    </motion.a>
  );
}
