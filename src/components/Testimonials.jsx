import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { testimonials } from '../constants/data'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-play slider (5 seconds), pauses on hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [current, isPaused])

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95
    })
  }

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900/40 dark:via-black dark:to-gray-900/40 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4 border border-primary-100 dark:border-primary-900/50">
            ⭐ Client Reviews & Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how we help ambitious businesses achieve remarkable growth.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div
          className="relative px-2 md:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Active Testimonial Card */}
          <div className="overflow-hidden min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full bg-white dark:bg-gray-800/80 border border-gray-200/90 dark:border-gray-700/80 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none backdrop-blur-md relative overflow-hidden"
              >
                {/* Decorative Watermark Quote */}
                <Quote className="absolute -top-3 -right-3 w-28 h-28 text-gray-100 dark:text-gray-700/30 pointer-events-none -rotate-12" />

                <div className="relative z-10 space-y-6">
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[current].rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xl md:text-2xl italic text-gray-800 dark:text-gray-100 leading-relaxed font-medium">
                    "{testimonials[current].review}"
                  </p>

                  {/* Client Metadata */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700/60">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary-600 via-indigo-600 to-secondary-600 flex items-center justify-center text-white font-bold text-xl shadow-md shrink-0">
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                        {testimonials[current].name}
                      </h3>
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between gap-4 mt-8 pt-2">
            {/* Back Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              title="Previous Testimonial"
              aria-label="Previous Testimonial"
              className="p-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  title={`Go to testimonial ${index + 1}`}
                  className="p-1 focus:outline-none"
                >
                  <motion.div
                    animate={{
                      width: current === index ? 28 : 10,
                      backgroundColor: current === index ? '#0ea5e9' : '#d1d5db'
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-2.5 rounded-full"
                  />
                </button>
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              title="Next Testimonial"
              aria-label="Next Testimonial"
              className="p-3.5 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 shadow-md text-white hover:brightness-110 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials