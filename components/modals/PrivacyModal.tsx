"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function PrivacyModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "privacy") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        className="relative z-10 w-full max-w-2xl bg-surface-card border border-surface-border rounded-2xl p-6 sm:p-10 max-h-[85vh] overflow-y-auto shadow-2xl text-left"
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 text-ink-muted hover:text-ink rounded-full hover:bg-primary transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mb-6 font-heading border-b border-surface-border pb-4 uppercase tracking-tight">
          Data Privacy Policy
        </h3>

        <div className="space-y-6 text-ink-muted font-body text-sm sm:text-base leading-relaxed">
          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">1. Official Domain Ownership & Copyright</h4>
            <p>
              Webleos is the exclusive owner and operator of <strong>webleos.com</strong>. All original designs, code, and content are protected under copyright laws.
            </p>
            <div className="mt-2 p-3 rounded-lg bg-primary border border-surface-border text-xs font-mono text-ink">
              © 2024–2026 Webleos (webleos.com). All rights reserved.
            </div>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">2. Zero Third-Party Monetization</h4>
            <p>
              We collect minimal information necessary to deliver agreed web services. We never sell, rent, or distribute client data to advertising networks or third parties.
            </p>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">3. Security & Full Client Ownership</h4>
            <p>
              All communications are encrypted. Upon project completion and final payment, 100% intellectual property rights, source code, and assets are handed over directly to you.
            </p>
          </section>

          <div className="pt-4 border-t border-surface-border flex justify-between items-center text-xs font-mono">
            <a href="/privacy-policy" className="text-secondary font-bold hover:underline">
              Read Full Privacy Policy &rarr;
            </a>
            <span className="text-ink-muted">webleos.com</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
