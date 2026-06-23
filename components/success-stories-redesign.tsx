"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, ArrowRight, TrendingUp, ExternalLink, Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const stories = [
  {
    company: "Heckyl Technologies",
    url: "https://www.heckyl.com",
    industry: "FinTech / Data Analytics",
    initials: "HT",
    color: "#0EA5E9",
    bg: "bg-sky-500",
    gradient: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    activeBg: "from-sky-500/10 to-blue-500/10",
    activeBorder: "border-sky-400/40",
    results: { stat1: "35K+", label1: "Companies Served", stat2: "Real-Time", label2: "Market Data", stat3: "Pan-India", label3: "Coverage" },
    services: ["LinkedIn Marketing", "B2B Digital Strategy", "SEO", "Content Marketing"],
    quote: "ZAPWMS helped us establish a strong digital presence in the highly competitive FinTech space. Our organic reach and B2B lead quality improved significantly.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    about: "AI-powered financial analytics platform serving brokers, wealth managers and financial institutions across India with real-time market intelligence.",
  },
  {
    company: "InstaPeels",
    url: "https://instapeels.com",
    industry: "Skincare / D2C",
    initials: "IP",
    color: "#EC4899",
    bg: "bg-pink-500",
    gradient: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    activeBg: "from-pink-500/10 to-rose-500/10",
    activeBorder: "border-pink-400/40",
    results: { stat1: "3x", label1: "Online Sales", stat2: "Instagram", label2: "Growth", stat3: "D2C", label3: "Brand Launch" },
    services: ["Instagram Ads", "Meta Facebook Ads", "E-Commerce SEO", "Performance Marketing"],
    quote: "Our D2C launch was powered by ZAPWMS. From zero to a recognized skincare brand online — they handled everything from ads to SEO flawlessly.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    about: "India's pioneer in home-use chemical peels — bringing professional-grade cosmetic treatments to everyday consumers through a seamless D2C model.",
  },
  {
    company: "Nezal Herbocare",
    url: "https://nezalherbocare.com",
    industry: "Herbal Skincare",
    initials: "NZ",
    color: "#22C55E",
    bg: "bg-green-500",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-200",
    activeBg: "from-green-500/10 to-emerald-500/10",
    activeBorder: "border-green-400/40",
    results: { stat1: "5x", label1: "Social Reach", stat2: "₹0 → ₹L", label2: "Monthly Revenue", stat3: "Organic", label3: "Brand Identity" },
    services: ["Social Media Marketing", "Instagram Ads", "Brand Identity", "E-Commerce"],
    quote: "ZAPWMS built our brand from scratch — logo, social media, ads, everything. We went from an idea to a selling brand in just a few months.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
    about: "100% natural herbal skincare brand offering eco-friendly soaps, serums, shampoos and body care products crafted from natural botanicals.",
  },
  {
    company: "Movement Creations",
    url: "https://movementcreations.in",
    industry: "Music & Film",
    initials: "MC",
    color: "#F59E0B",
    bg: "bg-amber-500",
    gradient: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    activeBg: "from-amber-500/10 to-yellow-500/10",
    activeBorder: "border-amber-400/40",
    results: { stat1: "200+", label1: "Artists Served", stat2: "Global", label2: "Distribution", stat3: "Multi-Platform", label3: "Presence" },
    services: ["Branding", "Social Media", "YouTube Marketing", "Video Production"],
    quote: "ZAPWMS gave Movement Creations the digital presence it deserved. Our social engagement and artist acquisition grew dramatically after partnering with them.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    about: "Full-service music, video & film distribution company helping independent artists and labels get their content on global streaming platforms.",
  },
  {
    company: "Armorray",
    url: "https://armorray.com",
    industry: "HealthTech / MedTech",
    initials: "AR",
    color: "#6366F1",
    bg: "bg-indigo-500",
    gradient: "from-indigo-50 to-blue-50",
    border: "border-indigo-200",
    activeBg: "from-indigo-500/10 to-blue-500/10",
    activeBorder: "border-indigo-400/40",
    results: { stat1: "Web", label1: "Platform Launch", stat2: "SEO", label2: "Traffic Growth", stat3: "B2B", label3: "Leads Generated" },
    services: ["Web Development", "SEO", "Google Ads", "LinkedIn Marketing"],
    quote: "Building a credible digital presence for a medical platform is no easy task. ZAPWMS understood the space and delivered a website and marketing strategy that works.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    about: "Advanced web-based DICOM medical imaging viewer enabling radiologists and doctors to analyze CT, MRI and X-ray scans with clinical precision.",
  },
  {
    company: "CineCMS",
    url: "https://www.cinecms.in",
    industry: "Music Distribution",
    initials: "CC",
    color: "#8B5CF6",
    bg: "bg-purple-500",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    activeBg: "from-purple-500/10 to-violet-500/10",
    activeBorder: "border-purple-400/40",
    results: { stat1: "Brand", label1: "Identity Created", stat2: "Digital", label2: "Marketing Setup", stat3: "Artist", label3: "Community Built" },
    services: ["Branding", "Web Design", "Social Media", "YouTube Marketing"],
    quote: "CineCMS needed a strong brand identity and digital setup. ZAPWMS delivered a complete package — from logo to social media to a marketing strategy that resonates with artists.",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
    about: "All-in-one music distribution and rights management platform empowering independent artists and labels to distribute, manage and monetize their music globally.",
  },
]

