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
          Delivery Timeline Policy
        </h3>

        <div className="space-y-6 text-gray-300 font-body text-sm md:text-base leading-relaxed">
          <section>
            <h4 className="text-white font-semibold text-lg mb-2">1. Standard Delivery (72 Hours)</h4>
            <p>
              Our standard delivery commitment is 72 hours from the moment all required assets are received.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">2. Rush Delivery Option</h4>
            <p>
              Need it faster? Rush Delivery is available for an additional ₹999 add-on fee, guaranteeing a initial preview link within 48 hours.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">3. What Starts the Clock</h4>
            <p>
              The 72-hour window begins when: (1) payment is confirmed and (2) all required content is submitted via our intake form or WhatsApp.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">4. Delays & Pause Rules</h4>
            <p>
              Delays caused by incomplete content from the client pause the delivery clock until full clarification is received.
            </p>
          </section>

          <section>
            <h4 className="text-white font-semibold text-lg mb-2">5. Guarantee Commitment</h4>
            <p>
              If we miss the 72-hour guarantee through our own fault without client-caused delays, you receive a full refund of ₹14,999.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
