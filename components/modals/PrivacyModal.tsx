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
          Privacy Policy
        </h3>

        <div className="space-y-6 text-gray-300 font-body text-sm md:text-base leading-relaxed">
          <section>
            <h4 className="text-white font-semibold text-lg mb-2">1. Data Collection</h4>
            <p>
              We collect only the business information you voluntarily share via WhatsApp to complete your project, such as your business name, contact details, service descriptions, and media assets.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">2. How We Use Information</h4>
            <p>
              Your information is exclusively used to build, publish, and maintain your landing page and process your WhatsApp communication requests.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">3. No Data Sale</h4>
            <p>
              We do not sell, trade, or transfer your personal or business information to third parties under any circumstances.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">4. Data Storage & Security</h4>
            <p>
              We do not store personal financial data on servers. Communication is stored within WhatsApp's secure infrastructure per their global privacy policy.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">5. Contact Us</h4>
            <p>
              If you have any questions regarding this Privacy Policy or your data, reach out directly to us on WhatsApp.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
