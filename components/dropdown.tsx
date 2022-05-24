const Dropdown : React.FC<{isToggled: boolean}> = ({ isToggled }) => {
  return (
    <div className={`mx-auto z-10 bg-white rounded w-48 ${isToggled ? 'visible' : 'invisible'}`}>
      <ul className="flex flex-col">
        <li>
          <a href="/" className="block py-2 px-4 hover:bg-gray-400">About Me</a></li>
        <li>
          <a href="/" className="block py-2 px-4 hover:bg-gray-400">Posts</a>  
        </li>
        <li>
          <a href="/" className="block py-2 px-4 hover:bg-gray-400">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;