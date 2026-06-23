"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const sections = [
  {
    label: "Digital Marketing",
    title: "Campaigns That Actually Convert",
    description: "We don't just run ads — we build full-funnel strategies that track every click, optimize every campaign, and turn your budget into measurable revenue.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=900&q=85",
    points: ["Performance Marketing across Google & Meta", "SEO to rank #1 organically", "Paid social with pixel-level tracking", "ROI dashboards updated in real-time"],
    color: "indigo",
    bg: "bg-indigo-600",
    light: "bg-indigo-50",
    border: "border-indigo-100",
    badge: "text-indigo-700 bg-indigo-100",
    imageRight: false,
  },
  {
    label: "Creative Services",
    title: "Visuals That Stop the Scroll",
    description: "Great design doesn't just look good — it communicates, converts, and builds brand trust at first glance. Our creative team brings your brand to life across every format.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=85",
    points: ["Logo & Brand Identity Design", "Social media creatives & banners", "Explainer videos & 2D animations", "Custom mascots & 3D characters"],
    color: "pink",
    bg: "bg-pink-600",
    light: "bg-pink-50",
    border: "border-pink-100",
    badge: "text-pink-700 bg-pink-100",
    imageRight: true,
  },
  {
    label: "Web Development",
    title: "Websites Built to Rank & Convert",
    description: "Your website is your 24/7 salesperson. We build fast, beautiful, fully responsive websites that rank on Google and turn every visitor into a lead or customer.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85",
    points: ["Custom UI/UX design for every industry", "SEO-optimized from day one", "Lightning-fast load times", "Mobile-first responsive layouts"],
    color: "emerald",
    bg: "bg-emerald-600",
    light: "bg-emerald-50",
    border: "border-emerald-100",
    badge: "text-emerald-700 bg-emerald-100",
    imageRight: false,
  },
  {
    label: "Social Media",
    title: "Build an Audience That Buys",
    description: "From Instagram Reels to LinkedIn thought leadership — we manage your entire social presence, grow your following, and build a community that converts.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=900&q=85",
    points: ["Full social media management", "Content calendar & posting schedule", "Hashtag & competitor research", "Monthly growth analytics reports"],
    color: "purple",
    bg: "bg-purple-600",
    light: "bg-purple-50",
    border: "border-purple-100",
    badge: "text-purple-700 bg-purple-100",
    imageRight: true,
  },
]

function AlternatingSection({ section, index }: { section: typeof sections[0], index: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <div ref={ref} className={`py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} relative overflow-hidden`}>
      {/* Subtle blob */}
      <div
        className={`absolute ${section.imageRight ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none`}
        style={{ backgroundColor: section.bg.replace("bg-", "").replace("-600", "") === "indigo" ? "#6366f1" : section.bg.replace("bg-", "").replace("-600", "") === "pink" ? "#ec4899" : section.bg.replace("bg-", "").replace("-600", "") === "emerald" ? "#10b981" : "#8b5cf6" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${section.imageRight ? "" : ""}`}>

          {/* Image */}
          <motion.div
            style={{ y }}
            className={`relative ${section.imageRight ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Color overlay accent */}
              <div className={`absolute inset-0 ${section.light} opacity-20 mix-blend-multiply`} />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={`absolute -bottom-6 ${section.imageRight ? "-left-6" : "-right-6"} bg-white rounded-2xl p-5 shadow-xl border ${section.border}`}
            >
              <div className={`text-3xl font-black ${section.badge.includes("indigo") ? "text-indigo-600" : section.badge.includes("pink") ? "text-pink-600" : section.badge.includes("emerald") ? "text-emerald-600" : "text-purple-600"} mb-1`}>
                25+
              </div>
              <div className="text-xs text-gray-500 font-medium">Years of<br />Experience</div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className={`${section.imageRight ? "lg:order-1" : "lg:order-2"}`}>
            <motion.div
              initial={{ opacity: 0, x: section.imageRight ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${section.badge}`}>
                {section.label}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                {section.title}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                {section.description}
              </p>

              {/* Points */}
              <ul className="space-y-3 mb-10">
                {section.points.map((point, i) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${section.badge.includes("indigo") ? "text-indigo-500" : section.badge.includes("pink") ? "text-pink-500" : section.badge.includes("emerald") ? "text-emerald-500" : "text-purple-500"}`}
                    />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/get-started">
                <motion.button
                  whileHover={{ scale: 1.03, x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`inline-flex items-center gap-2 ${section.bg} text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-200`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesAlternating() {
  return (
    <div>
      {/* Section header */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 font-medium mb-5 shadow-sm">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
            What We Can Do For You
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Every Brand Deserves{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Full-Stack Growth
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From the first Google search to the final purchase — we cover every touchpoint of your customer's journey.
          </p>
        </motion.div>
      </div>

      {sections.map((section, index) => (
        <AlternatingSection key={section.label} section={section} index={index} />
      ))}
    </div>
  )
}
