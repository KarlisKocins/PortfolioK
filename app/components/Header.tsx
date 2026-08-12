'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#homelab', label: 'Homelab' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/[0.82] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em]">
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md border border-accent font-mono text-[11px] text-accent">
            KK
          </span>
          Kārlis Kociņš
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:kocins36@gmail.com"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="-mr-2 p-2 text-muted transition-colors hover:text-foreground md:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:kocins36@gmail.com"
              onClick={() => setIsMenuOpen(false)}
              className="mt-3 rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
