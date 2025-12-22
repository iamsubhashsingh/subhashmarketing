import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import AboutHero from '../components/AboutHero'
import Process from '../components/Process'
import Team from '../components/Team'
import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'

const About = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>About Us | Marketing.thebuildlab</title>
        <meta
          name="description"
          content="Learn about Marketing.thebuildlab — a performance-driven digital marketing agency helping brands grow with SEO, PPC, funnels, and data-led strategies."
        />
        <meta
          name="keywords"
          content="about marketing agency, digital marketing experts, growth marketing team, SEO agency India"
        />
        <link
          rel="canonical"
          href="https://marketing.thebuildlab.in/about"
        />

        {/* Open Graph */}
        <meta property="og:title" content="About Marketing.thebuildlab" />
        <meta
          property="og:description"
          content="Meet the team behind Marketing.thebuildlab and discover how we help brands scale with data-driven marketing."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://marketing.thebuildlab.in/about"
        />
      </Helmet>

      {/* ✅ Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutHero />
        <Process />
        <Team />
        <WhyChooseUs />
        <CTA />
      </motion.div>
    </>
  )
}

export default About
