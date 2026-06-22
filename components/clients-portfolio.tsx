"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Globe, TrendingUp, Star } from "lucide-react"
import Link from "next/link"
import AnimatedButton from "./animated-button"

const clients = [
  {
    name: "ZAP Solutionz",
    url: "https://zapsolutionz.com",
    category: "Digital Agency",
    description: "Full-service digital solutions company — sister brand under the ZAP umbrella with 15+ years of global reach.",
    tags: ["Web Design", "Branding", "Digital Marketing"],
    color: "indigo",
    gradient: "from-indigo-50 to-blue-50",
    border: "border-indigo-100",
    badge: "bg-indigo-100 text-indigo-700",
    icon_bg: "bg-indigo-500",
    glow: "hover:shadow-[0_8px_40px_rgba(99,102,241,0.25)]",
    initials: "ZS",
    featured: true,
  },
  {
    name: "Colorants Chem",
    url: "#",
    category: "Pharmaceuticals",
    description: "B2B pharma brand with end-to-end digital marketing, SEO optimization, and brand identity development.",
    tags: ["SEO", "B2B Marketing", "Brand Identity"],
    color: "blue",
    gradient: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    icon_bg: "bg-blue-500",
    glow: "hover:shadow-[0_8px_40px_rgba(59,130,246,0.25)]",
    initials: "CC",
  },
  {
    name: "Aqua Excel",
    url: "#",
    category: "Water Treatment",
    description: "Industrial water treatment company — complete digital presence, Google Ads, and performance marketing.",
    tags: ["Google Ads", "PPC", "Performance Marketing"],
    color: "cyan",
    gradient: "from-cyan-50 to-teal-50",
    border: "border-cyan-100",
    badge: "bg-cyan-100 text-cyan-700",
    icon_bg: "bg-cyan-500",
    glow: "hover:shadow-[0_8px_40px_rgba(6,182,212,0.25)]",
    initials: "AE",
  },
  {
    name: "Ashwamedh Engineers",
    url: "#",
    category: "Engineering",
    description: "Industrial fabrication company scaled with targeted digital marketing and lead generation strategies.",
    tags: ["Lead Generation", "SEO", "Social Media"],
    color: "orange",
    gradient: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    badge: "bg-orange-100 text-orange-700",
    icon_bg: "bg-orange-500",
    glow: "hover:shadow-[0_8px_40px_rgba(249,115,22,0.25)]",
    initials: "AE",
  },
  {
    name: "Orion Scientific",
    url: "#",
    category: "Scientific Equipment",
    description: "Premium scientific equipment supplier — digital brand launch, social campaigns, and e-commerce growth.",
    tags: ["E-commerce", "Brand Launch", "Social Ads"],
    color: "purple",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    badge: "bg-purple-100 text-purple-700",
    icon_bg: "bg-purple-500",
    glow: "hover:shadow-[0_8px_40px_rgba(168,85,247,0.25)]",
    initials: "OS",
  },
  {
    name: "JVC Equipments",
    url: "#",
    category: "Industrial Equipment",
    description: "Industrial equipment brand with thoughtful SEO and website support aligned to their niche audience.",
    tags: ["SEO", "Website", "Content Marketing"],
    color: "emerald",
    gradient: "from-emerald-50 to-green-50",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    icon_bg: "bg-emerald-500",
    glow: "hover:shadow-[0_8px_40px_rgba(16,185,129,0.25)]",
    initials: "JVC",
  },
  {
    name: "SM Tech Systems",
    url: "#",
    category: "Technology",
    description: "Tech solutions company that achieved clarity and traction with ZAPWMS's digital and website strategy.",
    tags: ["Website Design", "Digital Marketing", "Analytics"],
    color: "sky",
    gradient: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    badge: "bg-sky-100 text-sky-700",
    icon_bg: "bg-sky-500",
    glow: "hover:shadow-[0_8px_40px_rgba(14,165,233,0.25)]",
    initials: "SMT",
  },
  {
    name: "Fission Biotech",
    url: "#",
    category: "Biotech / Pharma",
    description: "Biotech startup that partnered with ZAPWMS for website, digital marketing and online brand building.",
    tags: ["Startup Marketing", "SEO", "Web Development"],
    color: "pink",
    gradient: "from-pink-50 to-rose-50",
    border: "border-pink-100",
    badge: "bg-pink-100 text-pink-700",
    icon_bg: "bg-pink-500",
    glow: "hover:shadow-[0_8px_40px_rgba(236,72,153,0.25)]",
    initials: "FB",
  },
  {
    name: "Monarch Elevator",
    url: "#",
    category: "Real Estate / Infra",
    description: "Elevator and lift solutions company — smooth digital marketing journey and brand growth with ZAPWMS.",
    tags: ["Instagram Ads", "Meta Ads", "Branding"],
    color: "fuchsia",
    gradient: "from-fuchsia-50 to-purple-50",
    border: "border-fuchsia-100",
    badge: "bg-fuchsia-100 text-fuchsia-700",
    icon_bg: "bg-fuchsia-500",
    glow: "hover:shadow-[0_8px_40px_rgba(217,70,239,0.25)]",
    initials: "ME",
  },
  {
    name: "Sweetech Machinery",
    url: "#",
    category: "Manufacturing",
    description: "Machinery brand that gained significant SEO visibility and digital marketing ROI with ZAPWMS.",
    tags: ["SEO", "Google Ads", "Performance"],
    color: "teal",
    gradient: "from-teal-50 to-emerald-50",
    border: "border-teal-100",
    badge: "bg-teal-100 text-teal-700",
    icon_bg: "bg-teal-500",
    glow: "hover:shadow-[0_8px_40px_rgba(20,184,166,0.25)]",
    initials: "SW",
  },
  {
    name: "Eurobond Adhesives",
    url: "#",
    category: "Chemicals / Adhesives",
    description: "Specialty adhesive brand — digital marketing, clear communication strategy and measurable online growth.",
    tags: ["Digital Marketing", "LinkedIn", "Content"],
    color: "yellow",
    gradient: "from-yellow-50 to-amber-50",
    border: "border-yellow-100",
    badge: "bg-yellow-100 text-yellow-700",
    icon_bg: "bg-yellow-500",
    glow: "hover:shadow-[0_8px_40px_rgba(234,179,8,0.25)]",
    initials: "EB",
  },
  {
    name: "Rocktech Engineers",
    url: "#",
    category: "Engineering",
    description: "Engineering company with streamlined SEO, digital marketing and strong search engine presence.",
    tags: ["SEO", "B2B Leads", "Google Ads"],
    color: "red",
    gradient: "from-red-50 to-rose-50",
    border: "border-red-100",
    badge: "bg-red-100 text-red-700",
    icon_bg: "bg-red-500",
    glow: "hover:shadow-[0_8px_40px_rgba(239,68,68,0.25)]",
    initials: "RE",
  },
]

