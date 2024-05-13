// arquivo para configuração de rota
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import App    from './App';
import Book   from './pages/book';
import Home   from './pages/home';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
            <Route path='/'         element={<Home   />} />
            <Route path='book/:_id' element={<Book   />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);