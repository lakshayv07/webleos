import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, CheckCircle, Mail, MessageCircle, Lock } from "lucide-react";
import { BRAND_NAME, DOMAIN, EMAIL, WHATSAPP_BASE, WA_MESSAGES, WHATSAPP_NUMBER } from "@/lib/constants";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy & Copyright Ownership | Webleos (webleos.com)",
  description:
    "Official Privacy Policy and Legal Ownership notice for Webleos (webleos.com). We respect your privacy and protect client information.",
  alternates: {
    canonical: "https://www.webleos.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.webleos.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Privacy Policy",
        item: "https://www.webleos.com/privacy-policy",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-primary text-ink selection:bg-secondary selection:text-white flex flex-col justify-between">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-surface-border py-4 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/webleos.png"
                alt="Webleos - Web Design & Digital Growth Agency"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter uppercase text-ink group-hover:text-secondary transition-colors">
              {BRAND_NAME}
              <span className="text-tertiary font-serif ml-0.5">.</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-muted hover:text-secondary transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Page Title & Ownership Badge */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-surface-border bg-surface-card mb-4 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-secondary" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted font-bold">
              OFFICIAL POLICY & LEGAL OWNERSHIP
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-5xl text-ink tracking-tight uppercase">
            PRIVACY POLICY &amp; COPYRIGHT NOTICE
          </h1>

          <p className="font-mono text-xs text-ink-muted mt-3">
            Last Updated: January 2026 · Official Domain: <span className="text-secondary font-bold">webleos.com</span>
          </p>
        </div>

        {/* Ownership Notice Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border-2 border-secondary/30 mb-12 shadow-sm">
          <h2 className="font-heading font-bold text-xl text-ink mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-secondary" />
            <span>Official Domain Ownership &amp; Copyright Declaration</span>
          </h2>
          <p className="font-body text-ink-muted text-sm sm:text-base leading-relaxed mb-4">
            The website <strong className="text-ink">webleos.com</strong> and the brand identity <strong className="text-ink">{BRAND_NAME}</strong> are the exclusive property of Webleos. All original digital designs, UI/UX architecture, custom code, graphics, and written content appearing on this domain are protected by copyright and intellectual property laws.
          </p>
          <div className="p-4 rounded-xl bg-primary border border-surface-border font-mono text-xs text-ink-muted">
            <p className="font-bold text-ink">
              © 2024–2026 Webleos ({DOMAIN}). All rights reserved.
            </p>
            <p className="mt-1">
              Unauthorized reproduction, duplication, or scraping of content or proprietary code from webleos.com is strictly prohibited.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 font-body text-ink-muted text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
              1. Information We Collect
            </h2>
            <p>
              Webleos collects only minimal and relevant information necessary to communicate with you and deliver our digital agency services. This includes:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span><strong>Contact Details:</strong> Your name, email address, and WhatsApp/phone number when you reach out for quotes or inquiries.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span><strong>Project Specifications:</strong> Business details, branding assets, logos, and style preferences shared for website development.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span><strong>Usage Analytics:</strong> Anonymous, aggregated website performance metrics to improve site loading speed and user experience.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
              2. How We Use Your Information
            </h2>
            <p>
              Any information shared with Webleos is used solely for the following purposes:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span>To respond to your inquiries on WhatsApp or email regarding project scope and pricing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span>To design, develop, test, and deploy your custom landing page, website, or social media assets.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span>To provide post-launch priority support, bug fixes, and domain configuration.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
              3. Client Ownership &amp; Code Transfer
            </h2>
            <p>
              Unlike agencies that hold client assets hostage, Webleos operates on full client ownership:
            </p>
            <p>
              Upon successful project completion and milestone payment, <strong>100% full intellectual property rights, source code, design files, and domain configurations are transferred to you</strong>. You retain full ownership to host, modify, or expand your website however you choose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
              4. Data Protection &amp; Confidentiality
            </h2>
            <p>
              We treat your commercial information and trade secrets with absolute confidentiality:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span>We never sell, rent, or trade your personal or business data to third-party advertisers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span>All communication across WhatsApp and SSL-secured channels is encrypted.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-1" />
                <span>Non-Disclosure Agreements (NDAs) are happily signed upon request prior to project kickoff.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy, your data, or the legal ownership of webleos.com, please contact us directly:
            </p>
            <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-2 font-mono text-sm">
              <p>
                <strong>Agency:</strong> {BRAND_NAME} Digital Agency
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a href={`https://${DOMAIN}`} className="text-secondary hover:underline">
                  https://{DOMAIN}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${EMAIL}`} className="text-secondary hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p>
                <strong>WhatsApp / Phone:</strong> +91 {WHATSAPP_NUMBER}
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
