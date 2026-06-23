"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

const clients = [
  {
    name: "Armorray",
    url: "https://armorray.com",
    category: "HealthTech / MedTech",
    description: "Professional web-based DICOM medical imaging platform for CT, MRI & X-ray diagnostics.",
    tags: ["Web Development", "Healthcare", "SaaS"],
    color: "#6366F1",
    bg: "bg-indigo-500",
    light: "from-indigo-50 to-blue-50",
    border: "border-indigo-100",
    badge: "bg-indigo-100 text-indigo-700",
    glow: "hover:shadow-indigo-200/70",
    initials: "AR",
  },
  {
    name: "CineCMS",
    url: "https://www.cinecms.in",
    category: "Music / Entertainment",
    description: "All-in-one music distribution & rights management platform for artists and labels.",
    tags: ["Branding", "Web Design", "Digital Marketing"],
    color: "#8B5CF6",
    bg: "bg-purple-500",
    light: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    badge: "bg-purple-100 text-purple-700",
    glow: "hover:shadow-purple-200/70",
    initials: "CC",
  },
  {
    name: "LinkNSmile",
    url: "https://linknsmile.com",
    category: "E-Commerce / Marketplace",
    description: "India's trusted online marketplace connecting small businesses, local sellers & conscious shoppers.",
    tags: ["E-Commerce", "SEO", "Performance Marketing"],
    color: "#EC4899",
    bg: "bg-pink-500",
    light: "from-pink-50 to-rose-50",
    border: "border-pink-100",
    badge: "bg-pink-100 text-pink-700",
    glow: "hover:shadow-pink-200/70",
    initials: "LS",
  },
  {
    name: "TradingWala",
    url: "https://tradingwala.com",
    category: "Finance / Trading",
    description: "Stock market trading platform offering insights, tools, and resources for Indian retail investors.",
    tags: ["Web Development", "Digital Marketing", "SEO"],
    color: "#10B981",
    bg: "bg-emerald-500",
    light: "from-emerald-50 to-green-50",
    border: "border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    glow: "hover:shadow-emerald-200/70",
    initials: "TW",
  },
  {
    name: "Movement Creations",
    url: "https://movementcreations.in",
    category: "Music / Film Distribution",
    description: "Full-service music, video & movie distribution company empowering independent artists.",
    tags: ["Branding", "Social Media", "Video Marketing"],
    color: "#F59E0B",
    bg: "bg-amber-500",
    light: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
    badge: "bg-amber-100 text-amber-700",
    glow: "hover:shadow-amber-200/70",
    initials: "MC",
  },
  {
    name: "InstaPeels",
    url: "https://instapeels.com",
    category: "Skincare / Beauty",
    description: "Pioneering home-use chemical peels in India — professional-grade cosmetic treatments for home use.",
    tags: ["Instagram Ads", "Meta Ads", "E-Commerce SEO"],
    color: "#06B6D4",
    bg: "bg-cyan-500",
    light: "from-cyan-50 to-teal-50",
    border: "border-cyan-100",
    badge: "bg-cyan-100 text-cyan-700",
    glow: "hover:shadow-cyan-200/70",
    initials: "IP",
  },
  {
    name: "FCRM Cambodia",
    url: "https://fcrmcambodia.healthcarese.asia",
    category: "Healthcare / International",
    description: "Healthcare service platform for Cambodia — digital presence, SEO and multilingual web development.",
    tags: ["Web Development", "International SEO", "Healthcare"],
    color: "#EF4444",
    bg: "bg-red-500",
    light: "from-red-50 to-rose-50",
    border: "border-red-100",
    badge: "bg-red-100 text-red-700",
    glow: "hover:shadow-red-200/70",
    initials: "FC",
  },
  {
    name: "DevAccounts",
    url: "https://devaccounts.com",
    category: "Finance / Accounting",
    description: "Developer-focused accounting and financial management platform with full digital branding.",
    tags: ["Branding", "Web Design", "Google Ads"],
    color: "#3B82F6",
    bg: "bg-blue-500",
    light: "from-blue-50 to-sky-50",
    border: "border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    glow: "hover:shadow-blue-200/70",
    initials: "DA",
  },
  {
    name: "Samson Orgo",
    url: "https://samsonorgo.com",
    category: "Organic / FMCG",
    description: "Organic products brand with full digital marketing, brand identity and online growth strategy.",
    tags: ["Branding", "Social Media", "Performance Marketing"],
    color: "#84CC16",
    bg: "bg-lime-500",
    light: "from-lime-50 to-green-50",
    border: "border-lime-100",
    badge: "bg-lime-100 text-lime-700",
    glow: "hover:shadow-lime-200/70",
    initials: "SO",
  },
  {
    name: "Heckyl Technologies",
    url: "https://www.heckyl.com",
    category: "FinTech / Data Analytics",
    description: "AI-powered financial analytics platform serving 35k+ companies with real-time market intelligence.",
    tags: ["SEO", "LinkedIn Marketing", "B2B Digital"],
    color: "#0EA5E9",
    bg: "bg-sky-500",
    light: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    badge: "bg-sky-100 text-sky-700",
    glow: "hover:shadow-sky-200/70",
    initials: "HT",
    featured: true,
  },
  {
    name: "Highbrow Healthcare",
    url: "https://highbrowhealthcare.com",
    category: "Healthcare / Manufacturing",
    description: "Third-party cosmetic manufacturer of soaps, shampoos, lotions & skincare — solar-powered facility.",
    tags: ["Web Development", "SEO", "Branding"],
    color: "#14B8A6",
    bg: "bg-teal-500",
    light: "from-teal-50 to-emerald-50",
    border: "border-teal-100",
    badge: "bg-teal-100 text-teal-700",
    glow: "hover:shadow-teal-200/70",
    initials: "HH",
  },
  {
    name: "Nezal Herbocare",
    url: "https://nezalherbocare.com",
    category: "Herbal Skincare / D2C",
    description: "100% natural herbal skincare brand — eco-friendly soaps, serums, shampoos and body care products.",
    tags: ["Instagram Ads", "Facebook Ads", "E-Commerce"],
    color: "#22C55E",
    bg: "bg-green-500",
    light: "from-green-50 to-emerald-50",
    border: "border-green-100",
    badge: "bg-green-100 text-green-700",
    glow: "hover:shadow-green-200/70",
    initials: "NZ",
  },
  {
    name: "Lavex",
    url: "https://lavex.in",
    category: "B2B / Industrial",
    description: "Industrial and commercial solutions brand — digital marketing, SEO and B2B lead generation.",
    tags: ["Google Ads", "SEO", "B2B Marketing"],
    color: "#F97316",
    bg: "bg-orange-500",
    light: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    badge: "bg-orange-100 text-orange-700",
    glow: "hover:shadow-orange-200/70",
    initials: "LX",
  },
  {
    name: "Usiksa",
    url: "https://usiksa.com",
    category: "EdTech / E-Learning",
    description: "Online learning platform delivering skill-based education and professional development courses.",
    tags: ["Performance Marketing", "Social Media", "Web Design"],
    color: "#A855F7",
    bg: "bg-purple-500",
    light: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    badge: "bg-violet-100 text-violet-700",
    glow: "hover:shadow-violet-200/70",
    initials: "US",
  },
  {
    name: "ApexHide",
    url: "https://www.apexhide.com",
    category: "Manufacturing / Leather",
    description: "Premium leather and hide products manufacturer — digital presence, SEO and export marketing.",
    tags: ["Web Development", "Export SEO", "Branding"],
    color: "#78716C",
    bg: "bg-stone-500",
    light: "from-stone-50 to-gray-50",
    border: "border-stone-100",
    badge: "bg-stone-100 text-stone-700",
    glow: "hover:shadow-stone-200/70",
    initials: "AH",
  },
  {
    name: "Denim Fabrics Wholesale",
    url: "https://Denimfabricswholesale.co.za",
    category: "Fashion / Wholesale",
    description: "South Africa's wholesale denim fabric supplier — international digital marketing and SEO.",
    tags: ["International SEO", "E-Commerce", "Social Media"],
    color: "#1D4ED8",
    bg: "bg-blue-700",
    light: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-800",
    glow: "hover:shadow-blue-200/70",
    initials: "DF",
  },
  {
    name: "TrioFit Nutracare",
    url: "https://triofitnutracare.com",
    category: "Health & Nutrition",
    description: "Premium nutraceutical brand offering fitness supplements and health products across India.",
    tags: ["Meta Ads", "Instagram Marketing", "E-Commerce SEO"],
    color: "#DC2626",
    bg: "bg-red-600",
    light: "from-red-50 to-pink-50",
    border: "border-red-100",
    badge: "bg-red-100 text-red-700",
    glow: "hover:shadow-red-200/70",
    initials: "TF",
  },
]

