import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}

const themes = {
  dracula: {
    name: 'Dracula',
    colors: {
      '--bg': '#282a36',
      '--text': '#f8f8f2',
      '--accent': '#bd93f9',
      '--comment': '#6272a4',
      '--code-bg': '#44475a'
    }
  },
  monokai: {
    name: 'Monokai',
    colors: {
      '--bg': '#272822',
      '--text': '#f8f8f2',
      '--accent': '#a6e22e',
      '--comment': '#75715e',
      '--code-bg': '#3e3d32'
    }
  },
  default: {
    name: 'Default',
    colors: {
      '--bg': '#0a0a0a',
      '--text': '#e0e0e0',
      '--accent': '#00ff00',
      '--comment': '#888',
      '--code-bg': '#1a1a1a'
    }
  }
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme && themes[savedTheme] ? savedTheme : 'dracula'
  })

  useEffect(() => {
    const root = document.documentElement
    const themeColors = themes[theme].colors
    
    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
    
    // Update theme-color meta tag
    const themeColorMeta = document.querySelector('meta[name="theme-color"]')
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', themeColors['--bg'])
    }
    
    localStorage.setItem('theme', theme)
  }, [theme])

  const switchTheme = (newTheme) => {
    if (themes[newTheme]) {
      setTheme(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, themes, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

