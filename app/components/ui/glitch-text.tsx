'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface GlitchTextProps {
  children: string
  className?: string
  delay?: number
}

const GlitchText = ({ children, className = '', delay = 0 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState('')
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index < children.length) {
          setDisplayText(children.slice(0, index + 1))
          index++
        } else {
          clearInterval(interval)
        }
      }, 50)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [children, delay])

  const triggerGlitch = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 200)
  }

  return (
    <motion.span
      className={`glitch ${isGlitching ? 'animate-glitch' : ''} ${className}`}
      data-text={displayText}
      onMouseEnter={triggerGlitch}
      onMouseLeave={() => setIsGlitching(false)}
      whileHover={{ scale: 1.05 }}
    >
      {displayText}
      <span className="terminal-cursor" />
    </motion.span>
  )
}

export default GlitchText
