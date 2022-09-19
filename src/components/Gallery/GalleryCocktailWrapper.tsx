import React from 'react';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import { Button, Spin, Result } from 'antd';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from '../Favourites/FavouritesAntStyle';


type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

type GalleryCocktailWrapperProps = {
    cocktails: CocktailDetails[],
    searchInput: string,
    deleteCocktail: (id: number) => void,
    favouriteToggle: (id: number, name: string, howto: string, ingredients: string, image: string, favourite: boolean) => void,
    loading: boolean,
    error: string | null
}

export const GalleryCocktailWrapper = ({ cocktails, searchInput, deleteCocktail, favouriteToggle, loading, error  }: GalleryCocktailWrapperProps) => {

    return (
    <CocktailWrapperSpace wrap={true}>
        {cocktails.length > 0 && cocktails.map((cocktail: CocktailDetails) => cocktail.name.toLowerCase().includes(searchInput.toLowerCase()) && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favouriteToggle={favouriteToggle} />
        )}
        {loading && <Spin />}
        {error && <Result
        status="500"
        title="500"
        subTitle={error}
        extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
        />}
    </CocktailWrapperSpace>
    )
}
