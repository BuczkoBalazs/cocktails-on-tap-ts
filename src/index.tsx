import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favourites } from './components/Favourites';
import { Gallery } from './components/Gallery';
import { Header } from './components/Header';
import LandingAnt from './components/LandingAnt';
// import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingAnt />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);