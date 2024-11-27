import React from 'react';

const LinkFooter = ({ label, link }) => (
  <li>
    <a
      href={link}
      className='hover:underline hover:text-primary-500 dark:hover:text-secondary-400 me-4 md:me-6'
    >
      {label}
    </a>
  </li>
);

function Footer() {
  return (
    <footer className='bg-base-50 text-base-500 shadow dark:bg-base-800 dark:text-base-400'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm sm:text-center'>
            © 2024{' '}
            <a
              href='#'
              class='hover:underline hover:text-primary-500 dark:hover:text-secondary-400'
            >
              FinTrack2
            </a>
            . Todos los derechos reservados.
          </span>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0'>
            <LinkFooter
              link={'#'}
              label={'Acerca de'}
            />
            <LinkFooter
              link={'#'}
              label={'Contacto'}
            />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
