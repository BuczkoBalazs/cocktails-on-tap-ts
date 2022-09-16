import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavouritesAnt } from './components/Favourites/FavouritesAnt';
import { GalleryAnt } from './components/Gallery/GalleryAnt';
import { HeaderAnt } from './components/Header/HeaderAnt';
import { LandingAnt } from './components/Landingpage/LandingAnt';
import { RouteNotFound } from './components/ErrorPage/RouteNotFound';
import { AddCocktail } from './components/AddCocktail/AddCocktail';
import { LoginContextProvider } from './components/contexts/LoginContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <LoginContextProvider>
          <HeaderAnt />
          <Routes>
            <Route path='/' element={<LandingAnt />} />
            <Route path='/gallery' element={<GalleryAnt />} />
            <Route path='/favourites' element={<FavouritesAnt />} />
            <Route path='/add' element={<AddCocktail />} />
            <Route path='*' element={<RouteNotFound />} />
          </Routes>
        </LoginContextProvider>
      </BrowserRouter>
  </React.StrictMode>
);