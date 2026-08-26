"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden border-t border-slate-900">
      {/* Decorative blurred background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-650/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="space-y-3">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm block">
            CFA 2026
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Join the Movement
          </h2>
        </div>

        {/* Highlighted Motif Refrain */}
        <div className="py-6 max-w-xl mx-auto">
          <p className="text-slate-400 text-xs sm:text-sm uppercase tracking-widest block mb-4">
            Most importantly...
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-wide uppercase border-y border-red-500/25 py-6 italic select-none">
            What will you advance?
          </h3>
        </div>

        <p className="text-slate-350 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Seats are limited. Secure your place at Nigeria's premier freedom reform conference, 
          or collaborate with us as a partner to support the movement.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
            className="w-full sm:w-auto border-slate-800 text-slate-300 hover:text-slate-100 hover:bg-slate-900 hover:border-red-500/30 font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 transition-all duration-300 bg-transparent"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfmKTS3a8Sf4tvVA4wm0GYFgJ3odkQVm994ok2QaIGtycSpiA/viewform", "_blank")}
          >
            Become a Partner
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  )
}
