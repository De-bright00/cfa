"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  "/images/slider/slide-1.png", // Polaroid photos on clothesline with conference description
  "/images/slider/slide-2.png", // Freedom Advocates text on light background
  "/images/slider/slide-3.png", // Freedom Advocates text variant
  "/images/slider/slide-4.png", // African continent map with country flags
  "/images/slider/slide-5.png", // Three people networking polaroid photo
  "/images/slider/slide-6.png", // Workshop photos with description text
  "/images/slider/slide-7.png", // Man in traditional Nigerian attire polaroid
]

export function ImageSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-[#0A1A2F]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide || "/placeholder.svg"}
                  alt={`Conference slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-red-500" : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
