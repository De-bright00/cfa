import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "CFA 2026 — ADVANCE | Conference of Freedom Advocates",
  description: "Organised by the Liberalist Centre. 31 October 2026. Advancing Freedom, Reform and Human Flourishing in Africa.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "CFA 2026 — ADVANCE | Conference of Freedom Advocates",
    description: "Organised by the Liberalist Centre. 31 October 2026. Advancing Freedom, Reform and Human Flourishing in Africa.",
    images: [{ url: "/images/liberalist-centre-logo.png" }],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
