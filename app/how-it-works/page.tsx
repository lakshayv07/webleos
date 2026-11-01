import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  PhoneCall,
  Clock,
  Shield,
  Layers,
  Code2,
  Globe2,
} from "lucide-react";
import { BRAND_NAME, DOMAIN, WHATSAPP_BASE, WA_MESSAGES, EMAIL } from "@/lib/constants";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works — Complete Workflow & Process | Webleos",
  description:
    "Learn the exact step-by-step process of working with Webleos. From your initial WhatsApp inquiry, discovery questions, wireframe design, to live launch and domain setup.",
  alternates: {
    canonical: `https://${DOMAIN}/how-it-works`,
  },
};

const WORKFLOW_STAGES = [
  {
    step: "01",
    title: "You Reach Out (Instant Connection)",
    badge: "Day 01 · First Contact",
    icon: MessageCircle,
    summary:
      "You message us on WhatsApp or send an email. No endless sales pitches or complicated corporate forms.",
    details: [
      "Reach out directly via WhatsApp (+91 9461811297) or email.",
      "Tell us briefly about your business, current website (if any), and what you want to achieve.",
      "We respond quickly (typically within 2 hours) to schedule a quick chat or voice call.",
    ],
  },
  {
    step: "02",
    title: "What We Ask You (Discovery & Requirements)",
    badge: "Day 01 - 02 · Discovery",
    icon: HelpCircle,
    summary:
      "To build something that brings you real customers, we ask a few straightforward questions about your business:",
    questions: [
      "1. What is your business and what core services or products do you provide?",
      "2. Who is your primary target audience (local clients, pan-India, or international customers)?",
      "3. Do you have existing branding (logo, colors), or reference websites you admire?",
      "4. What is the main action you want visitors to take (WhatsApp chat, phone call, or lead form)?",
      "5. Do you already have a domain name registered, or do you need assistance purchasing one?",
    ],
  },
  {
    step: "03",
    title: "Scope & Timeline Confirmation",
    badge: "Day 02 · Clear Agreement",
    icon: Shield,
    summary:
      "We summarize everything in a transparent, written project scope with zero hidden costs.",
    details: [
      "We define the exact deliverables, number of sections/pages, and interactive features.",
      "We agree on a realistic delivery date with clear milestones.",
      "No technical jargon or surprise charges midway through the project.",
    ],
  },
  {
    step: "04",
    title: "Custom Wireframe & Visual Design Preview",
    badge: "Day 03 - 05 · Design Preview",
    icon: Layers,
    summary:
      "We craft a custom visual design tailored specifically to your brand aesthetics and market positioning.",
    details: [
      "We build a high-fidelity visual preview of your website layout.",
      "We send you a private link so you can view it directly on your smartphone and computer.",
      "You review the colors, structure, and content before a single line of production code is locked in.",
    ],
  },
  {
    step: "05",
    title: "High-Speed Next.js Coding & 3D Interactivity",
    badge: "Week 02 · Engineering",
    icon: Code2,
    summary:
      "Our engineers build your website using modern Next.js and React — ensuring instant load times and smooth motion.",
    details: [
      "Sub-second load times optimized for Indian and international mobile networks.",
      "Interactive 3D particle and smooth scroll effects that wow visitors.",
      "Seamless integration of direct WhatsApp buttons and lead capture forms.",
      "Search Engine Optimization (SEO) setup so your site is ready for Google indexing.",
    ],
  },
  {
    step: "06",
    title: "Review, Free Revisions & Going Live",
    badge: "Week 03 · Final Delivery",
    icon: Globe2,
    summary:
      "You test the live staging site, we refine based on your feedback, and we launch on your domain.",
    details: [
      "We provide a private live staging URL where you and your team can test every button and page.",
      "We make revisions based on your feedback until you are completely satisfied.",
      "We connect your custom domain (e.g., yourcompany.com) with free SSL security.",
      "We submit your sitemap to Google Search Console so customers can find you on Google.",
      "Full ownership transfer: all source code and assets belong 100% to you.",
    ],
  },
];

