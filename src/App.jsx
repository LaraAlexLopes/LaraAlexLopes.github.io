import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { useSpotlight } from './components/ui.jsx'
import { profile } from './data.js'

export default function App() {
  useSpotlight()
  return (
    <>
      <div className="bg" aria-hidden="true">
        <div className="bg-grid" />
      </div>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="mono dim">feito com React + Vite</span>
        </div>
      </footer>
    </>
  )
}
