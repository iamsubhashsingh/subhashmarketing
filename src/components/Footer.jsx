import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Linkedin, Instagram, MessageCircle, ArrowUp } from 'lucide-react'

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
    {
      icon: MessageCircle,
      href: 'https://wa.me/919079342907',
      label: 'WhatsApp'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/subhash-singh-983060303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/subhash_singh0000?igsh=MTh3cWt1OGhhZnI5bA==',
      label: 'Instagram'
    }
  ]

  return (
    <footer className="relative backdrop-blur-lg bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Brand */}
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Marketing
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  thebuildlab
                </span>
              </Link>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                We help ambitious brands scale their growth through data-driven marketing strategies and high-ROI campaigns.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li
                    key={service}
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
                Contact Info
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li>Marketing.thebuildlab@gmail.com</li>
                <li>+91 9079342907</li>
                <li>Bangaluru, INDIA</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} GrowthWave Marketing. All rights reserved. (Developed by Sasta Coder)
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
