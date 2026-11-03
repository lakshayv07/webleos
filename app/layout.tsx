import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis";
import { ModalProvider } from "@/context/ModalContext";
import TermsModal from "@/components/modals/TermsModal";
import PrivacyModal from "@/components/modals/PrivacyModal";
import DeliveryModal from "@/components/modals/DeliveryModal";
import RevisionModal from "@/components/modals/RevisionModal";
import { AnimatePresence } from "framer-motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://webleos.com"),
  title: {
    default: "Webleos — Web Design & Digital Growth Agency | Official Site",
    template: "%s | Webleos",
  },
  description:
    "Official website of Webleos. We design & engineer bespoke 3D websites, high-converting landing pages, and digital growth systems for ambitious businesses worldwide.",
  applicationName: "Webleos",
  keywords: [
    "Webleos",
    "webleos",
    "webleos.com",
    "Webleos Agency",
    "Webleos Digital",
    "Webleos Web Design",
    "digital agency",
    "web design studio",
    "award winning website",
    "3D web development",
    "interactive web design",
    "brand identity",
    "high conversion landing page",
    "UI UX design agency",
    "creative development",
    "modern web design",
    "local SEO agency",
  ],
  authors: [{ name: "Webleos", url: "https://webleos.com" }],
  creator: "Webleos",
  publisher: "Webleos",
  category: "technology",
  alternates: {
    canonical: "https://webleos.com",
  },
  icons: {
    icon: [
      { url: "/webleos.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/webleos.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Webleos — Web Design & Digital Growth Agency",
    description:
      "Official website of Webleos. We engineer bespoke 3D websites, high-converting landing pages, and digital growth systems that turn visitors into devoted clients.",
    url: "https://webleos.com",
    siteName: "Webleos",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webleos — Web Design & Digital Growth Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webleos — Web Design & Digital Growth Agency",
    description:
      "Official website of Webleos. Engineering high-impact web experiences and brand identities for ambitious businesses worldwide.",
    images: ["/og-image.jpg"],
    creator: "@webleos",
    site: "@webleos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "2iONhRT1ZePBiTDsO9Se5GnHB9tfh3gaYAvp6vNam2g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://webleos.com/#organization",
        name: "Webleos",
        legalName: "Webleos",
        alternateName: [
          "Webleos Studio",
          "Webleos Digital Agency",
          "webleos.com",
          "webleos",
        ],
        url: "https://webleos.com",
        logo: {
          "@type": "ImageObject",
          "@id": "https://webleos.com/#logo",
          url: "https://webleos.com/webleos.png",
          contentUrl: "https://webleos.com/webleos.png",
          caption: "Webleos Logo",
        },
        image: "https://webleos.com/og-image.jpg",
        description:
          "Webleos is an award-caliber digital agency specializing in bespoke web design, 3D interactive web experiences, and brand transformation for global companies.",
        email: "webleos26@gmail.com",
        telephone: "+919461811297",
        foundingDate: "2024",
        priceRange: "$$",
        areaServed: "Worldwide",
        sameAs: [
          "https://www.instagram.com/webleos",
          "https://www.instagram.com/ilakshayyy",
          "https://github.com/webleos",
          "https://www.linkedin.com/company/webleos",
          "https://x.com/webleos",
        ],
        knowsAbout: [
          "Web Design & Development",
          "3D Web Experiences",
          "Next.js Development",
          "Search Engine Optimization (SEO)",
          "UI/UX Design",
          "Conversion Rate Optimization",
          "Brand Visual Identity",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Webleos Core Digital Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Professional Landing Page",
                description:
                  "Custom-designed, sub-second fast loading landing page built with Next.js and 3D motion touches.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Instagram Management & Creatives",
                description:
                  "High-quality social media posts, carousel designs, and reels to build brand trust.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Visibility Booster Pack",
                description:
                  "Google Business Profile optimization, technical search engine optimization (SEO), and Google Search Console integration.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Priority Website Maintenance & Support",
                description:
                  "Fast turnaround on website updates, daily backups, and ongoing technical support.",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://webleos.com/#website",
        url: "https://webleos.com",
        name: "Webleos",
        alternateName: ["webleos", "Webleos Agency", "webleos.com"],
        description:
          "Official website of Webleos — Web Design & Digital Growth Agency.",
        publisher: {
          "@id": "https://webleos.com/#organization",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/webleos.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-primary text-ink font-body antialiased selection:bg-secondary selection:text-white">
        <div className="grain-overlay" aria-hidden="true" />
        <SmoothScrollProvider>
          <ModalProvider>
            {children}
            <AnimatePresence>
              <TermsModal key="terms-modal" />
              <PrivacyModal key="privacy-modal" />
              <DeliveryModal key="delivery-modal" />
              <RevisionModal key="revision-modal" />
            </AnimatePresence>
          </ModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
