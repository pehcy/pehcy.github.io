import React from 'react'
import { Link } from 'gatsby'
import ToggleTheme from '../ToggleTheme'

const Header = () => (
  <header className="sticky w-full top-0 bg-gray-400 shadow-lg z-50">
    <div className="flex items-center justify-between max-w-5xl mx-auto sm:px-6 px-4 py-4 md:space-x-10 font-serif font-medium">
      <div className="flex-none">
        <span className="text-white">CheeYung</span>
      </div>
      <nav className="flex-grow flex flex-row">
        <span className="px-4 text-gray-50 font-medium">
          <Link to='/'>Home</Link>
        </span>
        <span className="px-4 text-gray-50 font-medium">Resume</span>
      </nav>
      <div className="flex space-x-6 justify-end items-center">
        <span className="text-gray-50 hover:text-gray-100 transition-colors duration-200">GitHub</span>
      </div>
    </div>
  </header>
)

export default Header