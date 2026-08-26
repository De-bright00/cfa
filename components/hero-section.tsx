"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Bell, Check, Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  // Stats counters state
  const [advocatesCount, setAdvocatesCount] = useState(0)

  useEffect(() => {
    let startCount = 0
    const targetCount = 200
    const totalDuration = 800 // 0.8 seconds
    const step = Math.ceil(targetCount / (totalDuration / 16)) // Calculate step for ~60fps
    
    const timer = setInterval(() => {
      startCount += step
      if (startCount >= targetCount) {
        setAdvocatesCount(targetCount)
        clearInterval(timer)
      } else {
        setAdvocatesCount(startCount)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  const handleVenueNotify = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="text-white min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950 pt-24 sm:pt-28">
      {/* Dynamic Animated Mesh Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_60%)]" 
          style={{ transform: 'scale(1.2)' }}
        />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating abstract decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 w-full">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          
          {/* Tagline Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-red-500 text-xs sm:text-sm font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4 text-red-500" />
            <span>Conference of Freedom Advocates 2026</span>
          </motion.div>

          {/* Theme Headline */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-8xl md:text-9xl font-bold font-serif tracking-tight leading-none text-white select-none"
            >
              ADVANCE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl font-serif text-slate-300 font-medium italic"
            >
              "From Ideas to Action."
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Advancing Freedom, Reform and Human Flourishing in Africa.
            </motion.p>
          </div>

          {/* Event Info Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto w-full pt-4"
          >
            {/* Date Card */}
            <div className="flex-1 bg-slate-900/60 border border-slate-850 rounded-2xl p-6 flex items-center gap-4 text-left backdrop-blur-sm shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-red-500">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-556 font-bold uppercase tracking-wider">Date</p>
                <p className="text-lg font-semibold text-slate-100">31 October 2026</p>
              </div>
            </div>

            {/* Venue Card with notification capture */}
            <div className="flex-1 bg-slate-900/60 border border-slate-850 rounded-2xl p-6 flex flex-col justify-between gap-4 text-left backdrop-blur-sm shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center flex-shrink-0 text-red-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-slate-556 font-bold uppercase tracking-wider">Venue</p>
                    <span className="bg-amber-950/50 text-amber-500 border border-amber-900/30 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider animate-pulse">
                      TBA
                    </span>
                  </div>
                  <p className="text-base font-semibold text-slate-100">Abuja, Nigeria</p>
                </div>
              </div>

              {/* Mini Email Capture */}
              <div className="border-t border-slate-850/60 pt-3">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <form onSubmit={handleVenueNotify} className="flex gap-2">
                      <Input
                        type="email"
                        required
                        placeholder="Notify me of venue"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-950 border-slate-850 hover:border-slate-800 text-xs py-4 px-3 rounded-lg focus:border-red-500/50"
                      />
                      <Button type="submit" size="sm" className="bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] rounded-lg px-3 uppercase tracking-wider flex items-center gap-1.5 flex-shrink-0">
                        <Bell className="w-3 h-3" />
                        Alert
                      </Button>
                    </form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-1.5 text-red-400 text-xs font-semibold py-1"
                    >
                      <Check className="w-4 h-4" />
                      <span>Alert set! We will notify you.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto w-full pt-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-lg shadow-red-950/40"
              onClick={() => window.open("https://forms.gle/ES2Rob2Smzrs2DAPA", "_blank")}
            >
              Register to Attend
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-slate-800 text-slate-350 hover:text-slate-100 hover:bg-slate-900 font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfmKTS3a8Sf4tvVA4wm0GYFgJ3odkQVm994ok2QaIGtycSpiA/viewform", "_blank")}
            >
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="pt-10 border-t border-slate-900 max-w-xl mx-auto flex justify-between text-center select-none"
          >
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">
                {advocatesCount}+
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Advocates</p>
            </div>
            <div className="w-px bg-slate-900 self-stretch" />
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">One</p>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">Movement</p>
            </div>
            <div className="w-px bg-slate-900 self-stretch" />
            <div>
              <p className="text-3xl sm:text-4xl font-bold font-serif text-white">Freedom</p>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">A Freer Africa</p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col items-center gap-1.5 pt-8 text-slate-556 cursor-pointer select-none"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold hover:text-red-500 transition-colors">Discover More</span>
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-red-650"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
