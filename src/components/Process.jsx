import { motion } from 'framer-motion'
import { processSteps } from '../constants/data'

const Process = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-transparent dark:to-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A systematic approach to delivering exceptional results, every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500" />
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Step number */}
                <div className="absolute lg:relative left-1/2 lg:left-auto transform -translate-x-1/2 lg:transform-none z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center"
                  >
                    <span className="text-2xl">{step.icon}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`lg:w-5/12 mt-8 lg:mt-0 ${
                  index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-primary-500 text-sm font-semibold mr-2">
                        Step {index + 1}
                      </span>
                      <div className="h-px flex-grow bg-gradient-to-r from-primary-500 to-transparent" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </motion.div>
                </div>

                {/* Spacer for even steps */}
                <div className="hidden lg:block lg:w-2/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process