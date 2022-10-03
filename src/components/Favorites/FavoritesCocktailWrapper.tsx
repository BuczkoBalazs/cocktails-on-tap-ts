import React, { useEffect, useState } from 'react';
import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavoritesAntStyle';
import { useFetch } from '../hooks/useFetch';
import { CocktailDetails } from '../Type/CocktailDetailsType';

export const FavoritesCocktailWrapper = React.memo( () => {

    console.log("FavoritesCocktailWrapper rendered")

    const { data, loading, error } = useFetch<CocktailDetails[]>('http://localhost:3001/cocktails');

    const [cocktails, setCocktails] = useState<CocktailDetails[] | []>([]);

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        });
        setCocktails(cocktails.filter( cocktail => cocktail.id !== id));
    };

    const favoriteToggle = async (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id: id,
                name: name,
                howTo: howTo,
                ingredients: ingredients,
                image: image,
                favorite: favorite
            }),
        });
        setCocktails(cocktails.filter(cocktail => cocktail.favorite && cocktail.id !== id));
    };

    useEffect( () => {
        setCocktails(data);
    }, [data]);

    return (
        <>
            {cocktails.length > 0 && <CocktailWrapperSpace wrap={true}>
                {cocktails.map((cocktail: CocktailDetails) => cocktail.favorite && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favoriteToggle={favoriteToggle} />)}
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
});
