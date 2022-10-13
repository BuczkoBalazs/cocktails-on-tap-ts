import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavoritesAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type CocktailDetailsArray = {
    cocktails: CocktailDetails[]
};

export const FavoritesCocktailWrapper = React.memo( () => {

    const GET_FAVORITES = gql`
        query getFavorites {
            cocktails {
                id
                name
                howTo
                ingredients
                image
                favorite
            }
        }
    `

    const { data, loading, error } = useQuery<CocktailDetailsArray | null>(GET_FAVORITES);

    // const [cocktails, setCocktails] = useState<CocktailDetails[] | undefined>();

    const deleteCocktail = async (id: number) => {
        await fetch('http://localhost:3001/cocktails/' + id, {
            method: 'DELETE'
        });
        // setCocktails(cocktails?.filter( cocktail => cocktail.id !== id));
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
        // setCocktails(cocktails?.filter(cocktail => cocktail.favorite && cocktail.id !== id));
    };

    // useEffect( () => {
    //     setCocktails(data?.cocktails);
    // }, [data?.cocktails]);

    const navigate = useNavigate();

    return (
        <>
            {data && <CocktailWrapperSpace wrap={true}>
                {data.cocktails.map((cocktail: CocktailDetails) => cocktail.favorite && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktail={deleteCocktail} favoriteToggle={favoriteToggle} />)}
                </CocktailWrapperSpace>
            }
            {loading && <Spin />}
            {error && <Result
                status="500"
                title="500"
                subTitle={error.message}
                extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
            />}
        </>
    )
});
