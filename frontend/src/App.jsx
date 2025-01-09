import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Drawer from './components/drawer/Drawer';

function App() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);
  return (
    <div className='w-full min-h-screen font-[Inter]'>
      <Drawer />
    </div>
  );
}

export default App;
