import React from 'react'
import ToggleTheme from '../ToggleTheme'

/*
const Header = () => (
  <header className="sticky w-full max-w-8xl top-0 bg-gray-400 mx-auto shadow-md">
      <div className="flex items-center justify-between px-4 pt-4 sm:px-6 md:space-x-10">
        <h3 className="flex text-white ">pehcy</h3>
        <ToggleTheme />
      </div>
  </header>
)
*/
const Header = () => (
  <header className="sticky w-full top-0 bg-gray-400 shadow-lg">
    <div className="flex items-center justify-between max-w-5xl mx-auto sm:px-6 px-4 py-4 md:space-x-10">
      <div className="flex-none">
        <span className="text-white">pehcy</span>
      </div>
      <nav className="flex-grow flex flex-row">
        <span className="px-4 text-gray-50 font-medium">Home</span>
        <span className="px-4 text-gray-50 font-medium">Resume</span>
      </nav>
      <div className="flex space-x-6 justify-end items-center">
        <span className="text-gray-50 hover:text-gray-100 transition-colors duration-200">GitHub</span>
      </div>
    </div>
  </header>
)

export default Header