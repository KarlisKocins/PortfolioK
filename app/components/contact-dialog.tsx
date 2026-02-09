import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, Linkedin, Mail, MapPin, Phone, Lock } from 'lucide-react'
import { Button } from './ui/button'

interface ContactDialogProps {
  isOpen: boolean
  onClose: () => void
}

export const ContactDialog = ({ isOpen, onClose }: ContactDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 grid w-full max-w-lg gap-4 border border-primary/20 bg-background p-6 shadow-lg duration-200 sm:rounded-lg"
          >
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-primary" />
                  <h2 className="text-lg font-semibold leading-none tracking-tight font-terminal">[SECURE_CHANNEL]::CONTACT</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="text-primary hover:bg-primary/10">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground font-terminal">Establishing encrypted connection...</p>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-terminal">[GEO]::LV-RIX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-terminal">[TEL]::+371.27090500</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:kocins36@gmail.com" className="hover:text-primary transition-colors font-terminal">
                    [MAIL]::kocins36@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" asChild className="border-primary/20 hover:bg-primary/10">
                  <a href="https://github.com/KarlisKocins" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-primary/20 hover:bg-primary/10">
                  <a href="https://www.linkedin.com/in/karlis-kocins-888bb4336/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-primary/20 hover:bg-primary/10">
                  <a href="mailto:kocins36@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 