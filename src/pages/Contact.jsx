import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Growthwavemarketing99@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9079342907",
      description: "Mon-Fri, 9am-6pm EST"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "Bangaluru, IN",
      description: "Remote team worldwide"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24 hours",
      description: "For all inquiries"
    }
  ]

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Ready to grow your business? Let's discuss how we can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm mb-4">
                  <MessageSquare className="w-4 h-4 mr-2 text-gray-700 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Let's Talk</span>
                </div>
                
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">How can we help you grow?</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Whether you're looking to launch a new campaign, optimize existing efforts, or build a comprehensive marketing strategy, we're here to help. Fill out the form and we'll get back to you with a customized plan.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{item.details}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact