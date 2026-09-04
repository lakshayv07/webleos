import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis";
import { ModalProvider } from "@/context/ModalContext";
import { BRAND_NAME } from "@/lib/constants";
import TermsModal from "@/components/modals/TermsModal";
import PrivacyModal from "@/components/modals/PrivacyModal";
import DeliveryModal from "@/components/modals/DeliveryModal";
import RevisionModal from "@/components/modals/RevisionModal";
import { AnimatePresence } from "framer-motion";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexvora — Professional Landing Pages at ₹4,999",
  description:
    "Get a sleek, mobile-ready landing page for your business in 72 hours. Flat ₹4,999. No hidden costs.",
  openGraph: {
    title: "Nexvora — Professional Landing Pages at ₹4,999",
    description:
      "Get a sleek, mobile-ready landing page for your business in 72 hours. Flat ₹4,999. No hidden costs.",
    type: "website",
    locale: "en_IN",
    siteName: "Nexvora",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kota",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
    priceRange: "₹4,999",
    serviceType: "Web Design",
    description:
      "Get a sleek, mobile-ready landing page for your business in 72 hours. Flat ₹4,999. No hidden costs.",
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0D0D1A] text-gray-100 font-body antialiased selection:bg-purple-600 selection:text-white">
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
