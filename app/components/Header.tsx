'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { ContactDialog } from './contact-dialog'

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed w-full bg-background shadow-md z-50"
      >
        <nav className="max-w-5xl mx-auto px-4 py-2 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link 
              href="/" 
              className="text-sm font-bold text-foreground font-pressStart tracking-normal"
            >
              Karlis Portfolio
            </Link>
          </motion.div>
          <div className="flex items-center space-x-6">
            <ul className="flex space-x-6">
              {['About', 'Projects'].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </button>
              </motion.li>
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

export default Header

