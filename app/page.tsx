import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ThemeSection } from "@/components/theme-section"
import { WhyAttendSection } from "@/components/why-attend-section"
import { ExpectSection } from "@/components/expect-section"
import { AgendaSection } from "@/components/agenda-section"
import { WhoAttendSection } from "@/components/who-attend-section"
import { WhoThereSection } from "@/components/who-there-section"
import { GallerySection } from "@/components/gallery-section"
import { SpeakersSection } from "@/components/speakers-section"
import { TakeawaySection } from "@/components/takeaway-section"
import { PublicationsSection } from "@/components/publications-section"
import { PartnersSection } from "@/components/partners-section"
import { MediaSection } from "@/components/media-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <WhyAttendSection />
      <ExpectSection />
      <AgendaSection />
      <WhoAttendSection />
      <WhoThereSection />
      <GallerySection />
      <SpeakersSection />
      <TakeawaySection />
      <PublicationsSection />
      <PartnersSection />
      <MediaSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
