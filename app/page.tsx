import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-primary min-h-screen text-ink selection:bg-secondary selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Work />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
