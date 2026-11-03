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
  metadataBase: new URL("https://www.webleos.com"),
  title: {
    default: "Webleos | Web Design & Development Agency",
    template: "%s | Webleos",
  },
  description:
    "Webleos designs and develops modern websites, high-converting landing pages and digital experiences for businesses. Explore our web development, SEO and digital services.",
  keywords: [
    "digital agency",
    "web design studio",
    "award winning website",
    "3D web development",
    "interactive web design",
    "brand identity",
    "high conversion landing page",
    "UI UX design agency",
    "Webleos",
    "creative development",
    "modern web design",
  ],
  authors: [{ name: "Webleos", url: "https://www.webleos.com" }],
  creator: "Webleos",
  publisher: "Webleos",
  alternates: {
    canonical: "https://www.webleos.com",
  },
  openGraph: {
    title: "Webleos | Web Design & Development Agency",
    description:
      "Modern websites, landing pages and digital experiences designed to help businesses grow.",
    url: "https://www.webleos.com",
    siteName: "Webleos",
    images: [
      {
        url: "/webleos.png",
        width: 1200,
        height: 630,
        alt: "Webleos | Web Design & Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webleos — Digital Agency & Design Studio",
    description:
      "Engineering high-impact web experiences and brand identities for ambitious businesses worldwide.",
    images: ["/og-image.jpg"],
    creator: "@webleos",
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
    "@type": "ProfessionalService",
    name: "Webleos",
    url: "https://webleos.com",
    logo: "https://webleos.com/webleos.png",
    image: "https://webleos.com/og-image.jpg",
    description:
      "Webleos is a premier digital agency specializing in bespoke web design, 3D interactive web experiences, and brand transformation for global companies.",
    email: "webleos26@gmail.com",
    telephone: "+919461811297",
    sameAs: [
      "https://www.instagram.com/ilakshayyy",
    ],
    areaServed: "Worldwide",
    serviceType: [
      "Web Design & Development",
      "3D Interactive Experiences",
      "Brand Strategy & Visual Identity",
      "Search Engine Optimization (SEO)",
      "High-Performance Web Applications",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/webleos.png" type="image/png" />
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
