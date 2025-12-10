import { motion } from 'framer-motion'
import { CheckCircle, BarChart3, Users, Shield, TrendingUp, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Transparent Reporting",
      description: "Real-time dashboards and clear, actionable insights delivered weekly."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "Every decision backed by data and continuous optimization."
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Your own account manager and 24/7 access to our team."
    },
    {
      icon: Shield,
      title: "No Long-Term Contracts",
      description: "Month-to-month agreements with performance-based partnerships."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "100+ successful campaigns with measurable ROI improvements."
    },
    {
      icon: Zap,
      title: "Conversion-Focused",
      description: "Every strategy designed to maximize conversions and revenue."
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-white/5 dark:to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What sets us apart from other agencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 h-full card-hover backdrop-blur-sm">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-7 h-7 text-primary-500" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { value: "24/7", label: "Support Available" },
              { value: "2x", label: "Faster Growth" },
              { value: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs