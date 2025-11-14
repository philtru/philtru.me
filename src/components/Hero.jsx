import { useEffect, useState } from 'react'
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
      <h1 className="terminal-text">
        <span className="prompt">{'>'} </span>
        <span className={typingComplete ? 'typing-complete' : 'typing'}>
          Hello, I&apos;m Philipp Trubchenko
        </span>
        <span className="cursor">_</span>
      </h1>
      <p className="subtitle">Full Stack Developer • San Francisco, CA</p>
      <nav className="inline-nav">
        <a href="#about">[about]</a>
        <a href="#experience">[experience]</a>
        <a href="#stack">[stack]</a>
        <a href="#projects">[projects]</a>
        <a href="#contact">[contact]</a>
        <a href="https://drive.google.com/file/d/your-resume-id" target="_blank" rel="noopener noreferrer">[resume.pdf]</a>
      </nav>
    </header>
  )
}

export default Hero

