import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useColorMode } from 'theme-ui'

export const toggleSwitch = ({ children }) => {
  const [colorMode, setColorMode] = useColorMode();
  const nextColorMode = colorMode === 'light' ? 'dark' : 'light';

  return(
    <></>
  )
}