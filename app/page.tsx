// app/page.tsx
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowWeWork from "@/components/how-we-work";
import ServicesVisual from "@/components/services-visual";
import ServicesAlternating from "@/components/services-alternating";
import ClientsPortfolio from "@/components/clients-portfolio";
import AnimatedFooter from "@/components/animated-footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowWeWork />
        <ServicesVisual />
        <ServicesAlternating />
        <ClientsPortfolio />
        <AnimatedFooter />
      </div>
    </div>
  );
}
