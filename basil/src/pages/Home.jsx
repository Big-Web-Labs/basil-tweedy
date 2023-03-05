import React from 'react'
import { motion } from 'framer-motion'
import { Navbar, HomePortfolio, Footer } from '../components'

const Home = () => {
  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 0.8 }}>
      <Navbar />
      <HomePortfolio />
      <Footer />
    </motion.div>
  )
}

export default Home