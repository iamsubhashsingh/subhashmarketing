import { motion } from 'framer-motion'
import ServicesList from '../components/ServicesList'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden section-padding pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-accent-50 dark:from-primary-900/20 dark:via-transparent dark:to-accent-900/20" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              End-to-end marketing solutions designed to accelerate your growth and maximize ROI.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesList />
      <Pricing />
      <CTA />
    </motion.div>
  )
}

export default Services