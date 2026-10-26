"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Clock,
  Download,
  Search,
  Star,
  ChevronDown,
  X,
  ExternalLink,
  Sparkles,
  Users
} from "lucide-react"
import { sessions, Session, SessionType } from "@/data/agenda"
import {
  getSessionStatus,
  SessionStatus,
  downloadIcsFile,
  generateSessionIcs,
  generateFullDayIcs
} from "@/lib/agenda-utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type FilterType = "all" | "speeches" | "panels" | "breakouts" | "launches" | "networking" | "saved"

const STORAGE_KEY = "cfa_2026_my_schedule"

export function InteractiveAgenda() {
  const [mounted, setMounted] = useState(false)
  const [now, setNow] = useState<Date>(() => new Date())
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  const [expandedId, setExpandedId] = useState<string | null>("speech-1")
  const [savedIds, setSavedIds] = useState<string[]>([])

  // Load saved schedule and set mounted state
  useEffect(() => {
    setMounted(true)
    setNow(new Date())

    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        setSavedIds(JSON.parse(stored))
      }
    } catch {
      // storage disabled / private mode
    }

    // Refresh time every minute for status pills
    const interval = setInterval(() => {
      setNow(new Date())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  // Toggle saving to My Schedule
  const toggleSaveSession = (sessionId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSavedIds((prev) => {
      const next = prev.includes(sessionId)
        ? prev.filter((id) => id !== sessionId)
        : [...prev, sessionId]
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // Fallback gracefully
      }
      return next
    })
  }

  // Filter sessions
  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      // 1. Filter Chip Matching
      if (activeFilter === "saved") {
        if (!savedIds.includes(session.id)) return false
      } else if (activeFilter === "speeches") {
        // Speeches filter includes ceremony items as specified
        if (session.type !== "speech" && session.type !== "ceremony") return false
      } else if (activeFilter === "panels") {
        if (session.type !== "panel") return false
      } else if (activeFilter === "breakouts") {
        if (session.type !== "breakout") return false
      } else if (activeFilter === "launches") {
        if (session.type !== "launch") return false
      } else if (activeFilter === "networking") {
        if (session.type !== "networking") return false
      }

      // 2. Search Query Matching (title, people, notes, org)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim()
        const titleMatch = session.title.toLowerCase().includes(query)
        const notesMatch = session.notes.toLowerCase().includes(query)
        const orgMatch = session.org ? session.org.toLowerCase().includes(query) : false
        const peopleMatch = session.people.some(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            (p.role && p.role.toLowerCase().includes(query))
        )

        if (!titleMatch && !notesMatch && !orgMatch && !peopleMatch) {
          return false
        }
      }

      return true
    })
  }, [activeFilter, searchQuery, savedIds])

  // Helper for initials
  const getInitials = (name: string) => {
    const parts = name.split(" ").filter(Boolean)
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
  }

  // Helper for status pill rendering
  const renderStatusPill = (status: SessionStatus) => {
    switch (status) {
      case "Live now":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 shadow-xs shadow-emerald-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live now
          </span>
        )
      case "Up next":
        return (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-950/80 text-amber-400 border border-amber-500/40 shadow-xs shadow-amber-900/30">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Up next
          </span>
        )
      case "✓ Done":
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/40 text-emerald-400/80 border border-emerald-900/50">
            ✓ Done
          </span>
        )
      case "Upcoming":
      default:
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-850/80 text-slate-350 border border-slate-750">
            Upcoming
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* 1. HERO BAND (ADVANCE colours & gradient) */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-slate-900 bg-gradient-to-b from-red-950/40 via-slate-950 to-slate-950">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/40 text-red-400 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            ONE-DAY PROGRAMME
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight max-w-3xl mx-auto">
            Plan your CFA day.
          </h1>

          {/* Subline */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Times and session details may be updated as the programme is confirmed. Tap any session for speakers and details.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button
              variant="outline"
              className="border-slate-800 bg-slate-900/70 text-slate-200 hover:text-white hover:bg-slate-850 hover:border-slate-700 font-semibold px-5 py-2.5 rounded-full transition-all duration-200 group text-xs sm:text-sm"
              onClick={() => {
                alert("The complete print-ready Agenda PDF will be released alongside final room allocations. Use the 'Add full day to calendar' button to save all timings now.")
              }}
            >
              <Download className="w-4 h-4 mr-2 group-hover:translate-y-0.5 transition-transform text-red-500" />
              Download Full Agenda (PDF)
            </Button>

            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-red-950/40 text-xs sm:text-sm"
              onClick={() => {
                downloadIcsFile("CFA-2026-Full-Day.ics", generateFullDayIcs())
              }}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Add full day to calendar
            </Button>
          </div>
        </div>
      </section>

      {/* 2. CONTROL ROW & FILTER CHIPS (Sticky under navigation at top-20) */}
      <div className="sticky top-20 z-30 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-lg shadow-black/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 space-y-3">
          {/* Top row: Date Label & Search Box */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Single Date Label (no tabs) */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs sm:text-sm font-bold text-slate-200 tracking-wider">
                <Calendar className="w-4 h-4 text-red-500" />
                SAT 31 OCT 2026
              </span>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest hidden md:inline">
                Abuja, Nigeria · WAT
              </span>
            </div>

            {/* Search Box */}
            <div className="relative flex-1 sm:max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <Input
                type="text"
                placeholder="Search sessions, speakers or themes"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border-slate-800 focus:border-red-500/60 text-slate-100 placeholder:text-slate-500 pl-9.5 pr-8 py-2 rounded-full text-xs sm:text-sm transition-colors"
                id="agenda-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              All Sessions
            </button>
            <button
              onClick={() => setActiveFilter("speeches")}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "speeches"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              Speeches
            </button>
            <button
              onClick={() => setActiveFilter("panels")}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "panels"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              Panels
            </button>
            <button
              onClick={() => setActiveFilter("breakouts")}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "breakouts"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              Breakouts
            </button>
            <button
              onClick={() => setActiveFilter("launches")}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "launches"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              Launches
            </button>
            <button
              onClick={() => setActiveFilter("networking")}
              className={`px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "networking"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              Networking
            </button>

            {/* Star chip: My Schedule (n) */}
            <button
              onClick={() => setActiveFilter("saved")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                activeFilter === "saved"
                  ? "bg-red-600 text-white shadow-xs shadow-red-950/40"
                  : "bg-slate-900 text-slate-350 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <Star
                className={`w-3.5 h-3.5 ${
                  savedIds.length > 0 ? "fill-amber-400 text-amber-400" : ""
                }`}
              />
              <span>My Schedule ({mounted ? savedIds.length : 0})</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. AGENDA LIST CONTAINER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Count Line */}
        <div className="pb-3 border-b border-slate-800 flex items-center justify-between text-xs tracking-wider font-bold text-slate-400 uppercase">
          <div>
            {filteredSessions.length}{" "}
            {filteredSessions.length === 1 ? "AGENDA ITEM SHOWN" : "AGENDA ITEMS SHOWN"}
          </div>
          {(searchQuery || activeFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("all")
              }}
              className="text-red-400 hover:text-red-300 font-semibold lowercase hover:underline"
            >
              reset filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredSessions.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-200">No sessions match your search</h3>
            <p className="text-slate-400 text-sm max-w-sm mx-auto">
              {activeFilter === "saved"
                ? "You haven't added any sessions to your schedule yet. Click the star icon on any session to save it."
                : "Try adjusting your search terms or clearing selected filter chips to see more sessions."}
            </p>
            <div>
              <Button
                variant="outline"
                className="border-slate-800 text-slate-300 hover:bg-slate-900 rounded-full text-xs px-5"
                onClick={() => {
                  setSearchQuery("")
                  setActiveFilter("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          </div>
        )}

        {/* 4. FLAT LIST WITH HAIRLINE DIVIDERS (Reference pattern: 3 zones, no cards) */}
        <div className="divide-y divide-slate-850/80">
          {filteredSessions.map((session) => {
            const isExpanded = expandedId === session.id
            const isSaved = savedIds.includes(session.id)
            const isNetworking = session.type === "networking"
            const isConcurrent = session.group === "breakouts"

            // Compute status pill
            const status: SessionStatus = mounted
              ? getSessionStatus(session, sessions, now)
              : "Upcoming"

            // Type badge text
            const typeLabel =
              session.type === "breakout" && session.org
                ? `BREAKOUT · ${session.org.toUpperCase()}`
                : session.type.toUpperCase()

            return (
              <div
                key={session.id}
                className={`transition-colors duration-150 ${
                  isExpanded ? "bg-slate-900/40" : "hover:bg-slate-900/20"
                }`}
              >
                {/* Row Header / Main Clickable Area */}
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => setExpandedId(isExpanded ? null : session.id)}
                  className="w-full text-left py-5 px-3 sm:px-4 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 cursor-pointer group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500/60 rounded-md"
                >
                  {/* ZONE 1 (LEFT): Start Time in 24h, WAT label, Status pill */}
                  <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2 w-full md:w-32 flex-shrink-0">
                    <div className="flex items-baseline md:flex-col gap-2 md:gap-0.5">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {session.start}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold tracking-wider">
                        31 OCT · WAT
                      </span>
                    </div>

                    {/* Status Pill */}
                    <div className="pt-0 md:pt-1">
                      {renderStatusPill(status)}
                    </div>
                  </div>

                  {/* ZONE 2 (MIDDLE): Tiny uppercase label, Title, Venue TBA Toggle */}
                  <div className="flex-1 space-y-1.5 min-w-0 pr-2">
                    {/* Tiny uppercase accent label + Concurrent tag */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-red-400">
                        {typeLabel}
                      </span>

                      {isConcurrent && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-950/60 text-amber-400 border border-amber-900/40">
                          Concurrent
                        </span>
                      )}

                      {session.org && session.type === "breakout" && (
                        <span className="text-[11px] text-slate-400 font-medium">
                          (In partnership with {session.org})
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2
                      className={`text-base sm:text-lg leading-snug transition-colors ${
                        isNetworking
                          ? "font-medium text-slate-200 group-hover:text-white"
                          : "font-semibold text-white group-hover:text-red-400"
                      }`}
                    >
                      {session.title}
                    </h2>

                    {/* Expand/collapse session details trigger */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 group-hover:text-slate-300 pt-0.5">
                      <span className="font-medium text-[11px] text-slate-400 group-hover:text-slate-300">
                        {isExpanded ? "Hide details" : "Session details"}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                          isExpanded ? "transform rotate-180 text-red-500" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* ZONE 3 (RIGHT): Star Bookmark Button */}
                  <div className="hidden md:flex items-center justify-end flex-shrink-0 pt-1">
                    <button
                      type="button"
                      onClick={(e) => toggleSaveSession(session.id, e)}
                      aria-label={isSaved ? "Remove from My Schedule" : "Save to My Schedule"}
                      className="w-11 h-11 rounded-full border border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-red-500/60"
                    >
                      <Star
                        className={`w-5 h-5 transition-transform active:scale-90 ${
                          isSaved
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-400 hover:text-amber-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Mobile-only bookmark button floating top right */}
                  <div className="md:hidden absolute top-5 right-3">
                    <button
                      type="button"
                      onClick={(e) => toggleSaveSession(session.id, e)}
                      aria-label={isSaved ? "Remove from My Schedule" : "Save to My Schedule"}
                      className="w-11 h-11 rounded-full border border-slate-800 bg-slate-900/80 hover:bg-slate-800 flex items-center justify-center transition-all cursor-pointer"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          isSaved ? "fill-amber-400 text-amber-400" : "text-slate-400"
                        }`}
                      />
                    </button>
                  </div>
                </button>

                {/* EXPANDABLE SESSION DETAILS (Accordion animation) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`details-${session.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 sm:px-4 pb-6 pt-1 md:pl-44 space-y-4">
                        {/* Notes / Description */}
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                          <p>{session.notes}</p>
                        </div>

                        {/* People / Speakers / Facilitators */}
                        {session.people && session.people.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                              Resource Persons & Facilitators
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {session.people.map((person, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/80"
                                >
                                  <div className="w-8 h-8 rounded-full bg-red-950/70 border border-red-900/40 text-red-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                                    {getInitials(person.name)}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                                      {person.name}
                                    </p>
                                    {person.role && (
                                      <p className="text-[11px] text-red-400 font-medium">
                                        {person.role}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Timing and Add to Calendar Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-850">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <Clock className="w-3.5 h-3.5 text-red-500" />
                            <span>
                              {session.start} – {session.end} (WAT) · 31 October 2026
                            </span>
                          </div>

                          <Button
                            size="sm"
                            variant="outline"
                            className="border-slate-800 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white rounded-full text-xs h-9 px-4 font-semibold cursor-pointer"
                            onClick={() => {
                              downloadIcsFile(
                                `cfa-2026-${session.id}.ics`,
                                generateSessionIcs(session)
                              )
                            }}
                          >
                            <Calendar className="w-3.5 h-3.5 mr-1.5 text-red-500" />
                            Add to calendar (.ics)
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. CLOSING BLOCK: Rounded accent-colour block "Join us at CFA 2026" */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 text-center border border-red-900/40 bg-gradient-to-br from-red-950/80 via-slate-950 to-slate-900 shadow-2xl space-y-6">
          {/* Subtle orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="text-red-400 font-semibold uppercase tracking-widest text-xs block">
              SATURDAY, 31 OCTOBER 2026 · ABUJA, NIGERIA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Join us at CFA 2026
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Theme: <span className="text-white font-semibold">ADVANCE: From Ideas to Action</span>.
              Secure your seat for a transformative day of ideas, debates, and policy reform pathways.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                disabled
                className="w-full sm:w-auto bg-slate-850 text-slate-400 border border-slate-700/80 font-bold px-8 py-6 rounded-full cursor-not-allowed shadow-none"
              >
                Registration Closed
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-800 bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-850 hover:border-slate-700 font-bold px-8 py-6 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfmKTS3a8Sf4tvVA4wm0GYFgJ3odkQVm994ok2QaIGtycSpiA/viewform",
                    "_blank"
                  )
                }
              >
                Become a Partner
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