export default function ClientsPortfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-50 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-green-50 border border-green-200 text-sm text-green-700 font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Our Client Portfolio
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Brands We've{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Grown Together</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            From startups to established enterprises — here are some of the amazing businesses we've partnered with and helped scale digitally.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {[
            { value: "100+", label: "Global Clients", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-100" },
            { value: "25+", label: "Years Experience", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-100" },
            { value: "50+", label: "Projects Delivered", color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${stat.bg} ${stat.border} border rounded-2xl p-6 text-center`}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`relative bg-gradient-to-br ${client.gradient} border ${client.border} rounded-2xl p-6 transition-all duration-300 group overflow-hidden ${client.glow}`}
            >
              {client.featured && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Star className="w-2.5 h-2.5" />
                  SISTER BRAND
                </div>
              )}

              {/* Glow shimmer */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/60 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Logo / initials */}
                <div className={`w-12 h-12 ${client.icon_bg} rounded-xl flex items-center justify-center mb-4 text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                  {client.initials}
                </div>

                <div className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${client.badge} mb-3`}>
                  {client.category}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{client.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {client.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-white/60 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {client.url !== "#" && (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-indigo-600 font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Globe className="w-3 h-3" />
                    Visit Website
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-indigo-100 rounded-3xl p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Let's build your brand's digital presence together. Get a free strategy call and see how we can grow your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <AnimatedButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                Book a Free Strategy Call
              </AnimatedButton>
            </Link>
            <Link href="/success-stories">
              <AnimatedButton variant="slim" className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm">
                View Success Stories
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
