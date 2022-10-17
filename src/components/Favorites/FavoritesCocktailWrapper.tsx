import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql, useMutation } from '@apollo/client';
import { Button, Spin, Result } from 'antd';
import { CocktailAnt } from '../CocktailCard/CocktailAnt';
import 'antd/dist/antd.css';
import { CocktailWrapperSpace } from './FavoritesAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type CocktailDetailsArray = {
    cocktails: CocktailDetails[]
};

type UpdatedCocktailInput = {
    name: string,
    howTo: string,
    ingredients: string,
    image: string,
    favorite: boolean
};

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
`;

const TOGGLE_FAVORITES = gql`
    mutation updateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {
        updateCocktail(id: $updateCocktailId, input: $input) {
            name
            howTo
            ingredients
            image
            favorite
        }
    }
`;

const DELETE_COCKTAIL = gql`
    mutation deleteCocktail($deleteCocktailId: ID!) {
        deleteCocktail(id: $deleteCocktailId)
    }
`;

export const FavoritesCocktailWrapper = React.memo( () => {


    const { data, loading, error, refetch } = useQuery<CocktailDetailsArray | null>(GET_FAVORITES);

    const [updateCocktail] = useMutation<{ updateCocktail: CocktailDetails}, { updateCocktailId: number, input: UpdatedCocktailInput }>(TOGGLE_FAVORITES);

    const [deleteCocktail] = useMutation<{ deleteCocktail: boolean }, { deleteCocktailId: number }>(DELETE_COCKTAIL);


    const [cocktails, setCocktails] = useState<CocktailDetails[] | undefined>(data?.cocktails);

    const deleteCocktailHandle = async (id: number) => {
        await deleteCocktail({ variables: { deleteCocktailId: id }});
        await refetch(GET_FAVORITES);
        setCocktails(cocktails?.filter( cocktail => cocktail.id !== id));
    };

    const favoriteToggle = async (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
        await updateCocktail({ variables: { updateCocktailId: id, input: {
            name: name,
            howTo: howTo,
            ingredients: ingredients,
            image: image,
            favorite: favorite
        }}});
        await refetch(GET_FAVORITES);
        setCocktails(cocktails?.filter(cocktail => cocktail.favorite && cocktail.id !== id));
    };

    useEffect( () => {
        setCocktails(data?.cocktails);
    }, [data?.cocktails]);

    const navigate = useNavigate();

    return (
        <>
            {cocktails && <CocktailWrapperSpace wrap={true}>
                {cocktails.map((cocktail: CocktailDetails) => cocktail.favorite && <CocktailAnt key={cocktail.id} cocktail={cocktail} deleteCocktailHandle={deleteCocktailHandle} favoriteToggle={favoriteToggle} />)}
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
