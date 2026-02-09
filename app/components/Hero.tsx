'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { BackgroundLines } from './ui/background-lines'
import { Spotlight } from './ui/Spotlight'
import GlitchText from './ui/glitch-text'
import Scanlines from './ui/scanlines'

const Hero = () => {
  const now = new Date()
  const buildVersion = `v${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}`

  return (
    <BackgroundLines className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      <Scanlines intensity="low" />

      {/* Hero corner overlays */}
      <div>
        <span className="absolute top-20 left-4 text-xs md:text-sm text-muted-foreground z-20 font-terminal transition-colors transition-shadow duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]">
          [USER]::kocins.karlis
        </span>
        <span className="absolute top-20 right-4 text-xs md:text-sm text-muted-foreground z-20 font-terminal transition-colors transition-shadow duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]">
          [LOCATION]::LV-RIX
        </span>
        <span className="absolute bottom-4 left-4 text-xs md:text-sm text-muted-foreground z-20 font-terminal transition-colors transition-shadow duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]">
          [CONTACT]::kocins36@gmail.com
        </span>
        <span className="absolute bottom-4 right-4 text-xs md:text-sm text-muted-foreground z-20 font-terminal transition-colors transition-shadow duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.7)]">
          [BUILD]::{buildVersion}
        </span>
      </div>
      <Spotlight className="top-[-20%] left-0 md:left-60 md:-top-20" />

      {/* Content */}
      <div className="text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <GlitchText
            className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-primary mb-2 font-terminal"
            delay={500}
          >
            # SYSTEM.INIT // ACCESS_GRANTED
          </GlitchText>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[clamp(1rem,2vw,1.5rem)] text-foreground mb-8 font-terminal"
        >
          root@karlis-portfolio:~$ Penetration Testing | Full-Stack Development | Network Security
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#about"
            className="bg-primary text-primary-foreground px-[clamp(1rem,3vw,1.5rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full font-semibold hover:opacity-90 transition duration-300 text-[clamp(0.875rem,1.5vw,1rem)] font-terminal hover:animate-glitch"
          >
            $ ./initialize_profile.sh
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
        <ArrowDown className="text-primary w-[clamp(1.5rem,4vw,2rem)] h-[clamp(1.5rem,4vw,2rem)]" />
      </motion.div>
    </BackgroundLines>
  )
}

export default Hero

