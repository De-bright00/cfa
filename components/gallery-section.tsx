"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from "lucide-react"

export function GallerySection() {
  // 10 Slides from the slider folder
  const slides = [
    "/images/slider/slide-1.png",
    "/images/slider/slide-2.png",
    "/images/slider/slide-3.png",
    "/images/slider/slide-4.png",
    "/images/slider/slide-5.png",
    "/images/slider/slide-6.png",
    "/images/slider/slide-7.png",
    "/images/slider/slide-8.png",
    "/images/slider/slide-9.png",
    "/images/slider/slide-10.png"
  ]

  // 4 Photos from the gallery upload
  const photos = [
    { src: "/images/gallery/gallery-1.jpg", caption: "Keynote presentation at CFA" },
    { src: "/images/gallery/gallery-2.jpg", caption: "Featured panel discussion on liberty & markets" },
    { src: "/images/gallery/gallery-3.jpg", caption: "CFA delegates group photo" },
    { src: "/images/gallery/gallery-4.jpg", caption: "Networking and lunch break discussions" }
  ]

  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  // Lightbox state
  const [activePhoto, setActivePhoto] = useState<number | null>(null)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      handleNextSlide()
    }, 4500)
    return () => clearInterval(timer)
  }, [currentSlide, isPlaying])

  const handleNextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Slide transition animation config
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  }

  return (
    <section id="gallery" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-blue-900/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-semibold tracking-wider uppercase text-sm block mb-2">
            Looking Back
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-white tracking-tight">
            Inspire Gallery
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base">
            Capturing the energy, discussions, and advocacy from our previous flagship conference (CFA 2025).
          </p>
        </div>

        {/* Layout: Slideshow Top, Grid Bottom */}
        <div className="space-y-16">
          
          {/* 1. Interactive Slideshow */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-200 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 block" />
                Featured Moments & Highlights
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>
            </div>

            {/* Slideshow Display Container */}
            <div className="relative aspect-[16/9] w-full max-h-[500px] bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl group">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  alt={`Conference Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 border border-slate-850 text-slate-300 hover:text-white hover:bg-slate-950 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 border border-slate-850 text-slate-300 hover:text-white hover:bg-slate-950 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Counter Info Overlay */}
              <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 font-mono tracking-wider">
                {currentSlide + 1} / {slides.length}
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1)
                    setCurrentSlide(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-8 bg-red-650" : "w-2 bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 2. Photo Gallery Grid */}
          <div className="space-y-6 pt-8 border-t border-slate-800/60">
            <h3 className="text-lg font-semibold text-slate-200 tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 block" />
              Live Conference Photos
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-slate-950 border border-slate-850 hover:border-red-500/30 rounded-2xl overflow-hidden shadow-lg transition-all duration-350 cursor-pointer group relative"
                  onClick={() => setActivePhoto(index)}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-900">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-slate-400 text-xs sm:text-sm font-medium line-clamp-1 group-hover:text-slate-200 transition-colors duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col justify-center items-center p-4 sm:p-10 select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close photo viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev/Next buttons inside lightbox */}
            <button
              onClick={() => setActivePhoto((activePhoto - 1 + photos.length) % photos.length)}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors hidden md:flex"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActivePhoto((activePhoto + 1) % photos.length)}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors hidden md:flex"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div className="max-w-4xl max-h-[75vh] w-full flex justify-center items-center">
              <motion.img
                key={activePhoto}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={photos[activePhoto].src}
                alt={photos[activePhoto].caption}
                className="max-w-full max-h-[75vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
              />
            </div>

            {/* Caption Text */}
            <div className="text-center mt-6 max-w-xl">
              <p className="text-white text-base sm:text-lg font-serif">
                {photos[activePhoto].caption}
              </p>
              <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-mono">
                {activePhoto + 1} / {photos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
