import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPlus, FaMinus } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const LinkNavbar = ({ link, icon: Icon, label }) => (
  <li className='hover:text-primary-500 dark:hover:text-secondary-400 transition duration-300'>
    <Link
      to={link}
      className='flex flex-col items-center'
    >
      <Icon size={24} />
      <span className='text-xs'>{label}</span>
    </Link>
  </li>
);

function Navbar() {
  return (
    <nav className='bg-base-50 dark:bg-base-800'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          to={'/'}
          className='flex items-center space-x-3 rtl:space-x-reverse hover:text-primary-500 transition duration-300 dark:hover:text-secondary-400'
        >
          <span className='self-center text-2xl font-semibold whitespace-nowrap'>
            FinTrack2
          </span>
        </Link>
        <ul className='w-full flex items-center justify-between mt-2 space-x-8 md:w-auto md:m-0'>
          <LinkNavbar
            link={'/'}
            icon={FaHome}
            label='Inicio'
          />
          <LinkNavbar
            link={'/income'}
            icon={FaPlus}
            label='Ingreso'
          />
          <LinkNavbar
            link={'/expense'}
            icon={FaMinus}
            label='Gasto'
          />
          <DarkModeToggle />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
