import React, { useContext } from 'react';

import { Context } from './context/GlobalState';

function App() {
  const { handleChangeTheme, theme } = useContext(Context);
  return (
    <div className='bg-base-200 dark:bg-base-800'>
      <button
        onClick={handleChangeTheme}
        className='bg-secondary-400 dark:bg-primary-500'
      >
        {theme === 'dark' ? (
          <span>Cambiar a claro</span>
        ) : (
          <span>Cambiar a obscuro</span>
        )}
      </button>
    </div>
  );
}

export default App;
