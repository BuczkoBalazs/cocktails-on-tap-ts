import React, { useEffect, useState } from 'react';
import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavouritesAntStyle';
import { useFetch } from '../hooks/useFetch';

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

export const FavouritesCocktailWrapper = () => {

    const { data, loading, error } = useFetch<CocktailDetails[]>('http://localhost:3001/cocktails');

    const [cocktails, setCocktails] =useState<CocktailDetails[] | []>([])

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        });
        setCocktails(cocktails.filter( cocktail => cocktail.id !== id))
    };

    const favouriteToggle = async (id: number, name: string, howto: string, ingredients: string, image: string, favourite: boolean) => {
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
                favourite: favourite
            }),
        });
        const updatedCocktail = {
            id,
            name,
            howto,
            ingredients,
            image,
            favourite
        };
        const updatedCocktails = cocktails.filter(cocktail => cocktail.favourite && cocktail.id !== updatedCocktail.id)
        setCocktails(updatedCocktails)
    };

    useEffect( () => {
        setCocktails(data)
    }, [data]);

    return (
        <>
            {cocktails.length > 0 && <CocktailWrapperSpace wrap={true}>
                {cocktails.map((cocktail: CocktailDetails) => cocktail.favourite && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favouriteToggle={favouriteToggle} />)}
                </CocktailWrapperSpace>
            }
            {loading && <Spin />}
            {error && <Result
                status="500"
                title="500"
                subTitle={error}
                extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
            />}
        </>
    )
}
