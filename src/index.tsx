import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavouritesAnt } from './components/FavouritesAnt';
import { GalleryAnt } from './components/GalleryAnt';
import { HeaderAnt } from './components/HeaderAnt';
import { LandingAnt } from './components/LandingAnt';
import { RouteNotFound } from './components/RouteNotFound';
// import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <HeaderAnt />
        <Routes>
          <Route path='/' element={<LandingAnt />} />
          <Route path='/gallery' element={<GalleryAnt />} />
          <Route path='/favourites' element={<FavouritesAnt />} />
          <Route path='*' element={<RouteNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);