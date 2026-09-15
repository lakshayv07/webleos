"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function RevisionModal() {
  const { activeModal, closeModal } = useModal();

  if (activeModal !== "revision") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 w-full max-w-2xl bg-surface-card border border-surface-border rounded-2xl p-6 md:p-8 max-h-[80vh] overflow-y-auto shadow-2xl text-left"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-6 font-heading border-b border-surface-border pb-4">
          Revision Policy
        </h3>

        <div className="space-y-6 text-gray-300 font-body text-sm md:text-base leading-relaxed">
          <section>
            <h4 className="text-white font-semibold text-lg mb-2">1. What's Included</h4>
            <p>
              Your ₹14,999 package includes 2 free revision rounds after viewing the initial preview link.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">2. What Counts as a Revision</h4>
            <p>
              Each revision round covers tweaking layouts, updating copy/text, adjusting color accents, re-ordering sections, or replacing images. Each revision round covers multiple changes submitted together. Please consolidate all feedback before submitting.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">3. What Doesn't Count as a Revision</h4>
            <p>
              Major feature additions (contact forms, booking systems, galleries) or complete design overhauls are scoped and priced separately.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">4. Round Consumption & Extra Rounds</h4>
            <p>
              A revision round is not consumed until you explicitly request changes after viewing the preview. Additional revision rounds beyond the included 2 rounds can be purchased for ₹500/round.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
