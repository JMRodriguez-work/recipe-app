import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('darkMode')
    if (savedTheme !== null) {
      return JSON.parse(savedTheme)
    }
    return false
  })
  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.setAttribute('data-theme', 'light')
    }
    window.localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
