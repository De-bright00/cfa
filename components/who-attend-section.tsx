"use client"

import { motion, Variants } from "framer-motion"
import { Check } from "lucide-react"

export function WhoAttendSection() {
  const categories = [
    "Freedom and human rights advocates",
    "Civil society leaders and practitioners",
    "Journalists and media professionals",
    "Researchers and policy experts",
    "Entrepreneurs and business leaders",
    "Academics and students",
    "Public policy enthusiasts",
    "Technology and digital rights advocates",
    "Development practitioners",
    "Student and youth leaders",
    "Think tank professionals",
    "Community organisers",
    "Government and public-sector reformers"
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    }
  }

  return (
    <section id="who-attend" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Intro */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block">Audience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight">
              Who Should Attend?
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              CFA 2026 is designed for people who are actively interested in shaping the future of freedom, 
              reform and human rights. 
            </p>
            <p className="text-slate-400 leading-relaxed text-base">
              Whether you are already working on freedom-related issues or simply want to understand how you can contribute, 
              there is a place for you at the conference.
            </p>
          </div>

          {/* Right Column: Tags Grid */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap gap-3"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: "rgba(220, 38, 38, 0.4)",
                    backgroundColor: "rgba(220, 38, 38, 0.05)"
                  }}
                  className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-950 border border-slate-800 text-slate-300 hover:text-slate-100 transition-colors duration-300 cursor-default select-none text-sm md:text-base font-medium shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-red-950 border border-red-900/50 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-red-500" />
                  </div>
                  <span>{category}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
