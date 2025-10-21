'use client'

import { motion } from 'framer-motion'

interface ScanlinesProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

const Scanlines = ({ className = '', intensity = 'low' }: ScanlinesProps) => {
  const opacityMap = {
    low: 0.03,
    medium: 0.06,
    high: 0.1
  }

  return (
    <div className={`scanlines ${className}`}>
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 65, ${opacityMap[intensity]}) 2px,
            rgba(0, 255, 65, ${opacityMap[intensity]}) 4px
          )`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

export default Scanlines
