"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import {
    TrendingUp, Instagram, Facebook, Palette, Share2,
    Globe, Search, Youtube, Video, Sparkles,
    Mail, MousePointer, Linkedin, ArrowRight
} from "lucide-react"
import AnimatedButton from "./animated-button"

const services = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "Performance Marketing", description: "ROI-driven campaigns across search, social, and e-commerce channels.", gradient: "from-blue-50 to-cyan-50", border: "border-blue-100", hover: "hover:border-blue-300", icon_color: "text-blue-600", icon_bg: "bg-blue-100", glow: "hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)]" },
    { icon: <Globe className="w-6 h-6" />, title: "Website Development", description: "SEO-friendly, fully responsive websites for every industry.", gradient: "from-emerald-50 to-green-50", border: "border-emerald-100", hover: "hover:border-emerald-300", icon_color: "text-emerald-600", icon_bg: "bg-emerald-100", glow: "hover:shadow-[0_8px_32px_rgba(16,185,129,0.2)]" },
    { icon: <Search className="w-6 h-6" />, title: "Advance SEO", description: "Rank #1 on Google with quality backlinks and on/off-page optimization.", gradient: "from-red-50 to-rose-50", border: "border-red-100", hover: "hover:border-red-300", icon_color: "text-red-500", icon_bg: "bg-red-100", glow: "hover:shadow-[0_8px_32px_rgba(239,68,68,0.2)]" },
    { icon: <Share2 className="w-6 h-6" />, title: "Social Media Marketing", description: "Connect, promote, and convert across all major social platforms.", gradient: "from-purple-50 to-violet-50", border: "border-purple-100", hover: "hover:border-purple-300", icon_color: "text-purple-600", icon_bg: "bg-purple-100", glow: "hover:shadow-[0_8px_32px_rgba(168,85,247,0.2)]" },
    { icon: <Video className="w-6 h-6" />, title: "2D Video Creations", description: "High-ROI explainer, promotional, and brand story videos.", gradient: "from-sky-50 to-blue-50", border: "border-sky-100", hover: "hover:border-sky-300", icon_color: "text-sky-600", icon_bg: "bg-sky-100", glow: "hover:shadow-[0_8px_32px_rgba(14,165,233,0.2)]" },
    { icon: <Palette className="w-6 h-6" />, title: "Graphic Design", description: "Logos, brochures, creatives and everything visual for your brand.", gradient: "from-orange-50 to-amber-50", border: "border-orange-100", hover: "hover:border-orange-300", icon_color: "text-orange-500", icon_bg: "bg-orange-100", glow: "hover:shadow-[0_8px_32px_rgba(249,115,22,0.2)]" },
    { icon: <Facebook className="w-6 h-6" />, title: "Meta / Facebook Ads", description: "Targeted campaigns with pixel setup, A/B testing, and real conversions.", gradient: "from-indigo-50 to-blue-50", border: "border-indigo-100", hover: "hover:border-indigo-300", icon_color: "text-indigo-600", icon_bg: "bg-indigo-100", glow: "hover:shadow-[0_8px_32px_rgba(99,102,241,0.2)]" },
    { icon: <Instagram className="w-6 h-6" />, title: "Instagram Marketing", description: "Organic & paid growth with hashtag research and competitor analysis.", gradient: "from-pink-50 to-rose-50", border: "border-pink-100", hover: "hover:border-pink-300", icon_color: "text-pink-600", icon_bg: "bg-pink-100", glow: "hover:shadow-[0_8px_32px_rgba(236,72,153,0.2)]" },
    { icon: <Youtube className="w-6 h-6" />, title: "YouTube Marketing", description: "Grow views, subscribers, and watch hours on your channel.", gradient: "from-red-50 to-orange-50", border: "border-red-100", hover: "hover:border-red-300", icon_color: "text-red-600", icon_bg: "bg-red-100", glow: "hover:shadow-[0_8px_32px_rgba(220,38,38,0.2)]" },
    { icon: <Sparkles className="w-6 h-6" />, title: "Animation & Mascot", description: "3D, whiteboard, stop-motion and custom mascot character creation.", gradient: "from-fuchsia-50 to-purple-50", border: "border-fuchsia-100", hover: "hover:border-fuchsia-300", icon_color: "text-fuchsia-600", icon_bg: "bg-fuchsia-100", glow: "hover:shadow-[0_8px_32px_rgba(217,70,239,0.2)]" },
    { icon: <Mail className="w-6 h-6" />, title: "Email Marketing", description: "Segmented affiliate campaigns with tracking and analytics reporting.", gradient: "from-teal-50 to-cyan-50", border: "border-teal-100", hover: "hover:border-teal-300", icon_color: "text-teal-600", icon_bg: "bg-teal-100", glow: "hover:shadow-[0_8px_32px_rgba(20,184,166,0.2)]" },
    { icon: <MousePointer className="w-6 h-6" />, title: "Google Ads / PPC", description: "Pay-per-click strategies that turn ad spend into measurable revenue.", gradient: "from-blue-50 to-green-50", border: "border-blue-100", hover: "hover:border-blue-300", icon_color: "text-blue-600", icon_bg: "bg-blue-100", glow: "hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)]" },
    { icon: <Linkedin className="w-6 h-6" />, title: "LinkedIn Marketing", description: "B2B lead generation through professional network management.", gradient: "from-blue-50 to-sky-50", border: "border-blue-100", hover: "hover:border-blue-300", icon_color: "text-blue-700", icon_bg: "bg-blue-100", glow: "hover:shadow-[0_8px_32px_rgba(29,78,216,0.2)]" },
]

export default function ServicesPreview() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                    <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 mb-6 shadow-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2.5 animate-pulse" />
                        What We Do
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        13 Services.{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">One Partner.</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        End-to-end digital solutions built to grow your brand — from first impression to final conversion.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            onHoverStart={() => setHoveredService(index)}
                            onHoverEnd={() => setHoveredService(null)}
                            className={`relative bg-gradient-to-br ${service.gradient} border ${service.border} ${service.hover} rounded-2xl p-6 transition-all duration-300 group overflow-hidden cursor-default ${service.glow}`}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/50 to-transparent" />

                            <div className="relative z-10">
                                <div className={`${service.icon_bg} ${service.icon_color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
                    <Link href="/services">
                        <AnimatedButton className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg">
                            <span className="flex items-center">Explore All Services<ArrowRight className="ml-2 h-4 w-4" /></span>
                        </AnimatedButton>
                    </Link>
                    <Link href="/contact">
                        <AnimatedButton variant="slim" className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm">Talk to Us</AnimatedButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
