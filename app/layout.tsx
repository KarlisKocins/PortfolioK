import './globals.css'
import { Inter, Press_Start_2P, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from './components/theme-provider'

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

export const metadata = {
  title: 'SYSTEM.ACCESS // Portfolio Terminal',
  description: 'root@karlis-portfolio:~$ Penetration Testing | Full-Stack Development | Network Security',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${pressStart.variable} ${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

