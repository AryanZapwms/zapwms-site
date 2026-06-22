"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Research & Strategy",
    description: "We uncover growth opportunities and define a clear roadmap for your success.",
    icon: <Search className="w-8 h-8" />,
    mockup: "discovery",
    gradient: "from-orange-100 via-red-50 to-rose-100",
    border: "border-indigo-100",
    glow: "hover:shadow-[0_8px_40px_rgba(99,102,241,0.2)]",
    iconColor: "text-indigo-500",
    glowBg: "bg-indigo-500/10",
  },
  {
    number: "02",
    title: "Build & Optimize",
    description: "We build powerful solutions and continuously optimize for performance and results.",
    icon: <Lightbulb className="w-8 h-8" />,
    mockup: "development",
    gradient: "from-purple-200 via-fuchsia-100 to-violet-200",
    border: "border-purple-100",
    glow: "hover:shadow-[0_8px_40px_rgba(168,85,247,0.2)]",
    iconColor: "text-purple-500",
    glowBg: "bg-purple-500/10",
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "We launch your product and scale it with data-driven strategies and ongoing support.",
    icon: <Rocket className="w-8 h-8" />,
    mockup: "launch",
    gradient: "from-emerald-200 via-green-100 to-lime-100",
    border: "border-emerald-100",
    glow: "hover:shadow-[0_8px_40px_rgba(16,185,129,0.2)]",
    iconColor: "text-emerald-500",
    glowBg: "bg-emerald-500/10",
  },
]

export default function HowWeWork() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-indigo-50  border-indigo-200 text-sm text-indigo-700 font-medium mb-6">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2.5 animate-pulse" />
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">How We Work</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            A simple, effective approach to building your brand with excellence.
          </p>
        </motion.div>

        <div className="relative ">
          <div className="hidden md:block absolute top-[38%] left-0 right-0 z-0 ">
            <div className="max-w-5xl mx-auto h-[1px] bg-gradient-to-r from-indigo-300 via-purple-300 to-emerald-300 opacity-60 " />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {steps.map((step, index) => (
             <motion.div
  key={step.number}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: index * 0.2 }}
  viewport={{ once: true }}
  whileHover={{ y: -10, scale: 1.02 }}
  className={`bg-gradient-to-br ${step.gradient}
    border
    rounded-3xl p-8
    shadow-lg shadow-red-200/40
    transition-all duration-300
    group ${step.glow}
    cursor-default
    hover:shadow-xl hover:shadow-red-300/50`}
>
                {/* Mockup Area */}
                <div className="aspect-video bg-white/70 rounded-2xl mb-6 overflow-hidden relative border border-white shadow-inner ">
                  <div className="absolute inset-0 p-4">
                    {step.mockup === "discovery" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-full max-w-[200px] space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                              <div className="w-3 h-3 bg-indigo-500 rounded"></div>
                            </div>
                            <div className="flex-1 space-y-1">
                              <div className="bg-gray-200 h-2 w-full rounded"></div>
                              <div className="bg-gray-200 h-2 w-3/4 rounded"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-indigo-100 h-12 rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-indigo-300 rounded"></div>
                            </div>
                            <div className="bg-blue-100 h-12 rounded-lg flex items-center justify-center">
                              <div className="w-6 h-6 bg-blue-300 rounded"></div>
                            </div>
                          </div>
                          <div className="bg-indigo-500 h-8 w-full rounded-lg flex items-center justify-center">
                            <div className="text-white text-xs font-medium">Analyze</div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step.mockup === "development" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-full max-w-[200px] space-y-3">
                          <div className="bg-gray-100 rounded-lg p-3">
                            <div className="flex items-center space-x-2 mb-2">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="space-y-2">
                              <div className="bg-gray-300 h-2 w-full rounded"></div>
                              <div className="bg-gray-300 h-2 w-2/3 rounded"></div>
                              <div className="bg-purple-400 h-2 w-1/2 rounded"></div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <div className="bg-gray-200 h-8 flex-1 rounded"></div>
                            <div className="bg-purple-500 h-8 w-16 rounded flex items-center justify-center">
                              <div className="text-white text-xs">Build</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step.mockup === "launch" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.3 }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-full max-w-[200px] space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500 font-medium">Status</div>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full"
                            ></motion.div>
                          </div>
                          <div className="space-y-2">
                            {["Security", "Efficiency", "Speed"].map((item) => (
                              <div key={item} className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                <div className="text-xs text-gray-600">{item}</div>
                              </div>
                            ))}
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                              <div className="text-xs text-gray-600">Updating...</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="h-px w-full bg-grey-500 mb-4 " />

                <div className="space-y-4 mt-4 ">
                  <div className="flex items-center space-x-4 ">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-4xl font-bold text-black"
                    >
                      {step.number}
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`${step.iconColor} ${step.glowBg} p-2 rounded-xl`}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Step {step.number}</p>
                  <p className="text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
