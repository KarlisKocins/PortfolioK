import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Homelab from './components/Homelab'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Homelab />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
