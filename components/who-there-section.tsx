"use client"

import { motion } from "framer-motion"

export function WhoThereSection() {
  const fields = [
    "Freedom",
    "Human Rights",
    "Democracy",
    "Markets",
    "Journalism",
    "Technology",
    "Policy",
    "Justice",
    "Entrepreneurship",
    "Civic Space"
  ]

  // Double the fields to create a seamless looping effect
  const marqueeFields = [...fields, ...fields]

  return (
    <section className="py-20 bg-slate-950 border-y border-slate-800/60 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
          Who Will Be There?
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-white font-semibold">
          A Community of People Who Want to Advance Freedom
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          CFA 2026 will bring together 200+ participants from Nigeria and across Africa, 
          creating opportunities to meet people working at the intersection of:
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative flex w-full overflow-x-hidden py-4 bg-slate-900 border-y border-slate-800">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex whitespace-nowrap gap-12 text-lg sm:text-xl font-bold font-serif uppercase tracking-widest text-slate-400 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear"
          }}
        >
          {marqueeFields.map((field, index) => (
            <div key={index} className="flex items-center gap-6 group">
              <span className="hover:text-red-500 transition-colors duration-300 select-none cursor-default">
                {field}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 block flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
