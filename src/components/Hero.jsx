import { useEffect, useState } from 'react'
// import ASCIIArt from './ASCIIArt'
import './Hero.css'

function Hero() {
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header id="hero">
      <a href="#about" className="skip-to-content" aria-label="Skip to main content">Skip to content</a>
      {/* <ASCIIArt /> */}
      <h1 className="terminal-text">
        <span className="prompt" aria-hidden="true">{'>'} </span>
        <span className={typingComplete ? 'typing-complete' : 'typing'}>
          Hello, I&apos;m Philipp Trubchenko
        </span>
        <span className="cursor" aria-hidden="true">_</span>
      </h1>
      <p className="subtitle">Full Stack Developer • San Francisco, CA</p>
      <nav className="inline-nav" aria-label="Main navigation">
        <a href="#about" aria-label="About section">[about]</a>
        <a href="#experience" aria-label="Experience section">[experience]</a>
        <a href="#stack" aria-label="Tech stack section">[stack]</a>
        <a href="#projects" aria-label="Projects section">[projects]</a>
        <a href="#contact" aria-label="Contact section">[contact]</a>
      </nav>
    </header>
  )
}

export default Hero