const FAQS = [
  {
    q: "Do I need technical knowledge to work with Webleos?",
    a: "Not at all. We take care of all the technical details, code, server configuration, domain linking, and security. All you need to share is information about your business.",
  },
  {
    q: "How long does the entire process take from start to finish?",
    a: "A standard high-converting landing page is typically completed and delivered live within 7 to 10 days. More comprehensive multi-page websites take around 2 to 3 weeks.",
  },
  {
    q: "What if I already own a domain name?",
    a: "Great! We will help you connect your existing domain (GoDaddy, Namecheap, Hostinger, etc.) to your new website with zero downtime. If you do not have one yet, we will guide you on how to get one.",
  },
  {
    q: "Who owns the website and code after delivery?",
    a: "You retain 100% full legal and intellectual property ownership of your website, design assets, and source code. Webleos will never lock you in.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-primary text-ink selection:bg-secondary selection:text-white flex flex-col justify-between">
      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-surface-border py-4 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
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
            <span className="font-heading font-black text-xl tracking-tighter uppercase text-ink group-hover:text-secondary transition-colors">
              {BRAND_NAME}
              <span className="text-tertiary font-serif ml-0.5">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-muted hover:text-secondary transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <a
              href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.contact}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-secondary/90 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-surface-border bg-surface-card mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted font-bold">
              TRANSPARENT WORKFLOW
            </span>
          </div>

          <h1 className="font-heading font-black text-4xl sm:text-6xl text-ink tracking-tight uppercase leading-[1.05]">
            HOW WE WORK
            <br />
            <span className="text-secondary">WITH YOU</span>
          </h1>

          <p className="font-body text-ink-muted text-base sm:text-lg leading-relaxed mt-6">
            From the first WhatsApp message to the day your website goes live on your domain. Here is our complete, transparent step-by-step process with zero guesswork.
          </p>
        </div>

        {/* Workflow Steps Container */}
        <div className="space-y-12">
          {WORKFLOW_STAGES.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="p-8 sm:p-10 rounded-2xl bg-surface-card border border-surface-border shadow-sm hover:border-secondary/60 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-surface-border">
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-secondary">
                      {stage.step}
                    </span>
                    <div>
                      <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider text-tertiary mb-1">
                        {stage.badge}
                      </span>
                      <h2 className="font-heading font-black text-2xl sm:text-3xl text-ink tracking-tight">
                        {stage.title}
                      </h2>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-secondary shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <p className="font-body text-ink text-base sm:text-lg leading-relaxed mt-6 mb-6">
                  {stage.summary}
                </p>

                {/* Question list for discovery */}
                {stage.questions && (
                  <div className="bg-primary/70 p-6 rounded-xl border border-surface-border space-y-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-secondary block mb-2">
                      Questions we will ask you:
                    </span>
                    {stage.questions.map((q, i) => (
                      <p key={i} className="font-body text-sm sm:text-base text-ink font-medium">
                        {q}
                      </p>
                    ))}
                  </div>
                )}

                {/* Details list */}
                {stage.details && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {stage.details.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm sm:text-base text-ink-muted font-body"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Process FAQs */}
        <div className="mt-24 pt-16 border-t border-surface-border">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-tertiary font-bold block mb-2">
              COMMON QUESTIONS
            </span>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-ink uppercase">
              FREQUENTLY ASKED ABOUT OUR WORKFLOW
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border"
              >
                <h3 className="font-heading font-bold text-lg text-ink mb-3">
                  {faq.q}
                </h3>
                <p className="font-body text-sm text-ink-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-secondary text-white text-center flex flex-col items-center shadow-xl">
          <span className="font-mono text-xs uppercase tracking-widest text-primary/80 font-bold mb-3">
            GET STARTED TODAY
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight max-w-2xl leading-tight">
            READY TO BRING YOUR PROJECT TO LIFE?
          </h2>
          <p className="font-body text-primary/80 text-base sm:text-lg max-w-xl mt-4 mb-8">
            Message us directly on WhatsApp with your business details and let us handle everything from design to live delivery.
          </p>

          <a
            href={`${WHATSAPP_BASE}?text=${WA_MESSAGES.contact}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-tertiary text-white font-heading font-bold text-sm uppercase tracking-wider hover:bg-tertiary-dark transition-all shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat With Us on WhatsApp</span>
          </a>
        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
