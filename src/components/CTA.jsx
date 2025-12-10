import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-900/30 dark:via-secondary-900/30 dark:to-accent-900/30" />
          
          {/* Animated particles */}
          <motion.div
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full"
          />

          <div className="relative glass-effect p-8 md:p-16">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-gray-900 dark:text-white"
              >
                Ready to
                <span className="gradient-text"> Scale </span>
                Your Growth?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Book a free 30-minute strategy call with our experts and discover how we can help you achieve remarkable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>Get My Free Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-semibold rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-300"
                >
                  View Pricing Plans
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-400 text-sm mt-6"
              >
                No commitment • 30-minute call • Custom strategy report
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA