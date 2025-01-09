import React from 'react';

function LinkNavbar({ label, to, icon }) {
  return (
    <li className='px-2 rounded-md hover:bg-base-200 hover:text-base-900 dark:hover:bg-base-900 dark:hover:text-base-50'>
      <a
        href={to}
        className='flex items-center gap-1'
      >
        {icon}
        {label}
      </a>
    </li>
  );
}

export default LinkNavbar;
