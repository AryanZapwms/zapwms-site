"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  TrendingUp, Globe, Search, Share2, Video, Palette,
  Facebook, Instagram, Youtube, Sparkles, Mail, MousePointer, Linkedin,
  ArrowRight, ChevronRight
} from "lucide-react"

const services = [
  {
    id: "performance",
    icon: TrendingUp,
    title: "Performance Marketing",
    subtitle: "Turn Spend Into Revenue",
    description: "ROI-driven campaigns across Google, Meta, and e-commerce platforms. Every rupee tracked, every conversion counted.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Google Ads", "Meta Ads", "E-Commerce", "ROAS"],
    color: "#6366F1",
    light: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200",
    glow: "hover:shadow-indigo-200/60",
  },
  {
    id: "web",
    icon: Globe,
    title: "Website Development",
    subtitle: "Fast, Beautiful, Conversion-Ready",
    description: "Custom-built websites that rank on Google, load instantly, and turn visitors into customers — designed for every industry.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["Custom Design", "SEO-Ready", "Responsive", "CMS"],
    color: "#10B981",
    light: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200",
    glow: "hover:shadow-emerald-200/60",
  },
  {
    id: "seo",
    icon: Search,
    title: "Advanced SEO",
    subtitle: "#1 Rankings on Google",
    description: "Technical SEO, quality backlinks, on-page & off-page strategies that bring organic traffic and qualified leads consistently.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
    tags: ["On-Page SEO", "Backlinks", "Technical SEO", "Rank #1"],
    color: "#EF4444",
    light: "bg-red-50",
    badge: "bg-red-100 text-red-700",
    border: "border-red-200",
    glow: "hover:shadow-red-200/60",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Marketing",
    subtitle: "Build Community, Drive Sales",
    description: "Full-service social media management with strategy, content creation, posting, and analytics across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    tags: ["Content Creation", "Community", "Analytics", "Growth"],
    color: "#8B5CF6",
    light: "bg-purple-50",
    badge: "bg-purple-100 text-purple-700",
    border: "border-purple-200",
    glow: "hover:shadow-purple-200/60",
  },
  {
    id: "video",
    icon: Video,
    title: "2D Video & Animation",
    subtitle: "Stories That Sell",
    description: "High-impact explainer videos, brand stories, product demos, and motion graphics that captivate audiences and drive action.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    tags: ["Explainer Videos", "Motion Graphics", "Brand Stories", "Reels"],
    color: "#06B6D4",
    light: "bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700",
    border: "border-cyan-200",
    glow: "hover:shadow-cyan-200/60",
  },
  {
    id: "design",
    icon: Palette,
    title: "Graphic Design",
    subtitle: "Visual Identity That Stands Out",
    description: "Logos, brochures, social creatives, packaging, and everything visual — crafted to make your brand unmistakably yours.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    tags: ["Logo Design", "Branding", "Social Creatives", "Print"],
    color: "#F59E0B",
    light: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
    border: "border-amber-200",
    glow: "hover:shadow-amber-200/60",
  },
  {
    id: "meta",
    icon: Facebook,
    title: "Meta / Facebook Ads",
    subtitle: "Precision Targeting at Scale",
    description: "Pixel setup, A/B testing, audience segmentation, retargeting, and sales funnel ads that deliver real conversions.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    tags: ["Pixel Setup", "A/B Testing", "Retargeting", "Conversions"],
    color: "#3B82F6",
    light: "bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
    border: "border-blue-200",
    glow: "hover:shadow-blue-200/60",
  },
  {
    id: "instagram",
    icon: Instagram,
    title: "Instagram Marketing",
    subtitle: "Grow. Engage. Convert.",
    description: "Organic and paid Instagram growth with hashtag research, competitor analysis, Reels strategy, and engagement monitoring.",
    image: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80",
    tags: ["Reels Strategy", "Hashtags", "Paid Growth", "Engagement"],
    color: "#EC4899",
    light: "bg-pink-50",
    badge: "bg-pink-100 text-pink-700",
    border: "border-pink-200",
    glow: "hover:shadow-pink-200/60",
  },
  {
    id: "youtube",
    icon: Youtube,
    title: "YouTube Marketing",
    subtitle: "Views, Subscribers & Revenue",
    description: "Grow your YouTube channel with strategic content planning, SEO optimization, thumbnail design, and paid promotions.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
    tags: ["Channel Growth", "Video SEO", "Watch Hours", "Subscribers"],
    color: "#DC2626",
    light: "bg-rose-50",
    badge: "bg-rose-100 text-rose-700",
    border: "border-rose-200",
    glow: "hover:shadow-rose-200/60",
  },
  {
    id: "animation",
    icon: Sparkles,
    title: "Animation & Mascot",
    subtitle: "Bring Your Brand to Life",
    description: "3D animation, whiteboard videos, stop-motion, and custom mascot characters that make your brand instantly memorable.",
    image: "https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&q=80",
    tags: ["3D Animation", "Mascot Design", "Whiteboard", "Stop Motion"],
    color: "#D946EF",
    light: "bg-fuchsia-50",
    badge: "bg-fuchsia-100 text-fuchsia-700",
    border: "border-fuchsia-200",
    glow: "hover:shadow-fuchsia-200/60",
  },
  {
    id: "email",
    icon: Mail,
    title: "Email & Affiliate Marketing",
    subtitle: "Inbox to Income",
    description: "Targeted email campaigns, newsletter design, affiliate tracking, segmentation, and detailed analytics to maximize revenue.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    tags: ["Email Campaigns", "Segmentation", "Affiliate", "Analytics"],
    color: "#14B8A6",
    light: "bg-teal-50",
    badge: "bg-teal-100 text-teal-700",
    border: "border-teal-200",
    glow: "hover:shadow-teal-200/60",
  },
  {
    id: "ppc",
    icon: MousePointer,
    title: "Google Ads / PPC",
    subtitle: "Right Person. Right Moment.",
    description: "Pay-per-click campaigns with precise keyword targeting, bid strategy, and conversion optimization for maximum ROI.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Search Ads", "Display Ads", "Remarketing", "Shopping Ads"],
    color: "#2563EB",
    light: "bg-sky-50",
    badge: "bg-sky-100 text-sky-700",
    border: "border-sky-200",
    glow: "hover:shadow-sky-200/60",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    title: "LinkedIn Marketing",
    subtitle: "B2B Growth at Its Best",
    description: "Professional network growth, company page management, thought leadership content, and targeted B2B lead generation campaigns.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&q=80",
    tags: ["Lead Generation", "Company Page", "Thought Leadership", "B2B"],
    color: "#0EA5E9",
    light: "bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-300",
    glow: "hover:shadow-blue-200/60",
  },
]

export default function ServicesVisual() {
  const [activeTab, setActiveTab] = useState("all")
  const [hovered, setHovered] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Services" },
    { id: "marketing", label: "Marketing", ids: ["performance", "meta", "instagram", "youtube", "ppc", "email", "linkedin", "social"] },
    { id: "creative", label: "Creative", ids: ["design", "video", "animation"] },
    { id: "digital", label: "Digital", ids: ["web", "seo"] },
  ]

  const filtered = activeTab === "all"
    ? services
    : services.filter(s => categories.find(c => c.id === activeTab)?.ids?.includes(s.id))

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Soft background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.06),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.06),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-sm text-indigo-700 font-medium mb-5">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 animate-pulse" />
            13 Services · One Agency
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
            What We Do{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Best</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every service is purpose-built to grow your brand, drive traffic, and convert visitors into loyal customers.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid — image cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHovered(service.id)}
                  onHoverEnd={() => setHovered(null)}
                  className={`group relative bg-white rounded-3xl border ${service.border} overflow-hidden transition-all duration-300 hover:shadow-2xl ${service.glow} cursor-default`}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* Icon badge on image */}
                    <div
                      className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Subtitle on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white/90 text-xs font-medium tracking-wide uppercase">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {service.tags.map(tag => (
                        <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${service.badge}`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400">Learn more</span>
                      <motion.div
                        animate={{ x: hovered === service.id ? 4 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}15` }}
                      >
                        <ArrowRight className="w-4 h-4" style={{ color: service.color }} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-indigo-300/50 transition-all duration-300"
            >
              Get a Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <p className="text-sm text-gray-400 mt-3">No commitment · 30 min · Free</p>
        </motion.div>
      </div>
    </section>
  )
}
