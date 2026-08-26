"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Calendar, Mail, Check, Bell } from "lucide-react"

export function PublicationsSection() {
  const [email1, setEmail1] = useState("")
  const [email2, setEmail2] = useState("")
  const [submitted1, setSubmitted1] = useState(false)
  const [submitted2, setSubmitted2] = useState(false)

  const handleSubscribe1 = (e: React.FormEvent) => {
    e.preventDefault()
    if (email1.trim()) {
      setSubmitted1(true)
      setEmail1("")
    }
  }

  const handleSubscribe2 = (e: React.FormEvent) => {
    e.preventDefault()
    if (email2.trim()) {
      setSubmitted2(true)
      setEmail2("")
    }
  }

  return (
    <section id="publications" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Research & Journalism
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Flagship Publications
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            To be launched live at CFA 2026. Register your email below to receive your digital copies immediately upon launch.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: FinAR 2026 */}
          <div className="bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8 flex flex-col justify-between backdrop-blur-sm hover:border-red-500/20 transition-all duration-300 group">
            <div className="space-y-6">
              {/* HTML cover book shape representation */}
              <div className="aspect-[4/3] bg-gradient-to-tr from-slate-950 to-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden group-hover:shadow-md transition-shadow">
                {/* Red stripe represent spine */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-red-600" />
                
                <div className="flex justify-between items-start pl-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-500">Report</span>
                  <BookOpen className="w-5 h-5 text-slate-650 group-hover:text-red-500 transition-colors" />
                </div>
                
                <div className="pl-3 space-y-2 mt-4">
                  <h4 className="text-2xl font-serif font-semibold leading-tight text-white">
                    Freedom in Africa Report
                  </h4>
                  <p className="text-xs text-red-400 font-bold uppercase tracking-wider">
                    FinAR 2026
                  </p>
                </div>
                
                <div className="pl-3 border-t border-slate-850 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                  <span>Liberalist Centre</span>
                  <span>OCT 2026</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">
                  Freedom in Africa Report (FinAR 2026)
                </h3>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                  Reforms for Prosperity & Flourishing
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The Freedom in Africa Report (FinAR) is the Liberalist Centre's flagship research project tracking 
                  economic freedom, individual liberty, and democratic reform across the continent.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-850 mt-8">
              <AnimatePresence mode="wait">
                {!submitted1 ? (
                  <form onSubmit={handleSubscribe1} className="space-y-3">
                    <p className="text-xs text-slate-450 font-medium">Get notified immediately upon release:</p>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={email1}
                        onChange={(e) => setEmail1(e.target.value)}
                        className="bg-slate-950 border-slate-850 hover:border-slate-800 focus:border-red-500/50 text-white rounded-lg text-xs"
                      />
                      <Button type="submit" size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg px-4 flex items-center gap-1.5 flex-shrink-0">
                        <Bell className="w-3.5 h-3.5" />
                        Subscribe
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-3 bg-red-950/20 border border-red-900/30 rounded-xl text-red-400"
                  >
                    <Check className="w-4 h-4" />
                    <span className="font-semibold text-xs">Registered! We will email you the report on launch.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Card 2: The Liberalist Africa */}
          <div className="bg-slate-900/40 rounded-3xl border border-slate-800/80 p-8 flex flex-col justify-between backdrop-blur-sm hover:border-red-500/20 transition-all duration-300 group">
            <div className="space-y-6">
              {/* HTML cover magazine shape representation */}
              <div className="aspect-[4/3] bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden group-hover:shadow-md transition-shadow">
                {/* Red stripe represent spine */}
                <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-red-650" />
                
                <div className="flex justify-between items-start pl-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-500">Magazine</span>
                  <BookOpen className="w-5 h-5 text-slate-650 group-hover:text-red-500 transition-colors" />
                </div>
                
                <div className="pl-3 space-y-2 mt-4">
                  <h4 className="text-2xl font-serif font-semibold leading-tight text-white tracking-wide">
                    The Liberalist Africa
                  </h4>
                  <p className="text-xs text-red-450 font-bold uppercase tracking-wider">
                    Issue 2
                  </p>
                </div>
                
                <div className="pl-3 border-t border-slate-850 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                  <span>Liberalist Centre</span>
                  <span>OCT 2026</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">
                  The Liberalist Africa — Issue 2
                </h3>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                  ADVANCE: From Ideas to Action
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  The latest issue of our flagship magazine features fresh perspectives on economic opportunity, 
                  digital rights, and citizen-led advocacy across Africa.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-850 mt-8">
              <AnimatePresence mode="wait">
                {!submitted2 ? (
                  <form onSubmit={handleSubscribe2} className="space-y-3">
                    <p className="text-xs text-slate-450 font-medium">Get notified immediately upon release:</p>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={email2}
                        onChange={(e) => setEmail2(e.target.value)}
                        className="bg-slate-950 border-slate-850 hover:border-slate-800 focus:border-red-500/50 text-white rounded-lg text-xs"
                      />
                      <Button type="submit" size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-lg px-4 flex items-center gap-1.5 flex-shrink-0">
                        <Bell className="w-3.5 h-3.5" />
                        Subscribe
                      </Button>
                    </div>
                  </form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 p-3 bg-red-950/20 border border-red-900/30 rounded-xl text-red-400"
                  >
                    <Check className="w-4 h-4" />
                    <span className="font-semibold text-xs">Registered! We will email you the magazine on launch.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

