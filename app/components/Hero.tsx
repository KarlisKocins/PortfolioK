'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { BackgroundLines } from './ui/background-lines'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <BackgroundLines className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <Spotlight className="top-[-20%] left-0 md:left-60 md:-top-20" />
      {/* Content */}
      <div className="text-center relative z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(2rem,5vw,5rem)] font-bold text-foreground mb-4 leading-tight"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.5rem)] text-foreground mb-8"
        >
          I&apos;m a passionate developer creating amazing web experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#about"
            className="bg-primary text-primary-foreground px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full font-semibold hover:opacity-90 transition duration-300 text-[clamp(0.875rem,1.5vw,1rem)]"
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
        <ArrowDown className="text-foreground w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)]" />
      </motion.div>
    </BackgroundLines>
  )
}

export default Hero

