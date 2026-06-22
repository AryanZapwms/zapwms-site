"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Twitter, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react"
import AnimatedButton from "./animated-button"

export default function AnimatedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
    setEmail("")
  }

  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Stay Ahead of the Curve</h3>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Get exclusive insights, brand strategies, and growth tips delivered to your inbox weekly.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubscribe}
            className="max-w-md mx-auto"
          >
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  required
                />
              </div>
              <AnimatedButton
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
              >
                <ArrowRight className="h-5 w-5" />
              </AnimatedButton>
            </div>
            {isSubscribed && (
              <p className="text-green-600 text-center mt-4 animate-fade-in font-medium">Thanks for subscribing! 🎉</p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10 text-center lg:text-left"
          >
            <div className="group flex justify-center lg:justify-start">
              <Image
                src="https://res.cloudinary.com/dxwoomfzw/image/upload/v1776406466/ZAP_WMS_R_lggww1.png"
                alt="ZAPWMS"
                width={300}
                height={100}
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Empowering creative professionals and entrepreneurs to build powerful brands that drive real traction and
              sustainable growth in today's competitive market.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 justify-center lg:justify-start">
              {[
                { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-50 hover:text-sky-600 hover:border-sky-200" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
                { icon: Youtube, href: "#", label: "YouTube", color: "hover:bg-red-50 hover:text-red-600 hover:border-red-200" },
              ].map(({ icon: Icon, href, label, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={href} className="group relative" aria-label={label}>
                    <div className={`w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm ${color}`}>
                      <Icon className="h-5 w-5 text-gray-500 group-hover:inherit transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center sm:text-left">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  "Brand Identity Development",
                  "Digital Marketing",
                  "Content Creation",
                  "SEO & Analytics",
                  "Social Media Management",
                  "Performance Marketing",
                ].map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center sm:justify-start group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-indigo-500 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-500 justify-center sm:justify-start">
                  <div className="w-9 h-9 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <Mail className="h-4 w-4 text-indigo-600" />
                  </div>
                  <a href="mailto:connect@zapwms.com" className="hover:text-indigo-600 transition-colors text-sm">
                    connect@zapwms.com
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/inquiry">
                  <AnimatedButton
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md"
                  >
                    Start Your Project
                  </AnimatedButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ZAPWMS LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-indigo-600 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
