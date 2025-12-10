import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../constants/data'

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-white/5 dark:to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear what our clients have to say.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ 
                opacity: 0,
                x: direction > 0 ? 100 : -100 
              }}
              animate={{ 
                opacity: 1,
                x: 0 
              }}
              exit={{ 
                opacity: 0,
                x: direction > 0 ? -100 : 100 
              }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 md:p-12 backdrop-blur-sm"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                    <div className="text-2xl font-bold text-white">
                      {testimonials[current].name.charAt(0)}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent-500 text-accent-500"
                      />
                    ))}
                  </div>
                  
                  <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-6">
                    "{testimonials[current].review}"
                  </p>
                  
                  <div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{testimonials[current].name}</div>
                    <div className="text-primary-500">{testimonials[current].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className="relative w-2 h-2 rounded-full"
                >
                  <motion.div
                    animate={{
                      scale: current === index ? 1.5 : 1,
                      backgroundColor: current === index ? '#0ea5e9' : '#9ca3af'
                    }}
                    className="w-full h-full rounded-full"
                  />
                </button>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials