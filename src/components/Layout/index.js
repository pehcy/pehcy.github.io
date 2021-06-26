import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

const Layout = ({ children }) => (
  <div className="mx-auto flex flex-col">
    <Header />
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout