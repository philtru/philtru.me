import { useEffect } from 'react'
import { useTheme } from './contexts/ThemeContext'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Divider from './components/Divider'
import ThemeSwitcher from './components/ThemeSwitcher'
import TerminalCommands from './components/TerminalCommands'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  const { theme, themes } = useTheme()
  const currentThemeName = themes[theme]?.name || 'Default'

  useEffect(() => {
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
      <ScrollProgress />
      <ThemeSwitcher />
      <TerminalCommands currentTheme={currentThemeName} />
      <KeyboardShortcuts />
      <ScrollToTop />
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

