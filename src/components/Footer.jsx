import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  const serviceLinks = [
    'PPC Management',
    'SEO Strategy',
    'Social Media',
    'Funnel Building',
    'Email Marketing',
    'Brand Strategy'
  ]

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' }
  ]

  return (
    <footer className="relative bg-gray-50 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  GrowthWave
                </div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  Performance-driven marketing agency
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-400 text-sm mb-6"
              >
                We help ambitious brands scale their growth through data-driven marketing strategies and high-ROI campaigns.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-sm"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-3">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="#"
                      className="text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
              <ul className="space-y-4">
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Email</span>
                  <a href="mailto:hello@growthwave.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                    hello@growthwave.com
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Phone</span>
                  <a href="tel:+15551234567" className="text-primary-600 dark:text-primary-400 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-1">Location</span>
                  <span className="text-gray-700 dark:text-gray-400">San Francisco, CA</span>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-700 dark:text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} GrowthWave Marketing. All rights reserved.
            </motion.p>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors font-medium">
                Terms of Service
              </a>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-sm"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer