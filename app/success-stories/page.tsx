import AnimatedBackground from "@/components/animated-background"
import Navbar from "@/components/navbar"
import AnimatedFooter from "@/components/animated-footer"
import SuccessStoriesRedesign from "@/components/success-stories-redesign"
import ClientsPortfolio from "@/components/clients-portfolio"

export default function SuccessStoriesPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navbar />
        <SuccessStoriesRedesign />
        <ClientsPortfolio />
        <AnimatedFooter />
      </div>
    </div>
  )
}
