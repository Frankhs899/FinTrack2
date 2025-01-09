import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { FaMoon, FaSun } from 'react-icons/fa';

function ThemeButton() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <button
      className='flex items-center gap-1 w-full'
      onClick={handleChangeTheme}
    >
      {theme === 'dark' ? (
        <>
          <FaSun />
          <span>Modo Claro</span>
        </>
      ) : (
        <>
          <FaMoon />
          <span>Modo Oscuro</span>
        </>
      )}
    </button>
  );
}

export default ThemeButton;
