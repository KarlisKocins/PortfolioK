import './globals.css'
import localFont from 'next/font/local'
import { JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kārlis Kociņš | Full-Stack Developer',
  description: 'Kārlis Kociņš — full-stack developer, Mārupe, Latvia. Next.js, TypeScript and PostgreSQL on the software side; Home Assistant, Zigbee and managed switches on the other.',
  keywords: ['Kārlis Kociņš', 'Full-Stack Developer', 'Next.js', 'TypeScript', 'PostgreSQL', 'Home Assistant', 'Homelab', 'Networking', 'Portfolio', 'Mārupe', 'Latvia'],
  authors: [{ name: 'Kārlis Kociņš' }],
  openGraph: {
    title: 'Kārlis Kociņš | Full-Stack Developer',
    description: 'Full-stack developer in Mārupe, Latvia. Web apps end to end — and the parts that touch real hardware.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Scroll reveals start hidden and are animated in by JS — show them outright without it. */}
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body className={`${geistSans.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
