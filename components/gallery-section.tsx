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

// Photos from the live conference (including CFA 2025 uploads)
  const photos = [
    "/images/gallery/gallery-5.jpg", // Panelists discussion on stage
    "/images/gallery/gallery-6.jpg", // Panelists on stage with CFA backdrop
    "/images/gallery/gallery-7.jpg", // Indoor delegate group photo
    "/images/gallery/gallery-8.jpg", // Outdoor delegation group photo
    "/images/gallery/gallery-9.jpg", // Outdoor delegation photo in blue attire
    "/images/gallery/gallery-1.jpg", // Keynote address at podium
    "/images/gallery/gallery-2.jpg", // Outdoor community group photo
    "/images/gallery/gallery-3.jpg", // Buffet & networking session
    "/images/gallery/gallery-4.jpg"  // Breakout & hallway discussion
  ]

  // Slide Deck state
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSlidePlaying, setIsSlidePlaying] = useState(true)
  const [slideDirection, setSlideDirection] = useState(0)

  // Photo Slideshow state
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const [isPhotoPlaying, setIsPhotoPlaying] = useState(true)
  const [photoDirection, setPhotoDirection] = useState(0)

  // Lightbox state
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<number | null>(null)

  // Auto-play for Slide Deck
  useEffect(() => {
    if (!isSlidePlaying) return
    const timer = setInterval(() => {
      setSlideDirection(1)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [currentSlide, isSlidePlaying, slides.length])

  // Auto-play for Photo Slideshow
  useEffect(() => {
    if (!isPhotoPlaying) return
    const timer = setInterval(() => {
      setPhotoDirection(1)
      setCurrentPhoto((prev) => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [currentPhoto, isPhotoPlaying, photos.length])

  const handleNextSlide = () => {
    setSlideDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrevSlide = () => {
    setSlideDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNextPhoto = () => {
    setPhotoDirection(1)
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const handlePrevPhoto = () => {
    setPhotoDirection(-1)
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  // Animation variants
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

        {/* Layout: Slideshow Top, Photo Slideshow Bottom */}
        <div className="space-y-20">
          
          {/* 1. Interactive Graphic Slide Deck */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-200 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 block" />
                Featured Moments & Highlights
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSlidePlaying(!isSlidePlaying)}
                  className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={isSlidePlaying ? "Pause slide deck" : "Play slide deck"}
                >
                  {isSlidePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>
            </div>

            {/* Slide Display Container */}
            <div className="relative aspect-[16/9] w-full max-h-[500px] bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl group">
              <AnimatePresence initial={false} custom={slideDirection} mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide]}
                  custom={slideDirection}
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
                    setSlideDirection(index > currentSlide ? 1 : -1)
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

          {/* 2. Live Conference Photos Slideshow (No picture labels) */}
          <div className="space-y-6 pt-10 border-t border-slate-800/60">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-slate-200 tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 block" />
                Live Conference Photos
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPhotoPlaying(!isPhotoPlaying)}
                  className="w-8 h-8 rounded-full bg-slate-950 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={isPhotoPlaying ? "Pause photo slideshow" : "Play photo slideshow"}
                >
                  {isPhotoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>
            </div>

            {/* Main Photo Slideshow Display Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full max-h-[560px] bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              onClick={() => setActiveLightboxPhoto(currentPhoto)}
            >
              {/* Blurred Ambient Backdrop */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-25 scale-110 pointer-events-none transition-all duration-700"
                style={{ backgroundImage: `url(${photos[currentPhoto]})` }}
              />

              {/* Photo Display */}
              <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4">
                <AnimatePresence initial={false} custom={photoDirection} mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={photos[currentPhoto]}
                    custom={photoDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    alt="Live Conference Photo"
                    className="max-w-full max-h-full object-contain rounded-xl shadow-lg select-none"
                  />
                </AnimatePresence>
              </div>

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrevPhoto()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 border border-slate-850 text-slate-300 hover:text-white hover:bg-slate-950 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleNextPhoto()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-950/70 border border-slate-850 text-slate-300 hover:text-white hover:bg-slate-950 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* View Fullscreen Hint */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-slate-800 p-2 rounded-lg text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs z-20">
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-medium">Click to enlarge</span>
              </div>

              {/* Photo Counter */}
              <div className="absolute bottom-4 right-4 bg-slate-950/85 backdrop-blur-sm border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 font-mono tracking-wider z-20">
                {currentPhoto + 1} / {photos.length}
              </div>
            </div>

            {/* Thumbnail Filmstrip */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-2 px-1 max-w-full scrollbar-none">
              {photos.map((src, index) => {
                const isActive = index === currentPhoto
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setPhotoDirection(index > currentPhoto ? 1 : -1)
                      setCurrentPhoto(index)
                    }}
                    className={`relative flex-shrink-0 w-14 h-10 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      isActive 
                        ? "border-red-500 scale-105 shadow-md shadow-red-500/20 opacity-100" 
                        : "border-slate-800 opacity-50 hover:opacity-85 hover:border-slate-700"
                    }`}
                    aria-label={`Show photo ${index + 1}`}
                  >
                    <img
                      src={src}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                )
              })}
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal (No image labels) */}
      <AnimatePresence>
        {activeLightboxPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex flex-col justify-center items-center p-4 sm:p-10 select-none"
            onClick={() => setActiveLightboxPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxPhoto(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors z-30"
              aria-label="Close photo viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev/Next buttons inside lightbox */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setActiveLightboxPhoto((activeLightboxPhoto - 1 + photos.length) % photos.length)
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors hidden md:flex z-30"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setActiveLightboxPhoto((activeLightboxPhoto + 1) % photos.length)
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors hidden md:flex z-30"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Photo Container */}
            <div 
              className="max-w-5xl max-h-[85vh] w-full flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activeLightboxPhoto}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={photos[activeLightboxPhoto]}
                alt="Enlarged conference photo"
                className="max-w-full max-h-[85vh] object-contain rounded-xl border border-slate-800 shadow-2xl"
              />
            </div>

            {/* Counter Only (No picture labels) */}
            <div className="text-center mt-4" onClick={(e) => e.stopPropagation()}>
              <p className="text-slate-400 text-xs uppercase tracking-widest font-mono">
                {activeLightboxPhoto + 1} / {photos.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
