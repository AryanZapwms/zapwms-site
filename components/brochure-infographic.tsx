"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
    TrendingUp, Instagram, Facebook, Palette, Share2,
    Globe, Search, Youtube, Video, Sparkles,
    Mail, MousePointer, Linkedin, ArrowRight, ChevronRight
} from "lucide-react"
import Link from "next/link"
import AnimatedButton from "./animated-button"

const services = [
    {
        id: "performance", number: "01", icon: TrendingUp, title: "Performance Marketing",
        tagline: "Sales · Income · Growth",
        tags: ["Search Engine Marketing", "Social Media Marketing", "E-commerce Ads", "Native & Affiliate Ads"],
        outcomes: ["Visibility", "Traffic", "ROI", "ROAS"],
        color: "#6366F1", bg: "bg-indigo-500", lightBg: "bg-indigo-50", lightBorder: "border-indigo-100",
        textColor: "text-indigo-700", tagBg: "bg-indigo-100 text-indigo-700",
    },
    {
        id: "instagram", number: "02", icon: Instagram, title: "Instagram Marketing",
        tagline: "Promotion & Growth",
        tags: ["Page Growth", "Hashtag Research", "Stories & Reels", "Engagement Monitoring"],
        outcomes: ["Followers", "Engagement", "Visibility"],
        color: "#EC4899", bg: "bg-pink-500", lightBg: "bg-pink-50", lightBorder: "border-pink-100",
        textColor: "text-pink-700", tagBg: "bg-pink-100 text-pink-700",
    },
    {
        id: "meta", number: "03", icon: Facebook, title: "Meta Facebook Ads",
        tagline: "For Your Business",
        tags: ["Pixel Setup", "A/B Testing", "Sales Funnel", "Re-Targeting"],
        outcomes: ["Brand Awareness", "Leads", "Conversions"],
        color: "#6366F1", bg: "bg-blue-600", lightBg: "bg-blue-50", lightBorder: "border-blue-100",
        textColor: "text-blue-700", tagBg: "bg-blue-100 text-blue-700",
    },
    {
        id: "design", number: "04", icon: Palette, title: "Creative Designer",
        tagline: "Graphic Designing Services",
        tags: ["Logo Creation", "Brochures & Flyers", "Illustrations", "Business Cards"],
        outcomes: ["Brand Identity", "Engagement", "Sales"],
        color: "#F59E0B", bg: "bg-amber-500", lightBg: "bg-amber-50", lightBorder: "border-amber-100",
        textColor: "text-amber-700", tagBg: "bg-amber-100 text-amber-700",
    },
    {
        id: "social", number: "05", icon: Share2, title: "Social Media Marketing",
        tagline: "Promotion & Growth",
        tags: ["Organic & Paid", "Page Management", "Attractive Creatives", "Optimization"],
        outcomes: ["Connection", "Sales", "Brand Growth"],
        color: "#8B5CF6", bg: "bg-purple-500", lightBg: "bg-purple-50", lightBorder: "border-purple-100",
        textColor: "text-purple-700", tagBg: "bg-purple-100 text-purple-700",
    },
    {
        id: "web", number: "06", icon: Globe, title: "Website Developer",
        tagline: "For Your Website",
        tags: ["Web Design", "SEO Friendly", "Fully Responsive", "Web Maintenance"],
        outcomes: ["Presence", "Traffic", "Conversions"],
        color: "#10B981", bg: "bg-emerald-500", lightBg: "bg-emerald-50", lightBorder: "border-emerald-100",
        textColor: "text-emerald-700", tagBg: "bg-emerald-100 text-emerald-700",
    },
    {
        id: "seo", number: "07", icon: Search, title: "Advance SEO Service",
        tagline: "#1 Rank on Google",
        tags: ["Search Ranking", "Quality Backlinks", "Competitor Analysis", "On & Off Page"],
        outcomes: ["Page 1 Rank", "Organic Traffic", "More Leads"],
        color: "#EF4444", bg: "bg-red-500", lightBg: "bg-red-50", lightBorder: "border-red-100",
        textColor: "text-red-700", tagBg: "bg-red-100 text-red-700",
    },
    {
        id: "youtube", number: "08", icon: Youtube, title: "YouTube Marketing",
        tagline: "Promotion & Growth",
        tags: ["Views & Likes", "Subscribers", "Watch Hours", "Traffic & Ranking"],
        outcomes: ["Views", "Subscribers", "Engagement"],
        color: "#EF4444", bg: "bg-red-600", lightBg: "bg-rose-50", lightBorder: "border-rose-100",
        textColor: "text-rose-700", tagBg: "bg-rose-100 text-rose-700",
    },
    {
        id: "video", number: "09", icon: Video, title: "2D Video Creations",
        tagline: "Professional Video Makers",
        tags: ["Explainer Videos", "Brand Story", "Motion Graphics", "Social Media Videos"],
        outcomes: ["Storytelling", "Engagement", "ROI"],
        color: "#06B6D4", bg: "bg-cyan-500", lightBg: "bg-cyan-50", lightBorder: "border-cyan-100",
        textColor: "text-cyan-700", tagBg: "bg-cyan-100 text-cyan-700",
    },
    {
        id: "animation", number: "10", icon: Sparkles, title: "Animation & Mascot",
        tagline: "Bring Your Brand to Life",
        tags: ["3D Animation", "Whiteboard", "Stop Motion", "360 Animation"],
        outcomes: ["Brand Character", "Viral Potential", "Retention"],
        color: "#D946EF", bg: "bg-fuchsia-500", lightBg: "bg-fuchsia-50", lightBorder: "border-fuchsia-100",
        textColor: "text-fuchsia-700", tagBg: "bg-fuchsia-100 text-fuchsia-700",
    },
    {
        id: "email", number: "11", icon: Mail, title: "Affiliate Email Marketing",
        tagline: "Increase Sales & Revenue",
        tags: ["Email Campaigns", "Template Design", "Tracking & Reporting", "Follow-Up Strategy"],
        outcomes: ["Revenue", "Open Rates", "Retention"],
        color: "#14B8A6", bg: "bg-teal-500", lightBg: "bg-teal-50", lightBorder: "border-teal-100",
        textColor: "text-teal-700", tagBg: "bg-teal-100 text-teal-700",
    },
    {
        id: "ppc", number: "12", icon: MousePointer, title: "Google Ads / PPC",
        tagline: "Give Your Brand a Larger Reach",
        tags: ["Pixel Setup", "Sales Funnel", "PPC Remarketing", "Display Advertising"],
        outcomes: ["ROI", "Qualified Traffic", "Reach"],
        color: "#3B82F6", bg: "bg-blue-500", lightBg: "bg-sky-50", lightBorder: "border-sky-100",
        textColor: "text-sky-700", tagBg: "bg-sky-100 text-sky-700",
    },
    {
        id: "linkedin", number: "13", icon: Linkedin, title: "LinkedIn Marketing",
        tagline: "Professional Network Growth",
        tags: ["Page Setup", "Profile Build Up", "Content Creation", "Network Growth"],
        outcomes: ["B2B Leads", "Authority", "Network"],
        color: "#0EA5E9", bg: "bg-blue-700", lightBg: "bg-blue-50", lightBorder: "border-blue-100",
        textColor: "text-blue-800", tagBg: "bg-blue-100 text-blue-800",
    },
]

export default function BrochureInfographic() {
    const [activeService, setActiveService] = useState(services[0])

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 mb-6 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2.5" />
                        Interactive Service Map
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Every Service.{" "}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">One Connected System.</span>
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Click any service to explore what we offer — each one precision-built, all of them connected.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-8 items-start">
                    {/* Left: Service Selector */}
                    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            const isActive = activeService.id === service.id
                            return (
                                <motion.button
                                    key={service.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.03 }}
                                    viewport={{ once: true }}
                                    onClick={() => setActiveService(service)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group border ${
                                        isActive
                                            ? `${service.lightBg} ${service.lightBorder} shadow-sm`
                                            : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"
                                    }`}
                                >
                                    <div
                                        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                            isActive ? service.bg : "bg-gray-100 group-hover:bg-gray-200"
                                        }`}
                                    >
                                        <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className={`text-sm font-semibold truncate ${isActive ? service.textColor : "text-gray-700"}`}>
                                            {service.title}
                                        </div>
                                        <div className="text-xs text-gray-400 truncate">{service.tagline}</div>
                                    </div>
                                    <span className={`text-xs font-bold ${isActive ? service.textColor : "text-gray-300"}`}>
                                        {service.number}
                                    </span>
                                    {isActive && <ChevronRight className={`w-4 h-4 flex-shrink-0 ${service.textColor}`} />}
                                </motion.button>
                            )
                        })}
                    </div>

                    {/* Right: Detail Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            className={`bg-gradient-to-br ${activeService.lightBg} to-white border ${activeService.lightBorder} rounded-3xl p-8 min-h-[500px] relative overflow-hidden`}
                            style={{ boxShadow: `0 20px 60px ${activeService.color}20` }}
                        >
                            {/* Background number */}
                            <div
                                className="absolute right-6 top-4 text-[120px] font-black leading-none select-none"
                                style={{ color: activeService.color, opacity: 0.06 }}
                            >
                                {activeService.number}
                            </div>

                            <div className="relative z-10">
                                {/* Icon + title */}
                                <div className="flex items-start gap-5 mb-8">
                                    <div
                                        className={`w-16 h-16 ${activeService.bg} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                                        style={{ boxShadow: `0 8px 32px ${activeService.color}40` }}
                                    >
                                        <activeService.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <div className={`text-xs font-semibold uppercase tracking-widest ${activeService.textColor} mb-1`}>
                                            {activeService.tagline}
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{activeService.title}</h3>
                                    </div>
                                </div>

                                {/* What's included */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">What's Included</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {activeService.tags.map((tag, i) => (
                                            <motion.div
                                                key={tag}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.07 }}
                                                className="flex items-center gap-2 bg-white/60 rounded-xl px-4 py-3 border border-white/80"
                                            >
                                                <div className={`w-2 h-2 rounded-full flex-shrink-0`} style={{ backgroundColor: activeService.color }} />
                                                <span className="text-sm text-gray-700 font-medium">{tag}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Outcomes */}
                                <div className="mb-8">
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Outcomes</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeService.outcomes.map((outcome, i) => (
                                            <motion.span
                                                key={outcome}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: i * 0.1 }}
                                                className={`px-4 py-2 rounded-full text-sm font-semibold ${activeService.tagBg}`}
                                            >
                                                ✦ {outcome}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/get-started">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`${activeService.bg} text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg`}
                                            style={{ boxShadow: `0 8px 24px ${activeService.color}35` }}
                                        >
                                            Get Started
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </Link>
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50"
                                        >
                                            Talk to Us
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-3 gap-6 text-center"
                >
                    {[
                        { value: "13+", label: "Services", color: "text-indigo-600" },
                        { value: "25+", label: "Years Experience", color: "text-purple-600" },
                        { value: "100+", label: "Global Clients", color: "text-pink-600" },
                    ].map((stat, i) => (
                        <div key={stat.label}>
                            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 text-center text-white"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3">Ready to Scale?</h3>
                    <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
                        Every service above is tailor-made to your business. Let's map out exactly what you need.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-lg"
                            >
                                Book a Free Strategy Call
                            </motion.button>
                        </Link>
                        <Link href="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/20 border border-white/30 text-white font-semibold px-8 py-3 rounded-xl"
                            >
                                View All Services
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
