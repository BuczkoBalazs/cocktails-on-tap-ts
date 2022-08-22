import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import { Landing } from './components/Landing';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);