import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { InteractiveAgenda } from "@/components/interactive-agenda"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Agenda | CFA 2026 — ADVANCE",
  description:
    "Official schedule and session guide for the Conference of Freedom Advocates (CFA) 2026. Saturday, 31 October 2026, Abuja, Nigeria.",
  openGraph: {
    title: "Agenda | CFA 2026 — ADVANCE",
    description:
      "Explore the one-day programme for CFA 2026. Interactive schedule, speaker lineup, and session details.",
  },
}

export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      <Navigation />
      <InteractiveAgenda />
      <Footer />
    </main>
  )
}
