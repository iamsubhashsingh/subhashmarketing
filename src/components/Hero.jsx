import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden section-padding pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-900/10 dark:via-transparent dark:to-secondary-900/10" />

      {/* Animated shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left content */}
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
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                🚀 100+ Brands Scaled
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-gray-900 dark:text-white"
            >
              Turn <span className="gradient-text">Clicks</span> Into{" "}
              <span className="gradient-text">Customers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Performance-driven marketing agency specializing in PPC, funnels,
              and high-ROI campaigns that deliver measurable results.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              {/* Contact CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              {/* Blog CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/blogs")}
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Read Blogs</span>
              </motion.button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-2 border-white dark:border-gray-900"
                    />
                  ))}
                </div>
                <span className="ml-4">25+ Happy Clients</span>
              </div>

              <div className="hidden md:block">
                <div className="flex items-center">
                  <div className="text-accent-500">★★★★★</div>
                  <span className="ml-2">5.0 Rating</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right stats card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 backdrop-blur-lg">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3.2x", label: "Avg. ROAS" },
                  { value: "180%", label: "Growth" },
                  { value: "24h", label: "Response Time" },
                  { value: "98%", label: "Client Retention" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/50 dark:bg-gray-900/50 rounded-2xl p-6 text-center"
                  >
                    <div className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
