"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative blurred blob */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Descriptive Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block">About CFA 2026</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight leading-tight">
              Rethinking Reform, Charting a Freer Africa
            </h2>
            
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p>
                The Conference of Freedom Advocates (CFA) is the Liberalist Centre’s flagship annual gathering 
                bringing together people committed to advancing freedom, human rights, open societies and 
                citizen-led reform across Nigeria and Africa.
              </p>
              <p>
                CFA 2026 brings together 200+ freedom advocates, human rights defenders, civil society leaders, 
                journalists, researchers, policy experts, entrepreneurs, academics, student leaders and 
                development practitioners for a day of ideas, dialogue, networking and action.
              </p>
              <p>
                Africa does not lack ideas. What it needs is a generation of citizens and institutions willing to 
                turn ideas into action. CFA 2026 is designed to move beyond conversations about what is wrong and 
                focus on what can be done differently — and how we can make it happen.
              </p>
            </div>
          </div>

          {/* Right Column: Stylized Pull-Quote motif */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 text-center relative max-w-sm w-full shadow-lg"
            >
              {/* Giant quote mark backdrops */}
              <span className="absolute -top-6 -left-2 text-[120px] text-red-500/10 font-serif leading-none select-none">“</span>
              <span className="absolute -bottom-16 -right-2 text-[120px] text-red-500/10 font-serif leading-none select-none">”</span>

              <div className="space-y-4 relative z-10">
                <span className="text-red-500 text-xs font-bold tracking-widest uppercase block">Refrain</span>
                <p className="text-xl sm:text-2xl font-serif text-slate-100 font-semibold leading-normal">
                  "This year's conference is built around a simple question..."
                </p>
                <div className="py-4">
                  <p className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-wide uppercase border-y border-red-500/30 py-3 italic">
                    What will you advance?
                  </p>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  A call to transition from ideas to action across Africa.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
