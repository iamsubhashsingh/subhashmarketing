import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { pricingPlans } from '../constants/data'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-transparent dark:to-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your growth goals. All plans include our signature results-driven approach.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {/* Card */}
              <div
                className={`bg-white dark:bg-gray-800/50 border-2 ${
                  plan.popular
                    ? 'border-primary-500/50 shadow-2xl shadow-primary-500/10 dark:shadow-primary-500/20'
                    : 'border-gray-200 dark:border-gray-700'
                } rounded-3xl p-8 h-full backdrop-blur-sm`}
              >
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold gradient-text">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA → Contact */}
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-full font-semibold ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                        : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 inline-block backdrop-blur-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Need a custom solution?
              <Link
                to="/contact"
                className="gradient-text font-semibold ml-2 hover:underline"
              >
                Contact us for enterprise pricing →
              </Link>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Pricing
