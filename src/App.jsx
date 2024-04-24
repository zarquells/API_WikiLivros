import { Outlet } from 'react-router-dom';
import Home   from './pages/home';

import './App.css';

function App() {
  return (
    <>
    <div className='App'>
      <Outlet />
    </div>
    </>
  )
}

export default App