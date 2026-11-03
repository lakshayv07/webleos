"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { BRAND_NAME, DOMAIN, WHATSAPP_BASE, WA_MESSAGES, EMAIL, INSTAGRAM_URL, WHATSAPP_NUMBER } from "@/lib/constants";
import { useModal } from "@/context/ModalContext";

export default function Footer() {
  const { openModal } = useModal();

  return (
    <footer className="bg-surface-card border-t border-surface-border text-ink-muted font-body pt-20 pb-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Column 1 — Brand (5 cols) */}
        <div className="md:col-span-5 space-y-5">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
              <Image
                src="/webleos.png"
                alt="Webleos - Web Design & Digital Growth Agency"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading font-black text-2xl uppercase tracking-tighter text-ink">
              {BRAND_NAME}
              <span className="text-tertiary font-serif ml-0.5">.</span>
            </span>
          </div>

          <p className="text-sm text-ink-muted max-w-sm leading-relaxed">
            Webleos is a digital design &amp; growth agency. We build fast, high-converting websites, manage your social media, and get your business ranked on Google.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a
              id="footer-social-whatsapp"
              href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.contact}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-primary hover:bg-secondary hover:text-white text-ink transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              id="footer-social-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-primary hover:bg-tertiary hover:text-white text-ink transition-all duration-300"
              aria-label="Instagram"
            >
              <svg
                className="w-4 h-4"
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
              id="footer-social-email"
              href={`mailto:${EMAIL}`}
              className="p-2.5 rounded-full bg-primary hover:bg-secondary hover:text-white text-ink transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2">
            <p className="font-mono text-xs font-bold text-ink">
              © 2024–{new Date().getFullYear()} Webleos ({DOMAIN}). All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-ink-subtle mt-1">
              Official owner and operator of webleos.com.
            </p>
          </div>
        </div>

        {/* Column 2 — Services (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#services" className="hover:text-secondary transition-colors">
                Professional Landing Page
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary transition-colors">
                Instagram Management
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary transition-colors">
                Visibility Booster Pack
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary transition-colors">
                Priority Maintenance
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 — Navigation (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/how-it-works" className="hover:text-secondary transition-colors font-medium text-ink">
                How It Works &rarr;
              </Link>
            </li>
            <li>
              <a href="#services" className="hover:text-secondary transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-secondary transition-colors">
                Our Work
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-secondary transition-colors">
                Client Reviews
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-secondary transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 — Legal (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink font-bold">
            Policies &amp; Legal
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-secondary transition-colors font-medium text-ink">
                Privacy Policy
              </Link>
            </li>
            <li>
              <button
                id="footer-modal-privacy"
                onClick={() => openModal("privacy")}
                className="hover:text-secondary transition-colors text-left"
              >
                Data Privacy Modal
              </button>
            </li>
            <li>
              <button
                id="footer-modal-terms"
                onClick={() => openModal("terms")}
                className="hover:text-secondary transition-colors text-left"
              >
                Terms of Engagement
              </button>
            </li>
            <li>
              <button
                id="footer-modal-delivery"
                onClick={() => openModal("delivery")}
                className="hover:text-secondary transition-colors text-left"
              >
                Delivery Charter
              </button>
            </li>
            <li>
              <button
                id="footer-modal-revision"
                onClick={() => openModal("revision")}
                className="hover:text-secondary transition-colors text-left"
              >
                Free Revisions Scope
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal / Studio Coordinates */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-ink-subtle gap-4">
        <p>webleos.com · Registered Agency &amp; Domain Owner</p>
        <p>{EMAIL}</p>
      </div>
    </footer>
  );
}
