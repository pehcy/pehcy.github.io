import React from 'react'
import { useColorMode } from 'theme-ui'

export default function DarkModeToggle() {
  const [colorMode, setColorMode] = useColorMode()
  const isLight = colorMode === 'light'

  const toggleTheme = (event : React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setColorMode(isLight ? 'dark' : 'light')
  }

  return (
    <button
      onClick = { toggleTheme }
      aria-label={ isLight ? 'Light mode activated' : 'Dark mode activated'} 
    >
      Toggle
    </button>
  )
}