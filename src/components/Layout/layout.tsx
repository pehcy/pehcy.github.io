import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useColorMode } from 'theme-ui'

const Layout = ({children}) => {
  const [colorMode] = useColorMode();

  useEffect(() => {
    parent.postMessage({ theme: colorMode}, '*')
  }, [colorMode])

  return(
    <div>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout