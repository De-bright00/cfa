"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ChevronDown, Download, Hourglass, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface AgendaItem {
  time?: string
  title: string
  subtitle?: string
  type: "Opening" | "Featured Speech" | "Panel" | "Breakout" | "Launch" | "Fireside" | "Closing"
  description?: string
  isTBA?: boolean
}

export function AgendaSection() {
  const [activeSession, setActiveSession] = useState<number | null>(0)

  const schedule: AgendaItem[] = [
    {
      time: "09:00 AM",
      title: "Welcome & Opening Remarks",
      type: "Opening",
      description: "An introduction to CFA 2026 and the vision behind ADVANCE — exploring why Africa’s next phase of reform must be grounded in liberty, innovation and citizen-led leadership."
    },
    {
      time: "09:30 AM",
      title: "ADVANCE: Reimagining Freedom and Reform for Africa’s Future",
      type: "Featured Speech",
      description: "A flagship address examining the future of liberty in Africa, the changing global landscape and why freedom remains fundamental to prosperity, innovation and human flourishing."
    },
    {
      time: "10:15 AM",
      title: "The Freedom Dividend: Why Liberty Still Matters in a Changing Africa",
      type: "Panel",
      description: "What does Africa stand to gain when individuals have greater freedom to think, create, trade and build? This conversation will explore the relationship between liberty, economic opportunity, innovation and human flourishing."
    },
    {
      time: "11:30 AM",
      title: "AI & Human Freedom in Africa",
      type: "Featured Speech",
      description: "Artificial intelligence is transforming how we work, communicate and make decisions. Will technology make young Africans more independent and prosperous — or create new forms of control and dependency?"
    },
    {
      time: "12:15 PM",
      title: "Beyond Good Intentions: Why Freedom Must Shape Nigeria’s Next Generation of Reforms",
      type: "Panel",
      description: "Many reforms begin with good intentions but can produce unintended consequences, including greater state control and fewer choices for citizens. This panel will examine how policymakers, civil society and reform advocates can promote liberty-centred alternatives that deliver lasting development outcomes."
    },
    {
      time: "01:30 PM",
      title: "Breakout Session A: Sustaining the Right to Know Through Freedom of Information (CJID)",
      type: "Breakout",
      description: "Participants are introduced to the importance of the right to access information and the Freedom of Information (FOI) Act as a practical tool for transparency, accountability and civic action. The session will show participants how to identify information, draft and submit FOI requests, follow up on requests, and respond when information is withheld or denied."
    },
    {
      time: "01:30 PM",
      title: "Breakout Session B: Tracking Public Funds for Accountability (BudgIT)",
      type: "Breakout",
      description: "A practical session to equip participants with the skills to follow public money from budget allocation to expenditure and implementation, and use financial information to promote transparency and accountability."
    },
    {
      time: "02:30 PM",
      title: "What to Do with Our Rule of Law?",
      type: "Featured Speech",
      description: "An engaging reflection on Nigeria’s justice system, the supremacy of the law and the principle of equality before the law."
    },
    {
      time: "03:15 PM",
      title: "The Liberalist Africa — Issue 2",
      subtitle: "Magazine Launch",
      type: "Launch",
      description: "The official unveiling of the latest issue of The Liberalist Africa, featuring fresh ideas, policy analysis and compelling stories advancing the freedom movement across Africa."
    },
    {
      time: "03:45 PM",
      title: "What Would You Advance?",
      subtitle: "From Citizen Frustration to Reform Solutions",
      type: "Fireside",
      description: "If you could change one thing about Nigeria’s governance, economy or civic environment, what would you change? More importantly: How would you make it happen? This fireside conversation moves from frustration to solutions, challenging participants to think beyond identifying problems and towards building practical pathways for reform. The conversation will also explore the regional and global dimensions of advancing freedom."
    },
    {
      time: "04:45 PM",
      title: "Freedom in Africa Report — FinAR 2026",
      subtitle: "Report Launch",
      type: "Launch",
      description: "The launch of the 2026 edition of the Freedom in Africa Report, presenting emerging trends, evidence and insights on freedom, governance and prosperity across the continent."
    },
    {
      time: "05:15 PM",
      title: "Closing Remarks: The Conference Ends. The Work Continues.",
      type: "Closing",
      description: "CFA 2026 will close with reflections, participant feedback and a call to continue advancing freedom beyond the conference. Because the real measure of a conference is not what happens in the room. It is what happens after everyone leaves."
    }
  ]

  const getTagColor = (type: string) => {
    switch (type) {
      case "Opening": return "bg-blue-500/10 text-blue-400 border-blue-500/30"
      case "Featured Speech": return "bg-purple-500/10 text-purple-400 border-purple-500/30"
      case "Panel": return "bg-orange-500/10 text-orange-400 border-orange-500/30"
      case "Breakout": return "bg-amber-500/10 text-amber-400 border-amber-500/30"
      case "Launch": return "bg-green-500/10 text-green-400 border-green-500/30"
      case "Fireside": return "bg-pink-500/10 text-pink-400 border-pink-500/30"
      case "Closing": return "bg-red-500/10 text-red-400 border-red-500/30"
      default: return "bg-slate-500/10 text-slate-400 border-slate-500/30"
    }
  }

  const toggleSession = (index: number) => {
    setActiveSession(activeSession === index ? null : index)
  }

  return (
    <section id="agenda" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16 border-b border-slate-800 pb-8">
          <div className="text-left space-y-2">
            <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block">Schedule</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold tracking-tight">
              Conference Programme
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A Day of Ideas, Dialogue and Action
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button
              variant="outline"
              className="border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900 group"
              onClick={() => alert("Agenda PDF will be available soon!")}
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Download Full Agenda (PDF)
            </Button>
          </div>
        </div>

        {/* Timeline Agenda Items */}
        <div className="space-y-4">
          {schedule.map((item, index) => {
            const isOpen = activeSession === index

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-2xl border ${item.isTBA
                    ? "border-dashed border-slate-800 bg-slate-950/20"
                    : isOpen
                      ? "border-red-900/30 bg-slate-900/40 shadow-lg shadow-red-950/5"
                      : "border-slate-800/80 bg-slate-900/10 hover:border-slate-800"
                  }`}
              >
                {/* Clickable Header */}
                <button
                  disabled={item.isTBA}
                  onClick={() => toggleSession(index)}
                  className={`w-full p-5 sm:p-6 flex items-start gap-4 sm:gap-6 text-left transition-all duration-300 ${item.isTBA ? "cursor-default opacity-85" : "cursor-pointer"
                    }`}
                >
                  {/* Time column */}
                  <div className="flex-shrink-0 flex items-center gap-1.5 text-red-500 font-semibold text-sm sm:text-base pt-1">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>

                  {/* Divider line in grid */}
                  <div className="hidden sm:block w-px bg-slate-800 self-stretch my-1" />

                  {/* Title and tags */}
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={`text-xs uppercase px-2 py-0.5 rounded-md font-bold border ${getTagColor(item.type)}`}>
                        {item.type}
                      </Badge>
                      {item.isTBA && (
                        <Badge className="bg-amber-950/50 text-amber-500 border border-amber-900/30 font-bold uppercase text-[10px] tracking-wide animate-pulse">
                          TBA
                        </Badge>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 leading-snug">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-slate-400 text-xs mt-0.5 font-medium">{item.subtitle}</p>
                      )}
                    </div>
                  </div>

                  {/* Expand Icon */}
                  {!item.isTBA && (
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 mt-1 transition-transform duration-300 flex-shrink-0 ${isOpen ? "transform rotate-180 text-red-500" : ""
                        }`}
                    />
                  )}
                </button>

                {/* Collapsible Details */}
                {!item.isTBA && (
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-slate-800/40 ml-0 sm:ml-28">
                          <p>{item.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* TBA Card Details Display */}
                {item.isTBA && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-400 text-xs flex items-center gap-2 ml-0 sm:ml-28 border-t border-dashed border-slate-800/40">
                    <Hourglass className="w-3.5 h-3.5 text-amber-500 animate-spin" style={{ animationDuration: '3s' }} />
                    <span>Session details coming soon — stay tuned for updates.</span>
                  </div>
                )}

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
