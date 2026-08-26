"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Network, Lightbulb } from "lucide-react"

export function WhyAttendSection() {
  const points = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
      title: "Stronger Rights & Leadership",
      description: "Across Africa, citizens are demanding better institutions, greater economic opportunity, stronger rights and more accountable leadership."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-red-500" />,
      title: "Addressing the Future of Freedom",
      description: "Technological change, artificial intelligence, economic uncertainty, shrinking civic space and expanding government powers are creating new questions."
    },
    {
      icon: <Network className="w-6 h-6 text-red-500" />,
      title: "Cross-Sector Action Networks",
      description: "CFA 2026 creates a space for advocates from different fields to come together, challenge conventional thinking, exchange practical ideas and build relationships."
    }
  ]

  return (
    <section id="why-attend" className="py-24 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Significance
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Why CFA 2026?
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
            Africa’s future will be shaped by the choices we make today. 
            CFA 2026 provides a platform to address these critical choices and translate reform ideas into action.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-slate-950/40 p-8 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-11 h-11 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-100">{point.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Emphasized Closing Statement */}
        <div className="text-center bg-slate-950/60 p-8 rounded-2xl border border-slate-800/80 max-w-3xl mx-auto backdrop-blur-sm shadow-md">
          <p className="text-xl sm:text-2xl font-serif text-slate-200 leading-relaxed font-semibold italic">
            "This is not simply a conference about freedom. <span className="text-red-500 not-italic font-bold tracking-wide uppercase text-base border-b-2 border-red-500 pb-0.5 ml-1">It is a conference about advancing it.</span>"
          </p>
        </div>

      </div>
    </section>
  )
}
