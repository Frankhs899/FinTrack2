import React from 'react';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Container from './components/container/Container';

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col bg-base-200 text-base-800 dark:bg-base-900 dark:text-base-100'>
      <Navbar />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
