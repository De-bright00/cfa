"use client"

import { Button } from "@/components/ui/button"
import { Mail, Newspaper } from "lucide-react"

export function MediaSection() {
  return (
    <section id="media" className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-950/40 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm flex flex-col md:flex-row items-center gap-8 md:text-left text-center">
          
          <div className="w-14 h-14 rounded-xl bg-red-950/40 border border-red-900/40 flex items-center justify-center text-red-500 flex-shrink-0">
            <Newspaper className="w-7 h-7" />
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-1">
              <span className="text-red-500 font-semibold tracking-wider uppercase text-xs block">Journalists & Press</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-semibold">
                For Media — Cover the Conversation
              </h2>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              CFA 2026 will bring together leading voices from the freedom, human rights, policy, 
              media, technology and development communities. Media organisations and journalists are 
              invited to cover the conference, interview speakers and participants, and engage with the 
              ideas emerging from the event.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Button
              size="lg"
              className="w-full md:w-auto bg-transparent border border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              onClick={() => window.location.href = "mailto:eric@liberalistcentre.org?subject=CFA%202026%20Media%20Accreditation%20Request"}
            >
              <Mail className="w-4 h-4" />
              Request Accreditation
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}
