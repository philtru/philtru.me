import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Divider from './components/Divider'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scroll with keyboard navigation
    const handleKeyPress = (event) => {
      const sections = {
        '1': '#about',
        '2': '#experience',
        '3': '#stack',
        '4': '#projects',
        '5': '#contact'
      }
      
      if (sections[event.key]) {
        const element = document.querySelector(sections[event.key])
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('keypress', handleKeyPress)
    return () => document.removeEventListener('keypress', handleKeyPress)
  }, [])

  return (
    <main className="container">
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <TechStack />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <div className="divider">{'// EOF'}</div>
    </main>
  )
}

export default App

