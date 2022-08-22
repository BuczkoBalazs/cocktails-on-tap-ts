import React, { useState, useEffect } from 'react';
import { Cocktail } from './Cocktail';

export const Favourites = () => {

    interface CocktailDetails {
        id: string,
        name: string,
        howto: string,
        ingredients: string,
        image: string,
        favourite: string
    }

    const [cocktails, setCocktails] = useState<CocktailDetails[] | []>([]);

    const getCocktails = async () => {

        const response = await fetch('http://localhost:3001/cocktails');
        const responseJSON = await response.json();
        setCocktails(responseJSON);
    }

    useEffect(() => {
        getCocktails();
    }, [cocktails]);

    return (
    <div className='favourites-wrapper'>
        <h1>Here you find your favourite cocktails!</h1>
        <div className='cocktails-wrapper'>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => favourite === 'true' && <Cocktail key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </div>
    </div>
    )
}
