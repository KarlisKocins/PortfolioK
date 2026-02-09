'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-lg font-semibold font-terminal">
              root@karlis:~$ echo &apos;Secure code. Protect systems. Build future.&apos;
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com/KarlisKocins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300 hover:animate-glitch"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/karlis-kocins-888bb4336/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300 hover:animate-glitch"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kocins36@gmail.com"
              className="hover:text-primary transition duration-300 hover:animate-glitch"
              aria-label="Send email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary/20">
          <p className="text-center text-sm text-muted-foreground font-terminal">
            END_TRANSMISSION // STAY_SECURE //
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

