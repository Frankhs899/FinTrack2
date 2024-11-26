import { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Context } from '../../context/GlobalState';

function DarkModeToggle() {
  const { theme, handleChangeTheme } = useContext(Context);
  return (
    <button
      onClick={handleChangeTheme}
      className='hover:text-primary-500 dark:hover:text-secondary-400 transition duration-300 flex flex-col items-center'
    >
      {theme === 'dark' ? <FaMoon size={24} /> : <FaSun size={24} />}
    </button>
  );
}

export default DarkModeToggle;
