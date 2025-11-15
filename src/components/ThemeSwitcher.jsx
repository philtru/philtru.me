import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import './ThemeSwitcher.css'

function ThemeSwitcher() {
  const { theme, themes, switchTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (themeKey) => {
    switchTheme(themeKey)
    setIsOpen(false)
  }

  const currentThemeName = themes[theme]?.name || 'Default'

  return (
    <div className="theme-switcher">
      <span className="theme-label">{'// theme:'}</span>
      <div className="theme-select-wrapper" ref={dropdownRef}>
        <button
          className="theme-select-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Select theme"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span>{currentThemeName}</span>
          <span className={`theme-select-arrow ${isOpen ? 'open' : ''}`} aria-hidden="true">▼</span>
        </button>
        {isOpen && (
          <div className="theme-dropdown-menu" role="listbox">
            {Object.entries(themes).map(([key, themeData]) => (
              <button
                key={key}
                className={`theme-dropdown-item ${theme === key ? 'selected' : ''}`}
                onClick={() => handleSelect(key)}
                role="option"
                aria-selected={theme === key}
              >
                {theme === key && (
                  <span className="theme-checkmark" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 3.5L5.5 9.5L2.5 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
                <span>{themeData.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ThemeSwitcher

