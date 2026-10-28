"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  X,
  Share2,
  Check
} from "lucide-react"
import { speakers, Speaker } from "@/data/speakers"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [copiedLink, setCopiedLink] = useState(false)

  const categories = [
    "All",
    "Tech & AI Policy",
    "Law & Human Rights",
    "Public Policy & Reform",
    "Economic Freedom",
    "Youth & Civic Action"
  ]

  const toggleInlineExpand = (speakerId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [speakerId]: !prev[speakerId]
    }))
  }

  const filteredSpeakers = speakers.filter((speaker) => {
    if (activeCategory === "All") return true
    if (activeCategory === "Tech & AI Policy") {
      return (
        speaker.tags.some((t) => t.includes("Tech") || t.includes("AI") || t.includes("Data") || t.includes("Digital"))
      )
    }
    if (activeCategory === "Law & Human Rights") {
      return (
        speaker.tags.some((t) => t.includes("Human Rights") || t.includes("Law") || t.includes("Dispute") || t.includes("Justice"))
      )
    }
    if (activeCategory === "Public Policy & Reform") {
      return (
        speaker.tags.some((t) => t.includes("Policy") || t.includes("Governance") || t.includes("Reform") || t.includes("Fiscal"))
      )
    }
    if (activeCategory === "Economic Freedom") {
      return (
        speaker.tags.some((t) => t.includes("Economic") || t.includes("Freedom") || t.includes("Property"))
      )
    }
    if (activeCategory === "Youth & Civic Action") {
      return (
        speaker.tags.some((t) => t.includes("Youth") || t.includes("Civic") || t.includes("Citizen") || t.includes("Social Impact") || t.includes("Community"))
      )
    }
    return true
  })

  // Navigation handlers inside modal
  const currentIndex = selectedSpeaker
    ? speakers.findIndex((s) => s.id === selectedSpeaker.id)
    : -1

  const handlePrevSpeaker = () => {
    if (currentIndex > 0) {
      setSelectedSpeaker(speakers[currentIndex - 1])
    } else {
      setSelectedSpeaker(speakers[speakers.length - 1])
    }
  }

  const handleNextSpeaker = () => {
    if (currentIndex < speakers.length - 1) {
      setSelectedSpeaker(speakers[currentIndex + 1])
    } else {
      setSelectedSpeaker(speakers[0])
    }
  }

  const handleShareSpeaker = (speaker: Speaker) => {
    if (typeof window !== "undefined") {
      const shareUrl = `${window.location.origin}/#speakers`
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${speaker.name} - CFA 2026 Speaker: ${shareUrl}`)
        setCopiedLink(true)
        setTimeout(() => setCopiedLink(false), 2500)
      }
    }
  }

  return (
    <section id="speakers" className="py-24 bg-slate-950 border-b border-slate-800/80 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-900/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            Distinguished Lineup
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Speakers Lineup
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
            Meet the thought leaders, legal authorities, researchers, policy specialists, and institution builders leading the dialogue on liberty, digital rights, and economic governance at CFA 2026.
          </p>

          {/* Quick Event Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 text-xs sm:text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              Saturday, October 31, 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              Abuja, Nigeria
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-red-600 text-white shadow-lg shadow-red-950/50 scale-105"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredSpeakers.map((speaker, index) => {
            const isInlineExpanded = !!expandedCards[speaker.id]

            return (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-900/40 rounded-3xl border border-slate-800/80 overflow-hidden hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-950/20 group flex flex-col backdrop-blur-sm"
              >
                {/* Speaker Flyer Poster Header */}
                <div 
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="relative aspect-[4/5] w-full overflow-hidden cursor-pointer bg-slate-950"
                  role="button"
                  tabIndex={0}
                  aria-label={`View full profile for ${speaker.name}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedSpeaker(speaker)
                    }
                  }}
                >
                  <Image
                    src={speaker.image}
                    alt={`${speaker.name} - CFA 2026 Speaker Flyer`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={index < 3}
                  />

                  {/* Gradient Overlay for Text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                      CFA 2026
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-red-600/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      Speaker
                    </span>
                  </div>

                  {/* Bottom Image Hover Hint */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-semibold text-white bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/80 shadow-lg flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-red-400" />
                      Click flyer to view full profile
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                  <div className="space-y-3">
                    {/* Role & Org Badge */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-red-950/30 text-red-400 border-red-900/50 text-[11px] font-semibold px-2.5 py-0.5 rounded-md"
                      >
                        {speaker.badge}
                      </Badge>
                    </div>

                    {/* Speaker Name */}
                    <h3 
                      onClick={() => setSelectedSpeaker(speaker)}
                      className="text-2xl font-serif font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer"
                    >
                      {speaker.name}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {speaker.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-slate-400 bg-slate-950/70 border border-slate-800/80 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bio Excerpt & Rest of Profile */}
                    <div className="pt-2 text-slate-300 text-sm leading-relaxed">
                      {!isInlineExpanded ? (
                        <p className="line-clamp-3 text-slate-400">
                          {speaker.bioParagraphs[0]}
                        </p>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 text-slate-300"
                        >
                          {speaker.bioParagraphs.map((paragraph, pIdx) => (
                            <p key={pIdx} className="leading-relaxed">
                              {paragraph}
                            </p>
                          ))}

                          {/* External Links inside inline expand */}
                          {speaker.links && speaker.links.length > 0 && (
                            <div className="pt-2 flex flex-wrap gap-2">
                              {speaker.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300 font-semibold underline underline-offset-4"
                                >
                                  {link.label}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    {/* Primary "Read More" Button (Opens Rich Modal Dialog) */}
                    <Button
                      onClick={() => setSelectedSpeaker(speaker)}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md shadow-red-950/40 group/btn"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>

                    {/* Inline Expand / Collapse Toggle Button */}
                    <button
                      onClick={() => toggleInlineExpand(speaker.id)}
                      className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1 px-2.5 py-2 rounded-lg hover:bg-slate-800/50 transition-colors"
                      title={isInlineExpanded ? "Show less" : "Expand text in card"}
                    >
                      <span>{isInlineExpanded ? "Show Less" : "Read in card"}</span>
                      {isInlineExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 text-red-400" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>

      {/* Rich Profile Dialog Modal */}
      <Dialog
        open={!!selectedSpeaker}
        onOpenChange={(open) => {
          if (!open) setSelectedSpeaker(null)
        }}
      >
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-slate-800 text-white rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          {selectedSpeaker && (
            <div className="space-y-6">
              
              {/* Top Navigation & Close Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-850">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-red-950/50 border border-red-900/40 text-red-400 text-xs font-bold uppercase tracking-wider">
                    Speaker Profile
                  </span>
                  <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                    {currentIndex + 1} of {speakers.length}
                  </span>
                </div>

                {/* Quick Prev / Next Arrows */}
                <div className="flex items-center gap-2 mr-8">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrevSpeaker}
                    className="h-8 w-8 p-0 rounded-full bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850"
                    title="Previous speaker"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNextSpeaker}
                    className="h-8 w-8 p-0 rounded-full bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850"
                    title="Next speaker"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Modal Body: 2-Column on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-start">
                
                {/* Left Column: Official Flyer Poster */}
                <div className="md:col-span-2 space-y-4">
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-xl group">
                    <Image
                      src={selectedSpeaker.image}
                      alt={`${selectedSpeaker.name} Official Flyer`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white/90 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex justify-between items-center font-medium">
                      <span>Sat 31st Oct 2026</span>
                      <span>Abuja, Nigeria</span>
                    </div>
                  </div>

                  {/* Share button */}
                  <Button
                    variant="outline"
                    onClick={() => handleShareSpeaker(selectedSpeaker)}
                    className="w-full bg-slate-900 hover:bg-slate-850 border-slate-800 text-slate-300 hover:text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-slate-400" />
                        <span>Share Profile</span>
                      </>
                    )}
                  </Button>
                </div>

                {/* Right Column: Full Profile and Biography */}
                <div className="md:col-span-3 space-y-5">
                  <DialogHeader className="text-left space-y-2 p-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="bg-red-600 hover:bg-red-600 text-white text-xs px-2.5 py-0.5 rounded-md">
                        {selectedSpeaker.badge}
                      </Badge>
                      <span className="text-xs text-slate-400 font-medium">
                        {selectedSpeaker.organization}
                      </span>
                    </div>

                    <DialogTitle className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {selectedSpeaker.name}
                    </DialogTitle>
                  </DialogHeader>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSpeaker.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-red-300 bg-red-950/30 border border-red-900/40 px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Complete Bio Paragraphs */}
                  <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed pt-2">
                    {selectedSpeaker.bioParagraphs.map((paragraph, idx) => (
                      <p 
                        key={idx}
                        className={idx === 0 ? "text-slate-200 font-medium leading-relaxed border-l-2 border-red-500 pl-3.5 italic" : "leading-relaxed"}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* External Links & Profiles */}
                  {selectedSpeaker.links && selectedSpeaker.links.length > 0 && (
                    <div className="pt-4 border-t border-slate-850">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
                        Connect & Learn More
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {selectedSpeaker.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-red-950/50 border border-slate-800 hover:border-red-900/50 text-xs font-semibold text-white transition-colors"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-red-400" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Footer Navigation */}
                  <div className="pt-6 border-t border-slate-850 flex items-center justify-between">
                    <button
                      onClick={handlePrevSpeaker}
                      className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </button>
                    <span className="text-xs text-slate-500">
                      Speaker {currentIndex + 1} of {speakers.length}
                    </span>
                    <button
                      onClick={handleNextSpeaker}
                      className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </div>

            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
