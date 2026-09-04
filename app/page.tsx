import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mesh-gradient fixed inset-0 -z-10 opacity-60 pointer-events-none" />
      <Navbar />
      <Hero />
      <PainPoints />
      <Solution />
      <ComparisonMatrix />
      <Process />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
