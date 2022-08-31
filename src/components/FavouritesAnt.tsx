import React, { useState, useEffect } from 'react';
import { CocktailDetails } from '../types/Types';
import { CocktailAnt } from './CocktailAnt';
import { Typography, Space } from 'antd';
import 'antd/dist/antd.css';
import { FavSpace, CocktailWrapperSpace } from './FavouritesAntStyle';

const { Title } = Typography;

export const FavouritesAnt = () => {

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
    <FavSpace direction='vertical'>
        <Title>Here you find your favourite cocktails!</Title>
        <CocktailWrapperSpace wrap={true}>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => favourite && <CocktailAnt key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </CocktailWrapperSpace>
    </FavSpace>
    )
}
