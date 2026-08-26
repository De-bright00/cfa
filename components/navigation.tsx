"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#agenda", label: "Programme" },
    { href: "#speakers", label: "Speakers" },
    { href: "#partners", label: "Partners" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/90 border-b border-slate-800/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="https://liberalistcentre.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/liberalist-centre-logo.png"
                alt="Liberalist Centre"
                width={200}
                height={40}
                className="h-9 w-auto filter brightness-0 invert"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-red-500 px-3 py-2 text-sm font-semibold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 tracking-wide uppercase text-xs rounded-full transition-all duration-300 shadow-md shadow-red-950/30"
              onClick={() => window.open("https://forms.gle/ES2Rob2Smzrs2DAPA", "_blank")}
            >
              Register
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-red-500 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-950 border-t border-slate-800/80">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-red-500 block px-3 py-3 text-base font-semibold border-b border-slate-900/50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-3 py-4">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold w-full py-3 tracking-wide uppercase text-sm rounded-full transition-all duration-300"
                  onClick={() => {
                    setIsOpen(false)
                    window.open("https://forms.gle/ES2Rob2Smzrs2DAPA", "_blank")
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
