import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '../constants/data'
import { Link } from 'react-router-dom'

const ServicesPreview = () => {
  const previewServices = services.slice(0, 4)
  
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive marketing solutions designed to drive growth at every stage of your customer journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full card-hover backdrop-blur-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-500 font-semibold">{service.price}</span>
                  <Link
                    to="/services"
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              View All Services
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview