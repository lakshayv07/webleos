"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND_NAME, WA_MESSAGES, WHATSAPP_BASE } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Our Work", href: "/#work" },
  { name: "Reviews", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/85 backdrop-blur-md border-b border-surface-border shadow-sm py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="/#hero" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Image
              src="/webleos.png"
              alt="Webleos Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter uppercase text-ink group-hover:text-secondary transition-colors">
            {BRAND_NAME}
            <span className="text-tertiary font-serif ml-0.5">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-widest text-ink hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <MagneticButton
            id="nav-cta-button"
            href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.hero}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-primary font-heading font-bold text-xs uppercase tracking-wider hover:bg-secondary transition-all duration-300">
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink rounded-lg bg-surface-card border border-surface-border"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-primary border-b border-surface-border px-6 pt-4 pb-8 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading font-bold text-lg text-ink hover:text-secondary py-2 border-b border-surface-border/50 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  id="mobile-nav-cta-link"
                  href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.hero}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-secondary text-white font-heading font-bold text-sm uppercase tracking-wider"
                >
                  <span>START A PROJECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
