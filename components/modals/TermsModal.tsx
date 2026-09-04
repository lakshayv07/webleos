"use client";

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

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
          Terms of Service
        </h3>

        <div className="space-y-6 text-gray-300 font-body text-sm md:text-base leading-relaxed">
          <section>
            <h4 className="text-white font-semibold text-lg mb-2">1. Scope of Work</h4>
            <p>
              Scope of work is limited to the specifications agreed upon at purchase. Any additions constitute a new order. Standard deliverables include a single-page, mobile-optimized landing page with the agreed sections.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">2. Payment Terms</h4>
            <p>
              Full payment (100% advance) is required before project commencement. No refunds are provided after delivery of the initial preview link.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">3. Delivery Commitment & Client Responsibilities</h4>
            <p>
              Client is responsible for providing all content (text, images, business details) within 48 hours of payment. The delivery timeline clock begins only upon full content submission.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">4. Intellectual Property</h4>
            <p>
              Upon complete final payment and project approval, 100% ownership of the website code and design assets is transferred to the client.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">5. Limitation of Liability</h4>
            <p>
              Nexvora shall not be liable for third-party hosting downtime, domain registrar delays, or lost business revenue resulting from client-managed services.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">6. Governing Law</h4>
            <p>
              These terms are governed by and construed in accordance with the laws of India, with jurisdiction in Kota, Rajasthan.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
