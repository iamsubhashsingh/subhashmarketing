import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ServicesList from '../components/ServicesList'
import Pricing from '../components/Pricing'
import CTA from '../components/CTA'

const Services = () => {
  const location = useLocation()

  /* ✅ Fix hash scrolling (/services#ppc-management) */
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Services | Marketing.thebuildlab</title>
        <meta
          name="description"
          content="Explore Marketing.thebuildlab services including SEO, PPC management, funnels, performance marketing and growth strategies to scale your business."
        />
        <meta
          name="keywords"
          content="SEO services, PPC management, digital marketing services, growth marketing agency, performance marketing"
        />
        <link
          rel="canonical"
          href="https://marketing.thebuildlab.in/services"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Digital Marketing Services | Marketing.thebuildlab" />
        <meta
          property="og:description"
          content="End-to-end digital marketing services designed to accelerate growth and maximize ROI."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://marketing.thebuildlab.in/services"
        />
      </Helmet>

      {/* ✅ Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* ✅ Hero Section */}
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

        {/* ✅ Service Anchors (DO NOT REMOVE) */}
        <section id="ppc-management">
          <ServicesList />
        </section>

        <section id="seo-strategy" />
        <section id="social-media" />
        <section id="funnel-building" />
        <section id="email-marketing" />
        <section id="brand-strategy" />

        {/* ✅ Pricing + CTA */}
        <Pricing />
        <CTA />
      </motion.div>
    </>
  )
}

export default Services
