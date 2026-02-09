import './globals.css'
import { Inter, Press_Start_2P, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Karlis Kocins | Full-Stack Developer & Home Automation',
  description: 'Portfolio of Karlis Kocins — Full-Stack Developer specializing in Next.js, React, TypeScript, and smart home automation. Based in Riga, Latvia.',
  keywords: ['Karlis Kocins', 'Full-Stack Developer', 'Next.js', 'React', 'TypeScript', 'Home Automation', 'Portfolio', 'Riga', 'Latvia'],
  authors: [{ name: 'Karlis Kocins' }],
  openGraph: {
    title: 'Karlis Kocins | Full-Stack Developer & Home Automation',
    description: 'Portfolio of Karlis Kocins — Full-Stack Developer specializing in Next.js, React, TypeScript, and smart home automation.',
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
      <body className={`${inter.className} ${pressStart.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
