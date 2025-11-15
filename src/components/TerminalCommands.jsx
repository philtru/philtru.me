import { useState, useEffect, useRef } from 'react'
import './TerminalCommands.css'

const commands = {
  help: {
    output: `Available commands:
  help          - Show this help message
  whoami        - Display user information
  ls            - List sections
  clear         - Clear terminal
  theme         - Show current theme
  date          - Show current date/time
  neofetch      - Display system information
  contact       - Show contact information
  resume        - Open resume (if available)
  github        - Open GitHub profile
  linkedin      - Open LinkedIn profile`
  },
  whoami: {
    output: `philtru
Full Stack Developer
San Francisco, CA
Building scalable web applications`
  },
  ls: {
    output: `about/  experience/  stack/  projects/  contact/`
  },
  theme: {
    output: (currentTheme) => `Current theme: ${currentTheme}`
  },
  date: {
    output: () => new Date().toLocaleString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    })
  },
  neofetch: {
    output: `       ███████╗██╗  ██╗██╗██╗     ██╗██████╗ 
       ██╔════╝██║  ██║██║██║     ██║██╔══██╗
       ███████╗███████║██║██║     ██║██████╔╝
       ╚════██║██╔══██║██║██║     ██║██╔══██╗
       ███████║██║  ██║██║███████╗██║██████╔╝
       ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚═╝╚═════╝ 
       
  philtru@philtru.me
  -----------------
  OS: React 18.2.0
  Shell: JavaScript (ES6+)
  Terminal: Browser
  Editor: VS Code
  Theme: Terminal Dark
  Location: San Francisco, CA
  Languages: JavaScript, TypeScript, Go
  Frameworks: React, Next.js, GraphQL
  Tools: Docker, Kubernetes, Proxmox`
  },
  contact: {
    output: `Email: seresigo1@gmail.com
LinkedIn: linkedin.com/in/philipptru
GitHub: github.com/philtru`
  },
  github: {
    action: () => window.open('https://github.com/philtru', '_blank')
  },
  linkedin: {
    action: () => window.open('https://www.linkedin.com/in/philipptru', '_blank')
  },
  clear: {
    action: 'clear'
  }
}

function TerminalCommands({ currentTheme }) {
  const [commandHistory, setCommandHistory] = useState([])
  const [currentCommand, setCurrentCommand] = useState('')
  const [isActive, setIsActive] = useState(false)
  const inputRef = useRef(null)
  const terminalRef = useRef(null)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === '`' && !event.ctrlKey && !event.metaKey) {
        event.preventDefault()
        setIsActive(true)
        setTimeout(() => inputRef.current?.focus(), 0)
      }
      if (event.key === 'Escape' && isActive) {
        setIsActive(false)
        setCurrentCommand('')
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isActive])

  useEffect(() => {
    if (terminalRef.current && isActive) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commandHistory, isActive])

  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase()
    
    if (!trimmedCommand) {
      setCommandHistory(prev => [...prev, { type: 'input', value: '' }, { type: 'output', value: '' }])
      return
    }

    if (trimmedCommand === 'clear') {
      setCommandHistory([])
      return
    }

    const commandHandler = commands[trimmedCommand]
    
    if (commandHandler) {
      if (commandHandler.action) {
        if (typeof commandHandler.action === 'function') {
          commandHandler.action()
        }
        if (trimmedCommand === 'clear') {
          return
        }
      }
      
      let output = ''
      if (typeof commandHandler.output === 'function') {
        output = commandHandler.output(currentTheme)
      } else {
        output = commandHandler.output
      }
      
      setCommandHistory(prev => [
        ...prev,
        { type: 'input', value: command },
        { type: 'output', value: output }
      ])
    } else {
      setCommandHistory(prev => [
        ...prev,
        { type: 'input', value: command },
        { type: 'output', value: `Command not found: ${trimmedCommand}. Type 'help' for available commands.` }
      ])
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    executeCommand(currentCommand)
    setCurrentCommand('')
  }

  if (!isActive) {
    return (
      <button 
        className="terminal-toggle-mobile"
        onClick={() => setIsActive(true)}
        aria-label="Open terminal"
      >
        ⌨
      </button>
    )
  }

  return (
    <div className="terminal-overlay" onClick={(event) => {
      if (event.target === event.currentTarget) {
        setIsActive(false)
      }
    }}>
      <div className="terminal-window" onClick={(event) => event.stopPropagation()}>
        <div className="terminal-header">
          <span className="terminal-title">philtru@philtru.me: ~</span>
          <button 
            className="terminal-close" 
            onClick={() => setIsActive(false)}
            aria-label="Close terminal"
          >
            ×
          </button>
        </div>
        <div className="terminal-body" ref={terminalRef}>
          <div className="terminal-welcome">
            Welcome to philtru.me terminal. Type &apos;help&apos; for available commands.
          </div>
          {commandHistory.map((item, index) => (
            <div key={index} className={`terminal-line ${item.type}`}>
              {item.type === 'input' && (
                <span className="terminal-prompt">$ </span>
              )}
              <span>{item.value}</span>
            </div>
          ))}
          <form onSubmit={handleSubmit} className="terminal-input-line">
            <span className="terminal-prompt">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(event) => setCurrentCommand(event.target.value)}
              className="terminal-input"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default TerminalCommands

