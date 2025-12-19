import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { services } from '../constants/data'
import { useNavigate } from 'react-router-dom'

const ServicesList = () => {
  const navigate = useNavigate()

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Groww <span className="gradient-text">Business</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive marketing solutions tailored to your business goals.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 card-hover backdrop-blur-sm">
                <div className="grid lg:grid-cols-3 gap-8">
                  
                  {/* Left column */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-6">
                      <div className="text-4xl flex-shrink-0">{service.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                          {service.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="lg:border-l lg:border-gray-200 dark:lg:border-gray-700 lg:pl-8">
                    <div className="sticky top-8">
                      <div className="mb-6">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          Best for
                        </div>
                        <div className="text-lg text-gray-700 dark:text-gray-300">
                          {service.bestFor}
                        </div>
                      </div>

                      <div className="mb-8">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          Starting at
                        </div>
                        <div className="text-3xl font-bold gradient-text">
                          {service.price}
                        </div>
                      </div>

                      {/* ✅ Redirects to Contact */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/contact')}
                        className="w-full btn-primary flex items-center justify-center space-x-2"
                      >
                        <span>Get a Proposal</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesList
