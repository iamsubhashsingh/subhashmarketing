import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import Hero from '../components/Hero'
import TrustLogos from '../components/TrustLogos'
import Benefits from '../components/Benefits'
import ServicesPreview from '../components/ServicesPreview'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Marketing.thebuildlab | Digital Marketing & Growth Agency</title>
        <meta
          name="description"
          content="Marketing.thebuildlab is a performance-driven digital marketing agency offering SEO, PPC, funnels, and growth strategies to scale your business."
        />
        <meta
          name="keywords"
          content="digital marketing agency, SEO services, PPC management, growth marketing, performance marketing"
        />
        <link rel="canonical" href="https://marketing.thebuildlab.in/" />

        {/* Open Graph (WhatsApp / LinkedIn) */}
        <meta property="og:title" content="Marketing.thebuildlab | Growth Marketing Agency" />
        <meta
          property="og:description"
          content="Scale your business with SEO, PPC and data-driven growth strategies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marketing.thebuildlab.in/" />
      </Helmet>

      {/* ✅ Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <TrustLogos />
        <Benefits />
        <ServicesPreview />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </motion.div>
    </>
  )
}

export default Home