const categories = ["All", "Healthcare", "E-Commerce", "Finance", "Skincare", "Music", "Tech"]

export default function ClientsPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = activeFilter === "All"
    ? clients
    : clients.filter(c =>
        c.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        c.tags.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
      )

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 font-medium mb-5 shadow-sm">
            <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
            Real Clients · Real Results
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
            Brands We've{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Grown Together
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            From Mumbai startups to international businesses — here are the brands we've built, scaled, and continue to grow.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: "17+", label: "Active Clients", color: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
            { value: "25+", label: "Years Experience", color: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
            { value: "8+", label: "Industries Served", color: "text-pink-600", bg: "bg-pink-50 border-pink-100" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${s.bg} border rounded-2xl p-5 text-center`}
            >
              <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Client grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
              onHoverStart={() => setHovered(client.name)}
              onHoverEnd={() => setHovered(null)}
              className={`relative bg-gradient-to-br ${client.light} border ${client.border} rounded-2xl p-5 transition-all duration-300 group overflow-hidden hover:shadow-xl ${client.glow} cursor-pointer block`}
            >
              {client.featured && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                  ★ FEATURED
                </div>
              )}

              {/* Shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Logo / Initials */}
                <div
                  className={`w-12 h-12 ${client.bg} rounded-xl flex items-center justify-center text-white font-black text-sm mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  {client.initials}
                </div>

                {/* Category badge */}
                <div className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2 ${client.badge}`}>
                  {client.category}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-1.5">{client.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{client.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {client.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-white/70 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Visit link — appears on hover */}
                <div className={`flex items-center gap-1 text-xs font-semibold mt-3 transition-all duration-200 ${hovered === client.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`} style={{ color: client.color }}>
                  <Globe className="w-3 h-3" />
                  Visit Website
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 sm:p-14 text-center text-white"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Be Our Next Success Story?</h3>
          <p className="text-indigo-100 mb-8 max-w-xl mx-auto text-lg">
            Join 17+ brands that trust ZAPWMS to grow their digital presence. Get a free strategy call today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-indigo-700 font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Book a Free Strategy Call
              </motion.button>
            </Link>
            <Link href="/get-started">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/15 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/25 transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
