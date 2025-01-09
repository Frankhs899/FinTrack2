import { useState } from 'react';

import {
  FaHome,
  FaPlus,
  FaMinus,
  FaHistory,
  FaEraser,
  FaGithub,
} from 'react-icons/fa';

import logo from '../../assets/logo.webp';
import LinkNavbar from './LinkNavbar';
import ThemeButton from './ThemeButton';
import ToggleButton from './ToggleButton';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className='w-full md:w-64 md:min-h-screen flex flex-col bg-base-50 dark:bg-base-800 px-4'>
      <div className='w-full flex items-center justify-between border-b border-base-200 py-4'>
        <a
          href='#'
          className='flex items-center space-x-3'
        >
          <img
            src={logo}
            alt='logo'
            className='max-h-8 rounded-lg'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-primary-500 dark:text-secondary-500'>
            FinTrack2
          </span>
        </a>
        <ToggleButton toggleMenu={toggleMenu} />
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full md:block md:w-auto`}
      >
        <div className='w-full border-b border-base-200 text-base-500 dark:text-base-400 py-4'>
          <span>Menu</span>
          <ul className='py-2 flex flex-col gap-2'>
            <LinkNavbar
              label='Inicio'
              to='#'
              icon={<FaHome />}
            />
            <LinkNavbar
              label='Ingresos'
              to='#'
              icon={<FaPlus />}
            />
            <LinkNavbar
              label='Gastos'
              to='#'
              icon={<FaMinus />}
            />
            <LinkNavbar
              label='Transacciones'
              to='#'
              icon={<FaHistory />}
            />
          </ul>
        </div>
        <div className='w-full border-b border-base-200 text-base-500 dark:text-base-400 py-4'>
          <span>Opciones</span>
          <ul className='py-2 flex flex-col gap-2'>
            <LinkNavbar
              label='Reiniciar'
              to='#'
              icon={<FaEraser />}
            />
            <li className='px-2 rounded-md hover:bg-base-200 hover:text-base-900 dark:hover:bg-base-900 dark:hover:text-base-50'>
              <ThemeButton />
            </li>
          </ul>
        </div>
        <div className='w-full text-base-500 dark:text-base-400 py-4'>
          <div className='py-2 flex flex-col gap-2'>
            <div className='px-2 rounded-md hover:bg-base-200 hover:text-base-900'>
              <a
                href='#'
                className='flex items-center gap-1'
              >
                <FaGithub />
                <span>Repositorio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
