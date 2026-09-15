"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, Heart } from "lucide-react";
import { BRAND_NAME, WHATSAPP_BASE, WA_MESSAGES } from "@/lib/constants";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-surface-card border-t border-surface-border text-gray-400 font-body pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Column 1 — Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="relative w-8 h-8 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center p-0.5 shadow-md overflow-hidden">
              <Image
                src="/webleos.png"
                alt="Webleos Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading font-extrabold text-xl text-white">
              {BRAND_NAME}
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Modern websites for real businesses. High performance, mobile-first, flat-rate pricing.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.contact}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-purple-500/20 text-gray-300 hover:text-purple-300 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/ilakshayyy"
              className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 text-gray-300 hover:text-pink-300 transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={`mailto:lakshayv0784@gmail.com`}
              className="p-2 rounded-lg bg-white/5 hover:bg-orange-500/20 text-gray-300 hover:text-orange-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-gray-500 pt-2">
            © 2025 {BRAND_NAME}. All rights reserved.
          </p>
        </div>

        {/* Column 2 — Services */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Landing Page (₹14,999)
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Social Media Management
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Visibility Booster Pack
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Priority Maintenance
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="#portfolio" className="hover:text-white transition-colors">
                Our Work
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-white transition-colors">
                How It Works
              </a>
            </li>
            <li>
              <a href="#compare" className="hover:text-white transition-colors">
                Compare Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a
                href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.contact}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Chat With Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 — Legal Modals */}
        <div>
          <h4 className="font-heading font-bold text-white text-base mb-4">
            Legal & Policies
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button
                onClick={() => openModal("terms")}
                className="hover:text-white transition-colors text-left"
              >
                Terms of Service
              </button>
            </li>
            <li>
              <button
                onClick={() => openModal("privacy")}
                className="hover:text-white transition-colors text-left"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => openModal("delivery")}
                className="hover:text-white transition-colors text-left"
              >
                Delivery Timeline Policy
              </button>
            </li>
            <li>
              <button
                onClick={() => openModal("revision")}
                className="hover:text-white transition-colors text-left"
              >
                Revision Policy
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> in Rajasthan, India
        </p>
        <p>Serving businesses across India</p>
      </div>
    </footer>
  );
}
