import React from 'react';
import { FaBars } from 'react-icons/fa';

function ToggleButton({ toggleMenu }) {
  return (
    <button
      className='inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-base-500 rounded-lg hover:bg-base-100 focus:outline-none focus:ring-2 focus:ring-base-200 dark:text-base-400 dark:hover:bg-base-700 dark:focus:ring-base-600'
      onClick={toggleMenu}
    >
      <FaBars className='w-5 h-5' />
    </button>
  );
}

export default ToggleButton;
