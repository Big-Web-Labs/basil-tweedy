import React from 'react'
import { motion } from 'framer-motion'
import { Navbar, Footer, AboutBanner, ContactForm } from '../components'
import headFigure from '../assets/head_figure.png'

const About = () => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1.6 }}>
      <Navbar />
      <AboutBanner />
      <ContactForm image={headFigure}/>
      <Footer />
    </motion.div>
  )
}

export default About