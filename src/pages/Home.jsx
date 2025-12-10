import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import TrustLogos from '../components/TrustLogos'
import Benefits from '../components/Benefits'
import ServicesPreview from '../components/ServicesPreview'
import CaseStudies from '../components/CaseStudies'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
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
  )
}

export default Home