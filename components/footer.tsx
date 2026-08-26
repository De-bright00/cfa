"use client"

import Image from "next/image"
import { Mail, Phone, Globe, Calendar, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-12">
          
          {/* Column 1: Info and Wordmark */}
          <div className="space-y-4">
            <a
              href="https://liberalistcentre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-85 transition-opacity"
            >
              <Image
                src="/images/liberalist-centre-logo.png"
                alt="Liberalist Centre"
                width={180}
                height={36}
                className="h-8 w-auto"
              />
            </a>
            <p className="text-sm leading-relaxed text-slate-555">
              CFA 2026 is the Liberalist Centre’s flagship annual gathering. 
              Rethinking reform, advancing liberty, and charting a freer, more prosperous Africa.
            </p>
          </div>

          {/* Column 2: Event Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest">Conference</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-red-500" />
                <span>Saturday, 31 October 2026</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Abuja, Nigeria (Venue TBA)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-red-500" />
                <a href="https://liberalistcentre.org" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">
                  liberalistcentre.org
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-widest">Enquiries</h4>
            <div className="space-y-3 text-sm">
              <p className="font-semibold text-slate-300">Eric Mobu</p>
              <p className="text-xs text-slate-500 -mt-2">Director of Programs & Development</p>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-500" />
                <a href="mailto:eric@liberalistcentre.org" className="hover:text-red-400 transition-colors">
                  eric@liberalistcentre.org
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-500" />
                <a href="tel:+2348101611445" className="hover:text-red-400 transition-colors">
                  +234 810 161 1445
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-556">
          <p>&copy; {new Date().getFullYear()} Conference of Freedom Advocates (CFA). Organised by the Liberalist Centre.</p>
          <div className="flex gap-4">
            <a href="#agenda" className="hover:text-slate-300 transition-colors">Programme</a>
            <a href="#speakers" className="hover:text-slate-300 transition-colors">Speakers</a>
            <a href="#partners" className="hover:text-slate-300 transition-colors">Partners</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">FAQ</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
