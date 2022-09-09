import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
    <header className='header'>
        <Link to='/' className='logo'>Cocktails on draft</Link>
        <div className='nav-container'>
            <Link to='/' >Home</Link>
            <Link to='/gallery' >Gallery</Link>
            <Link to='/favourites' >Favourites</Link>
        </div>
    </header>
  )
}
