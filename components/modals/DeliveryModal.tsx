"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function DeliveryModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "delivery") return null;

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
          Milestone & Delivery Charter
        </h3>

        <div className="space-y-6 text-ink-muted font-body text-sm sm:text-base leading-relaxed">
          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">1. Milestone Timeline</h4>
            <p>
              Projects follow structured production phases outlined in the project proposal. Each milestone has clear criteria for sign-off before proceeding to engineering.
            </p>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">2. Asset & Content Submission</h4>
            <p>
              Production sprints initiate when initial brand assets, copy requirements, and design briefs are approved by both parties.
            </p>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">3. Staging & QA Validation</h4>
            <p>
              Prior to production DNS cutover, clients receive private staging credentials to review responsive viewports, interactions, and form endpoints.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
