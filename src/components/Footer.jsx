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
    <footer className="relative backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800">
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
                <Link to="/" className="flex items-center space-x-2">
                  <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    GrowthWave
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Marketing
                  </span>
                </Link>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 dark:text-gray-300 text-sm mb-6"
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
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
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
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
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
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
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
                  className="text-gray-700 dark:text-gray-300"
                >
                  hello@growthwave.com
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  +1 (555) 123-4567
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-gray-700 dark:text-gray-300"
                >
                  San Francisco, CA
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8">
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
              <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm font-medium text-gray-700 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
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