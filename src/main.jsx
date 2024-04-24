// arquivo para configuração de rota
import React    from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App    from './App';
import Home   from './pages/home';
import Book   from './pages/book';
import Create from './pages/create';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
            <Route path='/'         element={<Home   />} />
            <Route path='book/:id'  element={<Book   />} />
            <Route path='create'    element={<Create />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)