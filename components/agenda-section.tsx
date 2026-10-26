"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ChevronDown, Download, ArrowRight, Sparkles, MapPin, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { sessions, Session } from "@/data/agenda"

interface AnchorSession {
  time: string
  title: string
  type: string
  org?: string
  people: { role?: string; name: string }[]
  notes: string
}

export function AgendaSection() {
  const [activeSession, setActiveSession] = useState<number | null>(0)

  // Five Anchor Sessions derived from the confirmed schedule
  const anchorSessions: AnchorSession[] = [
    {
      time: "09:45 – 09:55",
      type: "Featured Speech",
      title: "Speech 1: ADVANCE: Reimagining Freedom and Reform for Africa's Future",
      people: [{ role: "Speaker", name: "Abdullah Tijani" }],
      notes: "A flagship address exploring the future of liberty in Africa, the changing global landscape, and why freedom remains the foundation for prosperity, innovation and human flourishing."
    },
    {
      time: "10:00 – 10:40",
      type: "General Panel",
      title: "General Panel 1: The Price and Promise of Freedom in a Changing Africa",
      people: [
        { role: "Moderator", name: "Abiye Briggs" },
        { role: "Panelist", name: "Victor Ndechi" },
        { role: "Panelist", name: "Anna Suberu" }
      ],
      notes: "What does Africa stand to gain when individuals have greater freedom to think, create, trade and build?"
    },
    {
      time: "12:25 – 13:25",
      type: "Concurrent Breakouts",
      org: "CJID & BudgIT",
      title: "Breakout Sessions: Freedom of Information & Tracking Public Funds",
      people: [
        { role: "Breakout A Moderator", name: "Christiana Longe (CJID)" },
        { role: "Breakout B Moderator", name: "Oludamilola Onemano (BudgIT)" }
      ],
      notes: "Two concurrent interactive masterclasses: Breakout A equips participants with practical skills to submit and track FOI requests; Breakout B trains advocates on tracking public funds from budget allocation to implementation."
    },
    {
      time: "15:05 – 15:40",
      type: "Fireside Panel",
      title: "Fireside Civic Panel: What Would You Advance? Changing Perspectives From Citizen Frustration to Sustainable Solutions",
      people: [
        { role: "Moderator", name: "Leonard Ogunweide" },
        { role: "Panelist", name: "Hashimu Adamu" },
        { role: "Panelist", name: "Tolulope Gbenro" },
        { role: "Panelist", name: "Akewushola Khadijah" }
      ],
      notes: "If you could change one thing about Nigeria's governance, economy or civic environment, what would you change, and how would you make it happen? Facilitators guide participants to uncover local solutions to local problems."
    },
    {
      time: "16:00 – 16:15",
      type: "Ceremony & Remarks",
      title: "Closing Remarks, CFA 2027 Updates & Your Feedback QR Code",
      people: [{ role: "Speaker", name: "Ruth Okim" }],
      notes: "Summary of conference insights, appreciation to partners, speakers and participants, and a call to continue advancing freedom beyond the conference."
    }
  ]

  const getTagColor = (type: string) => {
    switch (type) {
      case "Featured Speech":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30"
      case "General Panel":
      case "Fireside Panel":
        return "bg-orange-500/10 text-orange-400 border-orange-500/30"
      case "Concurrent Breakouts":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30"
      case "Ceremony & Remarks":
        return "bg-red-500/10 text-red-400 border-red-500/30"
      default:
        return "bg-slate-500/10 text-slate-400 border-slate-500/30"
    }
  }

  const toggleSession = (index: number) => {
    setActiveSession(activeSession === index ? null : index)
  }

  return (
    <section id="agenda" className="py-24 bg-slate-950 text-white relative border-b border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14 border-b border-slate-800 pb-8">
          <div className="text-left space-y-2">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-xs sm:text-sm block">
              SCHEDULE OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-white">
              Conference Programme
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A Day of Ideas, Dialogue and Action · Saturday, 31 October 2026 (08:30 – 16:30 WAT)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="outline"
              className="border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-850 hover:border-slate-700 font-semibold text-xs rounded-full px-4 py-2 group"
              onClick={() =>
                alert(
                  "The complete print-ready Agenda PDF will be released alongside final room allocations. Tap 'View full interactive agenda' for all 19 sessions!"
                )
              }
            >
              <Download className="w-3.5 h-3.5 mr-1.5 group-hover:translate-y-0.5 transition-transform text-red-500" />
              Download PDF
            </Button>

            <Link href="/agenda">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-full px-5 py-2 shadow-md shadow-red-950/40 flex items-center gap-1.5 group cursor-pointer">
                <span>View Full Agenda</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Five Anchor Sessions */}
        <div className="space-y-4">
          {anchorSessions.map((item, index) => {
            const isOpen = activeSession === index

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl border ${
                  isOpen
                    ? "border-red-900/40 bg-slate-900/40 shadow-lg shadow-red-950/10"
                    : "border-slate-800/80 bg-slate-900/10 hover:border-slate-750"
                }`}
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleSession(index)}
                  className="w-full p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500/60 rounded-2xl"
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1 min-w-0">
                    {/* Time column */}
                    <div className="flex-shrink-0 flex items-center gap-1.5 text-red-400 font-mono font-bold text-sm sm:text-base pt-0.5 sm:pt-0 w-28 sm:w-32">
                      <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span>{item.time}</span>
                    </div>

                    {/* Divider line in grid */}
                    <div className="hidden sm:block w-px bg-slate-800 self-stretch my-0.5" />

                    {/* Title and tags */}
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`text-[10px] uppercase px-2 py-0.5 rounded-md font-bold border ${getTagColor(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </Badge>
                        {item.org && (
                          <span className="text-[11px] text-slate-400 font-medium">
                            In partnership with {item.org}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-100 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 self-end sm:self-center ${
                      isOpen ? "transform rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>

                {/* Collapsible Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/40 ml-0 sm:ml-36 space-y-3">
                        <p>{item.notes}</p>

                        {/* People */}
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          <Users className="w-3.5 h-3.5 text-red-400" />
                          {item.people.map((p, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-md text-slate-300"
                            >
                              <strong className="text-white">{p.name}</strong>
                              {p.role && <span className="text-slate-400"> ({p.role})</span>}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* View Full Agenda Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-red-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Want the full schedule with all 19 agenda items?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">
              Includes networking tea, delegate lunch, policy reports, magazine unveiling, and interactive session search.
            </p>
          </div>

          <Link href="/agenda" className="flex-shrink-0">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-5 rounded-full flex items-center gap-2 cursor-pointer shadow-md shadow-red-950/30">
              <span>View Full Agenda</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
