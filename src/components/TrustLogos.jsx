import { motion } from 'framer-motion'
import { trustLogos } from '../constants/data'

const TrustLogos = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-transparent dark:from-white/5 dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 dark:text-gray-400 font-medium">Trusted by leading brands worldwide</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1000]
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="flex space-x-12"
          >
            {[...trustLogos, ...trustLogos].map((logo, index) => (
              <motion.div
                key={`${logo.id}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0"
              >
                <div className="px-8 py-4 glass-effect rounded-xl">
                  <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {logo.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TrustLogos