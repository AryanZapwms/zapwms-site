"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight, Code, Layout, Smartphone, BarChart3, Settings, Rocket } from "lucide-react"
import AnimatedButton from "./animated-button"

const services = [
  {
    title: "Website Development",
    description: "High-performance websites designed to convert visitors into customers",
    features: ["Custom UI/UX", "Responsive Design", "SEO Optimization", "Fast Load Speed"],
    icon: <Layout className="w-8 h-8" />,
  },
  {
    title: "Web Applications",
    description: "Scalable and secure web apps tailored to your business needs",
    features: ["Dashboards", "Admin Panels", "APIs", "Authentication"],
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "Mobile App Development",
    description: "iOS & Android apps with seamless and intuitive user experiences",
    features: ["React Native", "Performance Optimization", "Deployment"],
    icon: <Smartphone className="w-8 h-8" />,
  },
  {
    title: "UI/UX Design",
    description: "Modern, engaging designs focused on usability and conversion",
    features: ["Wireframing", "Prototyping", "Design Systems"],
    icon: <Rocket className="w-8 h-8" />,
  },
  {
    title: "Growth & Optimization",
    description: "Improve performance and maximize conversions",
    features: ["Analytics", "A/B Testing", "Speed Optimization"],
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Maintenance & Scaling",
    description: "Keep your product fast, secure, and scalable",
    features: ["Bug Fixes", "Cloud Scaling", "Monitoring"],
    icon: <Settings className="w-8 h-8" />,
  },
]

const metrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Active Clients" },
  { value: "3x", label: "Avg Growth" },
  { value: "99%", label: "Client Satisfaction" },
]

export default function SolutionsPage() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-32 bg-white relative overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 🔥 HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Products</span> That Scale
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We design and develop high-performing websites and applications that drive growth, engagement, and results.
          </p>
        </motion.div>

        {/* 📊 METRICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 🧩 SERVICES */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            What We Can Do For You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(null)}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-20"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-blue-400 mb-6">{service.icon}</div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-5">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-12 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Let’s Build Something Great Together
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you need a website, app, or full digital solution — we help you launch, scale, and grow.
          </p>

          <AnimatedButton className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg">
            <span className="flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </AnimatedButton>
        </motion.div>

      </div>
    </section>
  )
}