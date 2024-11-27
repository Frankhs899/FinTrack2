import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Expense from '../../pages/expense/Expense';
import Income from '../../pages/income/Income';

function Container() {
  return (
    <main className='flex flex-grow min-h-full p-4'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/expense'
          element={<Expense />}
        />
        <Route
          path='/income'
          element={<Income />}
        />
      </Routes>
    </main>
  );
}

export default Container;
