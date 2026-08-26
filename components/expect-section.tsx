"use client"

import { motion } from "framer-motion"
import { Mic, Users, Settings, MessageSquare, BookOpen, Rocket } from "lucide-react"

export function ExpectSection() {
  const items = [
    {
      icon: <Mic className="w-6 h-6 text-red-500" />,
      title: "Inspiring Keynotes",
      description: "Hear from leading thinkers and practitioners exploring the future of freedom, reform, technology, justice and human flourishing in Africa."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-red-500" />,
      title: "High-Level Conversations",
      description: "Engage with policymakers, journalists, civil society leaders, researchers, entrepreneurs and advocates on some of the most important questions facing Africa."
    },
    {
      icon: <Settings className="w-6 h-6 text-red-500" />,
      title: "Practical Breakout Sessions",
      description: "Go deeper into specific challenges and opportunities around economic freedom, civic space, media freedom, digital rights and citizen engagement."
    },
    {
      icon: <Users className="w-6 h-6 text-red-500" />,
      title: "Networking",
      description: "Connect with 200+ people working across the freedom, human rights, media, policy, technology and development ecosystems."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-red-500" />,
      title: "New Ideas & Publications",
      description: "Discover new research, policy ideas and journalism through the launch of Freedom in Africa Report (FinAR 2026) and The Liberalist Africa."
    },
    {
      icon: <Rocket className="w-6 h-6 text-red-500" />,
      title: "From Ideas to Action",
      description: "Leave the conference with practical ideas, new relationships and a clearer sense of what you can advance within your own organisation, community or field."
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="expect" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-950/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Ideas. Conversations. Connections. Action.
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight">
            What to Expect at CFA 2026
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(220, 38, 38, 0.4)",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 15px -3px rgba(220, 38, 38, 0.15)"
              }}
              className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm transition-all duration-300 flex flex-col items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-950/20 group-hover:border-red-900/30 transition-all duration-300">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
