"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Handshake, Target, ArrowUpRight } from "lucide-react"

export function PartnersSection() {
  const categories = [
    "Foundations and philanthropic organisations",
    "Think tanks",
    "Civil society organisations",
    "Media organisations",
    "Technology companies",
    "Private-sector organisations",
    "Academic institutions",
    "Development organisations",
    "Advocacy networks"
  ]

  return (
    <section id="partners" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Collaboration
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-white tracking-tight">
            Partners & Collaborators
          </h2>
          <p className="text-xl text-slate-300 font-medium font-serif italic mt-2">
            "Advancing Freedom Takes a Movement"
          </p>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            CFA 2026 is made possible through collaboration with organisations and individuals 
            committed to advancing freedom, human rights, open societies, innovation and citizen-led reform.
          </p>
        </div>

        {/* Content Split: Left Categories, Right CTA */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Categories Grid */}
          <div className="lg:col-span-7 bg-slate-900/40 p-6 sm:p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-slate-200 mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-red-500" />
              Partnership Opportunities
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800/60 text-slate-300 hover:text-slate-100 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 block flex-shrink-0" />
                  <span className="text-sm font-medium leading-tight">{category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Become a Partner Callout */}
          <div className="lg:col-span-5 flex">
            <Card className="w-full bg-gradient-to-br from-slate-900 to-slate-950 border-red-900/30 p-8 rounded-2xl flex flex-col justify-between items-start gap-8 relative overflow-hidden border">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-900/50 flex items-center justify-center text-red-500">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">
                  Become a CFA 2026 Partner
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Partner with us to support a growing community of people working to advance freedom across Africa.
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 group relative z-10"
                onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfmKTS3a8Sf4tvVA4wm0GYFgJ3odkQVm994ok2QaIGtycSpiA/viewform", "_blank")}
              >
                Become a Partner
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </Card>
          </div>

        </div>

      </div>
    </section>
  )
}
