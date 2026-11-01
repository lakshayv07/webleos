"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { BRAND_NAME } from "@/lib/constants";

export default function TermsModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "terms") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="fixed inset-0 bg-ink/60 backdrop-blur-sm"
      />

      {/* Modal Panel */}
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
          Terms of Engagement
        </h3>

        <div className="space-y-6 text-ink-muted font-body text-sm sm:text-base leading-relaxed">
          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">1. Scope of Engagement</h4>
            <p>
              Scope of work is formalized in the mutual statement of work (SOW). All custom architectural development, 3D WebGL motion, and digital brand design adhere strictly to agreed phase milestones.
            </p>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">2. Milestone Execution</h4>
            <p>
              Projects initiate upon confirmation of initial scheduling retainer. Deliverables are approved in progressive sprints to ensure complete creative alignment.
            </p>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">3. Intellectual Property Transfer</h4>
            <p>
              Upon final project deployment and account settlement, 100% intellectual property ownership of the source code, design systems, and custom assets transfers directly to the client.
            </p>
          </section>

          <section>
            <h4 className="text-ink font-bold text-base sm:text-lg mb-1">4. Confidentiality & Non-Disclosure</h4>
            <p>
              {BRAND_NAME} operates under strict confidentiality. Client business details, unreleased products, and proprietary materials are protected by standard mutual NDA protocols.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
