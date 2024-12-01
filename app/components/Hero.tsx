'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-900">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-white mb-8"
        >
          I'm a passionate developer creating amazing web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#about"
            className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <ArrowDown className="text-white" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero

