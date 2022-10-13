import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesAnt } from './components/Favorites/FavoritesAnt';
import { GalleryAnt } from './components/Gallery/GalleryAnt';
import { HeaderAnt } from './components/Header/HeaderAnt';
import { LandingAnt } from './components/LandingPage/LandingAnt';
import { RouteNotFound } from './components/ErrorPage/RouteNotFound';
import { AddCocktail } from './components/AddCocktail/AddCocktail';
import { LoginContextProvider } from './components/contexts/LoginContext';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoginContextProvider>
        <BrowserRouter>
          <HeaderAnt />
          <Routes>
            <Route path='/' element={<LandingAnt />} />
            <Route path='/gallery' element={<GalleryAnt />} />
            <Route path='/favorites' element={<FavoritesAnt />} />
            <Route path='/add' element={<AddCocktail />} />
            <Route path='*' element={<RouteNotFound />} />
          </Routes>
        </BrowserRouter>
      </LoginContextProvider>
    </ApolloProvider>
  </React.StrictMode>
);