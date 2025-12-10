import { motion } from 'framer-motion'
import AboutHero from '../components/AboutHero'
import Process from '../components/Process'
import Team from '../components/Team'
import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'

const About = () => {
  return (
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
  )
}

export default About