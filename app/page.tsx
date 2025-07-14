import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import HomeProjects from './components/HomeProjects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <Projects />
        <HomeProjects />
        <Footer />
      </main>
    </div>
  )
}
