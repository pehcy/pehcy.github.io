import React, { useState } from 'react';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';
import Dropdown from './dropdown';

const Header = () : JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleClick = () : void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col">
      <header className="sticky top-0 w-full z-50">
        <div className="flex items-center justify-between 
          max-w-6xl mx-auto sm:px-6 px-4 pb-1 pt-5
          md:space-x-10 font-medium border-b border-black bg-white"
        >
          <button
            onClick={handleClick}
            className="inline-flex p-3 rounded lg:hidden text-black
            mr-auto outline-none"
          >
            <svg
              className={`w-6 h-6 ${isExpanded ? 'rotate-90' : 'transform-none'} transition-all`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <nav className="flex flex-row">
            <ul className="flex flex-row pt-5 pb-2 md:visible invisible">
              <Link href='/'>
                <li>About Me</li>
              </Link>
              <Link href='/'>
                <li className="ml-6">Posts</li>
              </Link>
              <a href='https://github.com/pehcy'>
                <li className="ml-6">GitHub</li>
              </a>
            </ul>
          </nav>
          <ToggleTheme />
        </div>
      </header>
      <Dropdown isToggled={isExpanded} />
    </div>
  );
}

export default Header;