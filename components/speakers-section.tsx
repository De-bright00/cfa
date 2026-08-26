"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Sparkles, User, Check } from "lucide-react"

export function SpeakersSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  // Create 3 silhouette placeholders
  const placeholders = [1, 2, 3]

  return (
    <section id="speakers" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Presenters
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight">
            Speakers Lineup
          </h2>
          <div className="w-12 h-1 bg-red-600 mx-auto mt-4" />
        </div>

        {/* Coming Soon Card with shimmer effects */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-md relative overflow-hidden shadow-2xl">
          
          {/* Subtle animated border/gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 opacity-50 animate-pulse pointer-events-none" style={{ animationDuration: '6s' }} />

          <div className="relative z-10 flex flex-col items-center space-y-8">
            
            {/* Shimmering Silhouette Grid */}
            <div className="flex justify-center gap-4 sm:gap-8 flex-wrap">
              {placeholders.map((i) => (
                <div key={i} className="relative group">
                  {/* Glowing background ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/10 to-transparent blur-md group-hover:from-red-600/20 transition-all duration-500" />
                  
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center relative overflow-hidden">
                    <User className="w-12 h-12 sm:w-14 sm:h-14 text-slate-700/80 animate-pulse" />
                    
                    {/* Shimmering skeleton line */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"
                      style={{
                        animation: 'shimmer 2.5s infinite',
                        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Typography and copy */}
            <div className="space-y-3 max-w-lg">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/40 border border-red-900/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                In Motion
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">
                Speaker Announcements Coming Soon
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We are finalizing an exceptional lineup of freedom advocates, journalists, and policy experts. 
                Be the first to know when the schedule is finalized.
              </p>
            </div>

            {/* Email Form capture or Success State */}
            <div className="w-full max-w-md pt-4">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row gap-3"
                  >
                    <Input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-slate-900 border-slate-850 hover:border-slate-800 focus:border-red-500/50 text-white rounded-full px-5 py-6"
                    />
                    <Button 
                      type="submit" 
                      className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-red-950/40"
                    >
                      <Bell className="w-4 h-4" />
                      Notify Me
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center gap-2 p-4 bg-red-950/20 border border-red-900/30 rounded-2xl text-red-400"
                  >
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span className="font-semibold text-sm">Thank you! We will notify you of speaker announcements.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="text-xs text-slate-500">
              Or follow our official channels for the announcement.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

