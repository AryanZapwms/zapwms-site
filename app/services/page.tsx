import AnimatedBackground from "@/components/animated-background";
import Navbar from "@/components/navbar";
import AnimatedFooter from "@/components/animated-footer";
import ServicesVisual from "@/components/services-visual";
import ServicesAlternating from "@/components/services-alternating";

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-24" />
        <ServicesVisual />
        <ServicesAlternating />
        <AnimatedFooter />
      </div>
    </div>
  );
}
