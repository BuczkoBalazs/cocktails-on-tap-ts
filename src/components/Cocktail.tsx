import React, { useState } from 'react';
import { CocktailDetails } from '../types/Types';

export const Cocktail = ({ id, name, howto, ingredients, image, favourite }: CocktailDetails) => {

    const [fav, setFav] = useState<boolean>(favourite === 'true' ? true : false);

    const favouriteToggle = async () => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: name,
                howto: howto,
                ingredients: ingredients,
                image: image,
                favourite: `${!fav}`
            }),
        });
        setFav(!fav)
    };

    return (
    <div className='cocktail-wrapper' key={id}>
        <div className='base-info'>
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
        <div className='extended-info'>
            <p className='title-info'>How to make:</p>
            <p className='text-info'>{howto}</p>
            <p className='title-info'>Ingredients:</p>
            <p className='text-info'>{ingredients}</p>
            {fav === true ?
              <button className='fav-button' onClick={favouriteToggle}>Favourite</button> :
              <button className='fav-button' onClick={favouriteToggle}>Not favourite</button>
            }
        </div>
    </div>
    )
}
