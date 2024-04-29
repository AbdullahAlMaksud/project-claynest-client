import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(JSON.parse(storedDarkMode));
      document.documentElement.classList.toggle('dark', JSON.parse(storedDarkMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleDarkMode}
        className={`rounded-full w-9 h-9 flex items-center justify-center focus:outline-none ${
          darkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`}
      >
        <div
        
          className={`w-6 h-6 text-white dark:text-gray-800 rounded-full flex items-center justify-center ${
            darkMode ? 'block' : 'hidden'
          }`}
        >
          <MdDarkMode className='text-white text-xl'/>
        </div>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-gray-800 dark:text-white ${
            darkMode ? 'hidden' : 'block'
          }`}
        >
          <MdLightMode className='text-xl'/>
        </div>
      </button>
    </div>
  );
};

export default DarkModeToggle;
