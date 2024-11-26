import React from 'react';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col bg-base-100 text-base-800 dark:bg-base-900 dark:text-base-100'>
      <Navbar />
      <div>App</div>
    </div>
  );
}

export default App;
