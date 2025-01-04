import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <div className='bg-primary-500 dark:bg-secondary-500 font-[Inter]'>
      <h1>App</h1>
      <button onClick={handleChangeTheme}>Cambiar tema</button>
    </div>
  );
}

export default App;
