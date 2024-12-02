"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const ThemeTransition = () => {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevTheme, setPrevTheme] = useState(theme)

  useEffect(() => {
    if (theme !== prevTheme) {
      setIsTransitioning(true)
      setPrevTheme(theme)
      
      setTimeout(() => {
        setIsTransitioning(false)
      }, 150)
    }
  }, [theme, prevTheme])

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.15,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed inset-0 z-[9999] backdrop-blur-[1px] pointer-events-none"
        />
      )}
    </AnimatePresence>
  )
} 