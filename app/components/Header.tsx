'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import { ContactDialog } from './contact-dialog'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Navigation Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-[250px] bg-background shadow-lg z-50 md:hidden"
            >
              <div className="p-4">
                <div className="flex justify-end mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <ul className="space-y-4">
                  {['About', 'Projects'].map((item) => (
                    <motion.li 
                      key={item}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link 
                        href={`#${item.toLowerCase()}`}
                        className="block text-sm text-muted-foreground hover:text-foreground py-2"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={() => {
                        setIsDrawerOpen(false)
                        setIsContactOpen(true)
                      }}
                      className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2"
                    >
                      Contact
                    </button>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}

export default Header

