import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import PlanSection from "@/components/PlanSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <PlanSection />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}
