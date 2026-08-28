"use client"

import { motion, Variants } from "framer-motion"
import { BookOpen, UserPlus, Compass, Eye, ShieldAlert } from "lucide-react"

export function TakeawaySection() {
  const takeaways = [
    {
      icon: <BookOpen className="w-6 h-6 text-red-500" />,
      title: "Learn",
      description: "Explore new ideas and perspectives on freedom, reform and Africa’s future."
    },
    {
      icon: <UserPlus className="w-6 h-6 text-red-500" />,
      title: "Connect",
      description: "Build relationships with advocates, researchers, journalists, entrepreneurs and policy professionals."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-500" />,
      title: "Challenge",
      description: "Question assumptions and engage with people who may see the problems — and solutions — differently."
    },
    {
      icon: <Eye className="w-6 h-6 text-red-500" />,
      title: "Discover",
      description: "Access new research, publications and ideas emerging from the African freedom movement."
    },
    {
      icon: <Compass className="w-6 h-6 text-red-500" />,
      title: "Act",
      description: "Identify practical ways to turn the lessons from CFA into action within your organisation, community or field."
    }
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <section id="takeaway" className="py-24 bg-slate-900 border-y border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            What You'll Take Away
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            CFA 2026 is designed to leave you with more than conference notes. 
            You will have the opportunity to:
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {takeaways.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                borderColor: "rgba(220, 38, 38, 0.4)",
                backgroundColor: "rgba(10, 26, 47, 0.5)"
              }}
              className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between items-start gap-4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-red-950/20 group-hover:border-red-900/30 transition-all duration-300">
                {item.icon}
              </div>
              <div className="space-y-1 mt-2">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
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
