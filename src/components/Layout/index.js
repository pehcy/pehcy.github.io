import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'

const Layout = ({ children }) => (
  <div className="mx-auto min-h-screen flex flex-col">
    <Header />
    { children }
    <footer className="pt-7 pb-8 bg-blue-700">
      <div className="flex items-center justify-between mx-auto max-w-5xl">
        <p className="font-serif text-white">© All rights reserved | Made with ♥ in GatsbyJS</p>
      </div>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout