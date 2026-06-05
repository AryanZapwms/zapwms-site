"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  TrendingUp, Instagram, Facebook, Palette, Share2,
  Globe, Search, Youtube, Video, Sparkles,
  Mail, MousePointer, Linkedin, ArrowRight, ChevronDown
} from "lucide-react"
import AnimatedButton from "./animated-button"
import Link from "next/link"

const services = [
  {
    id: "performance-marketing",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Performance Marketing",
    tagline: "Sales · Income · Growth",
    description:
      "Results-driven campaigns built to maximize your ROI and ROAS across every channel. We drive measurable outcomes — not vanity metrics.",
    features: [
      "Search Engine Marketing",
      "Social Media Marketing",
      "Email & YouTube Marketing",
      "E-commerce Product Ads",
      "Native Ads & Affiliate Marketing",
    ],
    outcomes: ["Visibility", "Traffic", "Audience Reach", "Sales", "ROI", "ROAS"],
    color: "blue",
    gradient: "from-blue-500/20 to-cyan-600/10",
    border: "border-blue-500/30",
    hover: "hover:border-blue-400/50",
    icon_color: "text-blue-400",
    glow: "shadow-blue-500/20",
    dot: "bg-blue-500",
    pill_bg: "bg-blue-500/10",
    pill_text: "text-blue-300",
  },
  {
    id: "instagram-marketing",
    icon: <Instagram className="w-8 h-8" />,
    title: "Instagram Marketing",
    tagline: "Promotion & Growth",
    description:
      "Grow your Instagram with expert management of organic and paid campaigns, continuous monitoring, and detailed reporting.",
    features: [
      "Page Growth & Active Followers",
      "Hashtag Research",
      "Targeting & Competitor Analysis",
      "Stories, Reels & Posts",
      "Monitoring & Engagement",
    ],
    outcomes: ["More Followers", "Higher Engagement", "Brand Visibility"],
    color: "pink",
    gradient: "from-pink-500/20 to-rose-600/10",
    border: "border-pink-500/30",
    hover: "hover:border-pink-400/50",
    icon_color: "text-pink-400",
    glow: "shadow-pink-500/20",
    dot: "bg-pink-500",
    pill_bg: "bg-pink-500/10",
    pill_text: "text-pink-300",
  },
  {
    id: "meta-ads",
    icon: <Facebook className="w-8 h-8" />,
    title: "Meta Facebook Ads",
    tagline: "For Your Business",
    description:
      "Boost your brand, drive qualified leads, and achieve real conversions through professionally managed Meta ad campaigns.",
    features: [
      "Pixel Setup & A/B Testing",
      "Sales Funnel Creation",
      "Re-Targeting Campaigns",
      "Stories, Reels & Video Ads",
      "Traffic & Ads Management",
    ],
    outcomes: ["Brand Awareness", "Lead Generation", "Real Conversions"],
    color: "indigo",
    gradient: "from-indigo-500/20 to-blue-600/10",
    border: "border-indigo-500/30",
    hover: "hover:border-indigo-400/50",
    icon_color: "text-indigo-400",
    glow: "shadow-indigo-500/20",
    dot: "bg-indigo-500",
    pill_bg: "bg-indigo-500/10",
    pill_text: "text-indigo-300",
  },
  {
    id: "graphic-design",
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Designer",
    tagline: "Graphic Designing Services",
    description:
      "Elevate your online presence with professional graphic design that boosts engagement and drives sales through stunning visuals.",
    features: [
      "Logo Creation & Branding",
      "Brochures, Flyers & Menus",
      "Creative Images & Artworks",
      "Color Coded Pages & Illustrations",
      "Interactive Business Cards & PPTs",
    ],
    outcomes: ["Brand Identity", "Increased Engagement", "Higher Sales"],
    color: "orange",
    gradient: "from-orange-500/20 to-amber-600/10",
    border: "border-orange-500/30",
    hover: "hover:border-orange-400/50",
    icon_color: "text-orange-400",
    glow: "shadow-orange-500/20",
    dot: "bg-orange-500",
    pill_bg: "bg-orange-500/10",
    pill_text: "text-orange-300",
  },
  {
    id: "social-media",
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media Marketing",
    tagline: "Promotion & Growth",
    description:
      "Connect with customers, promote your products and services, and convert visitors into loyal customers through strategic social media management.",
    features: [
      "Organic & Paid Campaigns",
      "Create Pages & Profiles",
      "Page Likes & Followers Growth",
      "Attractive Creatives",
      "Manage & Optimization",
    ],
    outcomes: ["Customer Connection", "Increased Sales", "Brand Growth"],
    color: "purple",
    gradient: "from-purple-500/20 to-violet-600/10",
    border: "border-purple-500/30",
    hover: "hover:border-purple-400/50",
    icon_color: "text-purple-400",
    glow: "shadow-purple-500/20",
    dot: "bg-purple-500",
    pill_bg: "bg-purple-500/10",
    pill_text: "text-purple-300",
  },
  {
    id: "web-development",
    icon: <Globe className="w-8 h-8" />,
    title: "Website Developer",
    tagline: "For Your Website",
    description:
      "From blogs to enterprise e-commerce, we build fully responsive, SEO-friendly websites across every industry and use case.",
    features: [
      "Web Design & Front-End Development",
      "SEO Friendly Architecture",
      "Fully Responsive Layouts",
      "Web Maintenance & Support",
      "Blogs, Corporate, E-Commerce & More",
    ],
    outcomes: ["Professional Presence", "More Traffic", "Better Conversions"],
    color: "green",
    gradient: "from-green-500/20 to-emerald-600/10",
    border: "border-green-500/30",
    hover: "hover:border-green-400/50",
    icon_color: "text-green-400",
    glow: "shadow-green-500/20",
    dot: "bg-green-500",
    pill_bg: "bg-green-500/10",
    pill_text: "text-green-300",
  },
  {
    id: "seo",
    icon: <Search className="w-8 h-8" />,
    title: "Advance SEO Service",
    tagline: "#1 Rank on Google",
    description:
      "Dominate search rankings with our advanced SEO strategies — from on-page optimization to quality backlink building and competitor analysis.",
    features: [
      "Search Ranking Improvement",
      "Quality Backlinks Building",
      "Competitor Analysis",
      "On & Off Page Optimization",
      "More Traffic, Leads & Sales",
    ],
    outcomes: ["Page 1 Rankings", "Organic Traffic", "Lead Generation"],
    color: "red",
    gradient: "from-red-500/20 to-rose-600/10",
    border: "border-red-500/30",
    hover: "hover:border-red-400/50",
    icon_color: "text-red-400",
    glow: "shadow-red-500/20",
    dot: "bg-red-500",
    pill_bg: "bg-red-500/10",
    pill_text: "text-red-300",
  },
  {
    id: "youtube",
    icon: <Youtube className="w-8 h-8" />,
    title: "YouTube Marketing",
    tagline: "Promotion & Growth",
    description:
      "Increase your video views, grow your subscriber base, and build an engaged audience that drives traffic and revenue to your business.",
    features: [
      "Likes & Views Growth",
      "Relevant Subscribers",
      "Comments & Watch Hours",
      "Traffic & Ranking Boost",
      "Competitor Analysis",
    ],
    outcomes: ["More Views", "Channel Growth", "Audience Engagement"],
    color: "red",
    gradient: "from-red-600/20 to-orange-600/10",
    border: "border-red-600/30",
    hover: "hover:border-red-500/50",
    icon_color: "text-red-500",
    glow: "shadow-red-600/20",
    dot: "bg-red-600",
    pill_bg: "bg-red-600/10",
    pill_text: "text-red-300",
  },
  {
    id: "video-creation",
    icon: <Video className="w-8 h-8" />,
    title: "2D Video Creations",
    tagline: "Professional Video Makers",
    description:
      "High-ROI videos for startups and companies — 100% customized artwork, result-oriented, impactful and eye-catching productions.",
    features: [
      "Promotional & Explainer Videos",
      "Corporate & Product Videos",
      "Social Media & Training Videos",
      "Motion Graphics & Animation",
      "Brand Story & Educational Videos",
    ],
    outcomes: ["Brand Storytelling", "Higher Engagement", "Increased ROI"],
    color: "sky",
    gradient: "from-sky-500/20 to-blue-600/10",
    border: "border-sky-500/30",
    hover: "hover:border-sky-400/50",
    icon_color: "text-sky-400",
    glow: "shadow-sky-500/20",
    dot: "bg-sky-500",
    pill_bg: "bg-sky-500/10",
    pill_text: "text-sky-300",
  },
  {
    id: "animation",
    icon: <Sparkles className="w-8 h-8" />,
    title: "Animation & Mascot",
    tagline: "Bring Your Brand to Life",
    description:
      "From 3D animation to whiteboard explainers, we create every style of animation — including custom mascot characters for your brand.",
    features: [
      "3D & Frame-by-Frame Animation",
      "Cut-out & Stop Motion Animation",
      "Whiteboard & Retro Animation",
      "Live Animated & 360 Animation",
      "Augmented Reality Animation",
    ],
    outcomes: ["Brand Character", "Viral Potential", "Audience Retention"],
    color: "fuchsia",
    gradient: "from-fuchsia-500/20 to-purple-600/10",
    border: "border-fuchsia-500/30",
    hover: "hover:border-fuchsia-400/50",
    icon_color: "text-fuchsia-400",
    glow: "shadow-fuchsia-500/20",
    dot: "bg-fuchsia-500",
    pill_bg: "bg-fuchsia-500/10",
    pill_text: "text-fuchsia-300",
  },
  {
    id: "email-marketing",
    icon: <Mail className="w-8 h-8" />,
    title: "Affiliate Email Marketing",
    tagline: "Increase Sales & Revenue",
    description:
      "Reach your target audience by segmenting and targeting profiled email subscribers with rich analytics-driven campaigns.",
    features: [
      "Email Marketing Campaigns",
      "Email Template Design",
      "Tracking & Reporting",
      "Follow-Up Strategy",
      "Engagement Optimization",
    ],
    outcomes: ["More Revenue", "Better Open Rates", "Customer Retention"],
    color: "teal",
    gradient: "from-teal-500/20 to-cyan-600/10",
    border: "border-teal-500/30",
    hover: "hover:border-teal-400/50",
    icon_color: "text-teal-400",
    glow: "shadow-teal-500/20",
    dot: "bg-teal-500",
    pill_bg: "bg-teal-500/10",
    pill_text: "text-teal-300",
  },
  {
    id: "google-ads",
    icon: <MousePointer className="w-8 h-8" />,
    title: "Google Ads / PPC",
    tagline: "Give Your Brand a Larger Reach",
    description:
      "From brand-new startups to established companies, our PPC strategies are designed to meet your market conditions and business goals.",
    features: [
      "Pixel Setup & A/B Testing",
      "Sales Funnel Strategy",
      "Traffic & Re-Targeting",
      "PPC Remarketing",
      "Display & Video Advertising",
    ],
    outcomes: ["Positive ROI", "Qualified Traffic", "Brand Reach"],
    color: "blue",
    gradient: "from-blue-600/20 to-green-500/10",
    border: "border-blue-600/30",
    hover: "hover:border-blue-500/50",
    icon_color: "text-blue-500",
    glow: "shadow-blue-600/20",
    dot: "bg-blue-600",
    pill_bg: "bg-blue-600/10",
    pill_text: "text-blue-300",
  },
  {
    id: "linkedin",
    icon: <Linkedin className="w-8 h-8" />,
    title: "LinkedIn Marketing",
    tagline: "Professional Network Growth",
    description:
      "Establish your professional presence and grow your B2B network with expert LinkedIn page management and content strategy.",
    features: [
      "Page Setup & Profile Build Up",
      "Page Optimisation",
      "Company Content Creation",
      "Personal Profile Creation",
      "Network Growth Strategy",
    ],
    outcomes: ["B2B Leads", "Professional Authority", "Network Growth"],
    color: "blue",
    gradient: "from-blue-700/20 to-blue-500/10",
    border: "border-blue-700/30",
    hover: "hover:border-blue-600/50",
    icon_color: "text-blue-600",
    glow: "shadow-blue-700/20",
    dot: "bg-blue-700",
    pill_bg: "bg-blue-700/10",
    pill_text: "text-blue-300",
  },
]

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <section className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm text-gray-300 mb-8">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2.5 animate-pulse" />
             Digital Service Agency · Est. 1999
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Grow Online
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From performance marketing to animation — 13 services, one trusted partner, and 25+ years of global expertise behind every campaign.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-12 mb-20"
        >
          {[
            { value: "13+", label: "Service Categories" },
            { value: "25+", label: "Years Experience" },
            { value: "100+", label: "Global Clients" },
            { value: "50+", label: "Projects Delivered" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.01 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className={`relative bg-gray-900/50 border ${service.border} ${service.hover} rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
              style={{
                boxShadow:
                  hoveredService === index
                    ? `0 25px 50px -12px var(--tw-shadow-color)`
                    : "none",
              }}
            >
              {/* Animated background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon + tagline */}
                <div className={`${service.icon_color} mb-2`}>{service.icon}</div>
                <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {service.tagline}
                </span>

                <h3 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Outcome pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.outcomes.map((o) => (
                    <span
                      key={o}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${service.pill_bg} ${service.pill_text} border border-white/5`}
                    >
                      {o}
                    </span>
                  ))}
                </div>

                {/* Features — expandable */}
                <div className="mb-6">
                  <button
                    onClick={() =>
                      setExpandedService(expandedService === index ? null : index)
                    }
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-3"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${expandedService === index ? "rotate-180" : ""
                        }`}
                    />
                    {expandedService === index ? "Hide" : "View"} what's included
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedService === index ? "auto" : 0,
                      opacity: expandedService === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2.5 pt-2 border-t border-white/10">
                      {service.features.map((feature) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-center text-gray-300 text-sm"
                        >
                          <div className={`w-1.5 h-1.5 ${service.dot} rounded-full mr-3 flex-shrink-0`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* CTA row */}
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-500">Tailor-Made Pricing</span>
                  <Link href="/contact">
                    <AnimatedButton variant="slim" className="bg-white text-black hover:bg-gray-100">
                      <span className="flex items-center">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 rounded-3xl p-10 sm:p-16 backdrop-blur-sm overflow-hidden text-center"
        >
          {/* Animated radial background */}
          <motion.div
            className="absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(147,51,234,0.12) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(34,197,94,0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Ready to Scale?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10">
              Book a free strategy call and we'll map out the exact services your business needs to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
                  <span className="flex items-center">
                    Book a Free Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </AnimatedButton>
              </Link>
              <Link href="/get-started">
                <AnimatedButton
                  variant="slim"
                  className="bg-transparent border border-white/30 text-white hover:bg-white/10"
                >
                  Get Started
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}