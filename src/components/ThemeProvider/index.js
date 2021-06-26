import React, { useState, useEffect } from 'react'

export const ThemeContext = React.createContext({
  theme: '',
  setTheme: () => {}
})

function loadTheme() {
  const theme = localStorage.getItem('theme')
  return theme || 'dark'
}

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setTheme(loadTheme())
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext value={{ theme: theme, setTheme: setTheme }}>
      { children }
    </ThemeContext>
  )
}

export default ThemeContextProvider