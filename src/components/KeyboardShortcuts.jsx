import { useState } from 'react'
import './KeyboardShortcuts.css'

function KeyboardShortcuts() {
  const [isVisible, setIsVisible] = useState(false)

  const shortcuts = [
    { key: '1-5', description: 'Navigate to sections' },
    { key: '`', description: 'Open terminal' },
    { key: 'Esc', description: 'Close terminal/help' },
    { key: 'Tab', description: 'Navigate elements' }
  ]

  return (
    <>
      <button 
        className="shortcuts-toggle"
        onClick={() => setIsVisible(!isVisible)}
        aria-label="Toggle keyboard shortcuts"
        aria-expanded={isVisible}
      >
        <span className="shortcuts-icon">⌨</span>
      </button>
      
      {isVisible && (
        <div className="shortcuts-overlay" onClick={() => setIsVisible(false)}>
          <div className="shortcuts-modal" onClick={(event) => event.stopPropagation()}>
            <div className="shortcuts-header">
              <h3>{'// Keyboard Shortcuts'}</h3>
              <button 
                className="shortcuts-close"
                onClick={() => setIsVisible(false)}
                aria-label="Close shortcuts"
              >
                ×
              </button>
            </div>
            <div className="shortcuts-list">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="shortcut-item">
                  <kbd className="shortcut-key">{shortcut.key}</kbd>
                  <span className="shortcut-desc">{shortcut.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default KeyboardShortcuts

