"use client"

import { motion, Variants } from "framer-motion"
import { HelpCircle, ChevronRight } from "lucide-react"

export function ThemeSection() {
  const questions = [
    "What does Africa stand to gain from greater freedom?",
    "How can we make reform work for citizens rather than expand unnecessary state control?",
    "How will artificial intelligence affect human freedom?",
    "How can citizens defend civic space and digital rights?",
    "What does meaningful rule of law look like in practice?",
    "What can advocates do differently when they return home?"
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="theme" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block">Theme</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white tracking-tight">
                ADVANCE
              </h2>
              <p className="text-xl text-slate-300 font-medium font-serif italic">"From Ideas to Action."</p>
            </div>
            
            <div className="space-y-4 text-slate-400 leading-relaxed text-base">
              <p>
                Freedom is not sustained by ideas alone. It requires people who are willing to defend it, 
                institutions that are willing to protect it, entrepreneurs who are free to create, 
                journalists who can ask difficult questions, citizens who can participate, and reformers 
                who can turn evidence into meaningful change.
              </p>
              <p>
                <strong className="text-slate-200">ADVANCE</strong> is a call to move from diagnosis to action. 
                At CFA 2026, we will explore how freedom can shape Africa’s next generation of reforms — 
                from economic opportunity and entrepreneurship to media freedom, digital rights, justice, 
                accountable government and citizen participation.
              </p>
            </div>
          </div>

          {/* Right Column: Framing Questions list */}
          <div className="lg:col-span-7 space-y-8 bg-slate-950/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-semibold text-slate-200 mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-red-500" />
                Key Questions to Explore
              </h3>
              <p className="text-sm text-slate-400">The conference will ask:</p>
            </div>

            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {questions.map((question, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-red-500/30 transition-all hover:bg-slate-900 duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-950/50 border border-red-900/30 text-red-500 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-slate-300 group-hover:text-slate-100 transition-colors font-medium text-base">
                      {question}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-red-500 self-center transition-colors transform group-hover:translate-x-1 duration-300" />
                </motion.li>
              ))}
            </motion.ul>

            {/* Motif Emphasized Refrain */}
            <div className="pt-4 border-t border-slate-800/60 text-center">
              <p className="text-lg font-serif font-medium text-white italic">
                "Most importantly, <span className="text-red-500 not-italic font-bold tracking-wide uppercase text-sm border-b-2 border-red-500 pb-0.5 ml-1">what will you advance?</span>"
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
