// app/page.tsx
import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowWeWork from "@/components/how-we-work";
import InnovativeServices from "@/components/innovative-services";
import ServicesPreview from "@/components/services-preview-home";
import AnimatedFooter from "@/components/animated-footer";
import BrochureInfographic from "../components/brochure-infographic";
import ClientsPortfolio from "@/components/clients-portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowWeWork />
        <InnovativeServices />
        <ServicesPreview />
        <BrochureInfographic />
        <ClientsPortfolio />
        <AnimatedFooter />
      </div>
    </div>
  );
}
