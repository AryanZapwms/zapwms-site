"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "./animated-button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <motion.nav
        className="relative bg-white/80 backdrop-blur-md border rounded-2xl shadow-lg overflow-hidden"
        animate={{
          borderColor: [
            "rgba(99, 102, 241, 0.4)",
            "rgba(168, 85, 247, 0.4)",
            "rgba(236, 72, 153, 0.4)",
            "rgba(34, 197, 94, 0.4)",
            "rgba(99, 102, 241, 0.4)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "0 0 20px rgba(99, 102, 241, 0.15)",
              "0 0 20px rgba(168, 85, 247, 0.15)",
              "0 0 20px rgba(236, 72, 153, 0.15)",
              "0 0 20px rgba(34, 197, 94, 0.15)",
              "0 0 20px rgba(99, 102, 241, 0.15)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="relative z-10 px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="https://res.cloudinary.com/dxwoomfzw/image/upload/v1776406466/ZAP_WMS_R_lggww1.png"
                  alt="ZAPWMS"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link href="/services" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/digital-marketing" className="text-sm text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                  Digital Marketing
                </Link>
                <Link href="/solutions" className="text-sm text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Solutions
                </Link>
                <Link href="/success-stories" className="text-sm text-gray-700 hover:text-green-600 transition-colors font-medium">
                  Success Stories
                </Link>
                <Link href="/contact" className="text-sm text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/get-started">
                <AnimatedButton
                  size="sm"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md"
                >
                  Get Started
                </AnimatedButton>
              </Link>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/60 bg-white/90 backdrop-blur-md rounded-b-2xl">
            <div className="px-6 py-4 space-y-3">
              <Link href="/services" className="block text-gray-700 hover:text-indigo-600 font-medium">Services</Link>
              <Link href="/digital-marketing" className="block text-gray-700 hover:text-indigo-600 font-medium">Digital Marketing</Link>
              <Link href="/solutions" className="block text-gray-700 hover:text-purple-600 font-medium">Solutions</Link>
              <Link href="/success-stories" className="block text-gray-700 hover:text-green-600 font-medium">Success Stories</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-orange-500 font-medium">Contact</Link>
              <div className="pt-3 border-t border-gray-200">
                <Link href="/get-started" className="block">
                  <AnimatedButton className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700">
                    Get Started
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.nav>
    </header>
  );
}