export default function SuccessStoriesRedesign() {
  const [activeStory, setActiveStory] = useState(0)
  const active = stories[activeStory]

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-sm text-green-700 font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real Results from Real Clients
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Success Stories That{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Real brands, real growth. Here's how we've helped our clients achieve remarkable results.
          </p>
        </motion.div>

        {/* Story selector cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {stories.map((story, index) => (
            <motion.button
              key={story.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              onClick={() => setActiveStory(index)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                activeStory === index
                  ? `bg-gradient-to-br ${story.activeBg} ${story.activeBorder} shadow-lg scale-[1.02]`
                  : `bg-white ${story.border} hover:shadow-md hover:scale-[1.01]`
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${story.bg} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                    {story.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{story.company}</div>
                    <div className="text-xs text-gray-500">{story.industry}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="text-center">
                    <div className="text-lg font-black" style={{ color: story.color }}>{story.results.stat1}</div>
                    <div className="text-[10px] text-gray-400 leading-tight">{story.results.label1}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-black" style={{ color: story.color }}>{story.results.stat2}</div>
                    <div className="text-[10px] text-gray-400 leading-tight">{story.results.label2}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-black" style={{ color: story.color }}>{story.results.stat3}</div>
                    <div className="text-[10px] text-gray-400 leading-tight">{story.results.label3}</div>
                  </div>
                </div>

                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">"{story.quote}"</p>

                <div className={`flex items-center gap-1 text-xs font-semibold mt-3 transition-opacity duration-200 ${activeStory === index ? "opacity-100" : "opacity-0 group-hover:opacity-70"}`} style={{ color: story.color }}>
                  View case study <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Expanded case study panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={`bg-gradient-to-br ${active.gradient} border ${active.border} rounded-3xl overflow-hidden shadow-xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: content */}
              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${active.bg} rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md`}>
                    {active.initials}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{active.company}</h3>
                    <span className="text-sm text-gray-500">{active.industry}</span>
                  </div>
                </div>

                {/* About */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 p-4 bg-white/60 rounded-xl border border-white">
                  {active.about}
                </p>

                {/* Quote */}
                <blockquote className="text-gray-700 text-base leading-relaxed italic mb-6">
                  "{active.quote}"
                </blockquote>

                {/* Services */}
                <div className="mb-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Services Provided</p>
                  <div className="flex flex-wrap gap-2">
                    {active.services.map(s => (
                      <span key={s} className="text-xs font-semibold px-3 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stars + CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">5.0 / 5.0</span>
                  </div>
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all"
                    style={{ color: active.color }}
                  >
                    <Globe className="w-4 h-4" />
                    Visit Site
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right: image + stats */}
              <div className="relative">
                <div className="h-64 lg:h-full min-h-[300px] relative overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Floating stat cards over image */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-2">
                    {[
                      { value: active.results.stat1, label: active.results.label1 },
                      { value: active.results.stat2, label: active.results.label2 },
                      { value: active.results.stat3, label: active.results.label3 },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/90 backdrop-blur-sm rounded-xl p-2.5 text-center shadow-lg"
                      >
                        <div className="text-sm font-black text-gray-900">{stat.value}</div>
                        <div className="text-[10px] text-gray-500 leading-tight">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-5 text-lg">Want results like these for your brand?</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-indigo-300/50 transition-all"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
