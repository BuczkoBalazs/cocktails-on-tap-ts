import React, { useState, useEffect } from 'react';
import { CocktailDetails } from '../types/Types';
import { CocktailAnt } from './CocktailAnt';

export const Favourites = () => {

    const [cocktails, setCocktails] = useState<CocktailDetails[] | []>([]);

    const getCocktails = async () => {

        const response = await fetch('http://localhost:3001/cocktails');
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, []);

    return (
    <div className='favourites-wrapper'>
        <h1>Here you find your favourite cocktails!</h1>
        <div className='cocktails-wrapper'>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => favourite && <CocktailAnt key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </div>
    </div>
    )
}
