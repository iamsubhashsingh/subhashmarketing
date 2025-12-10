import { motion } from 'framer-motion'

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden section-padding pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50 dark:from-primary-900/20 dark:via-transparent dark:to-secondary-900/20" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 bg-accent-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About GrowthWave</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-gray-900 dark:text-white"
            >
              Your
              <span className="gradient-text"> Growth </span>
              Partners,
              <span className="block gradient-text">Not Just Another</span>
              Agency
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              At GrowthWave, we believe in partnerships, not just projects. We're a team of passionate marketers, designers, and strategists dedicated to driving measurable growth for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  Founded in 2018 with a vision to transform how businesses approach digital marketing
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  Successfully scaled 100+ brands across various industries
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  Combined expertise of 50+ years in digital marketing and growth strategy
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "100+", label: "Brands Scaled" },
              { value: "$25M+", label: "Revenue Generated" },
              { value: "4.9/5", label: "Client Rating" },
              { value: "98%", label: "Retention Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center card-hover backdrop-blur-sm"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero