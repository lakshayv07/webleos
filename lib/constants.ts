export const BRAND_NAME = "Webleos";
export const TAGLINE = "Modern Websites & Digital Growth for Growing Businesses";
export const DOMAIN = "webleos.com";
export const EMAIL = "webleos26@gmail.com";
export const WHATSAPP_NUMBER = "9461811297";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_URL = "https://www.instagram.com/ilakshayyy";

export const WA_MESSAGES = {
  hero: encodeURIComponent("Hi Webleos! I'm interested in building a new website for my business. Can we discuss?"),
  services: encodeURIComponent("Hi Webleos! I want to know more about your services."),
  landingPage: encodeURIComponent("Hi Webleos! I am interested in getting a Professional Landing Page built for my business."),
  instagram: encodeURIComponent("Hi Webleos! I'd like to talk about Instagram Management for my brand."),
  visibility: encodeURIComponent("Hi Webleos! I need the Visibility Booster Pack to get my business ranked on Google."),
  maintenance: encodeURIComponent("Hi Webleos! I want Priority Maintenance & Support for my website."),
  final: encodeURIComponent("Hi Webleos! I'm ready to start a project with you."),
  contact: encodeURIComponent("Hi Webleos! I'd like to discuss a project with your team."),
};

export const SERVICES = [
  {
    number: "01",
    id: "landing-page",
    title: "Professional Landing Page",
    tagline: "High-converting, fast-loading, mobile-friendly landing page",
    description:
      "A custom-designed single page or website tailored to your business. We build it to load in under a second on mobile, look stunning with modern 3D touches, and turn visitors into WhatsApp inquiries and paying customers.",
    deliverables: [
      "Custom Modern Design (No Generic Templates)",
      "100% Mobile & Tablet Responsive",
      "Sub-Second Fast Loading Speed",
      "WhatsApp & Lead Form Integration",
    ],
    waMessage: WA_MESSAGES.landingPage,
  },
  {
    number: "02",
    id: "instagram-management",
    title: "Instagram Management",
    tagline: "Consistent branding, custom creatives, and reels that build trust",
    description:
      "Keep your brand active, professional, and visually appealing every day. We design high-quality social media posts, carousel slides, and short video reels so your business stands out and gains customer credibility.",
    deliverables: [
      "Custom Post & Carousel Graphics",
      "Short-Form Video & Reels Editing",
      "Profile Bio & Highlights Branding",
      "Content Planning & Regular Schedule",
    ],
    waMessage: WA_MESSAGES.instagram,
  },
  {
    number: "03",
    id: "visibility-booster",
    title: "Visibility Booster Pack",
    tagline: "Get found on Google Search and Google Maps when customers search",
    description:
      "Ensure local and national customers find your business easily. We set up and optimize your Google Business Profile (Google Maps), implement technical search engine optimization (SEO), and connect Google Search Console.",
    deliverables: [
      "Google My Business Setup & Maps Ranking",
      "Local SEO & Keyword Optimization",
      "Google Search Console & Sitemap Indexing",
      "Rich Schema Markup for Search Results",
    ],
    waMessage: WA_MESSAGES.visibility,
  },
  {
    number: "04",
    id: "priority-maintenance",
    title: "Priority Maintenance",
    tagline: "Continuous security, lightning-fast updates, and direct support",
    description:
      "You focus on your business while we take care of your website. Need to update prices, change banner photos, or add a new service? Message us directly on WhatsApp and we handle updates, backups, and security immediately.",
    deliverables: [
      "Direct Priority WhatsApp Support",
      "Regular Content & Image Updates",
      "24/7 Uptime & Security Monitoring",
      "Automatic Cloud Backups & Bug Fixes",
    ],
    waMessage: WA_MESSAGES.maintenance,
  },
];

