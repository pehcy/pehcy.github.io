import React from 'react'
import { BtnWrapper,  DayNight, IconLayer } from './styles'
import { useColorMode } from 'theme-ui'

export default function NightModeToggle() {
  const [colorMode, setColorMode] = useColorMode()
  const isLight = colorMode === 'light'

  const toggleTheme = (event : React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setColorMode(isLight ? 'dark' : 'light')
  }

  return (
    <BtnWrapper
      onClick = { toggleTheme }
      aria-label={ isLight ? 'Light mode activated' : 'Dark mode activated'} 
    >
      <DayNight isLight={ isLight }/>
      <IconLayer isLight={ isLight }/>
    </BtnWrapper>
  )
}