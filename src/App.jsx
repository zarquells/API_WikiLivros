import { Outlet } from 'react-router-dom';

import Header from "./components/header";
import Footer from "./components/footer";

import './App.css';

function App() {
  return (
    <>
    <main className='App'>
      <Header/>
      <Outlet />
      <Footer/>
    </main>
    </>
  )
}

export default App