import React from 'react';
import Navbar from './Navbar';

function Drawer() {
  return (
    <div className='w-full min-h-screen flex flex-col bg-base-200 dark:bg-base-900'>
      <Navbar />
    </div>
  );
}

export default Drawer;
