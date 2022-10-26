import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { Cocktail } from '../../generate/graphql';
import { UpdateCocktailInput } from '../../generate/graphql'

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

export const CocktailCardButtons = ({ cocktail }: { cocktail: Cocktail }) => {
    
    const [updateCocktail] = useMutation<{ updateCocktail: Cocktail}, { updateCocktailId: number, input: UpdateCocktailInput }>(TOGGLE_FAVORITES);
    
    const [deleteCocktail] = useMutation<{ deleteCocktail: boolean }, { deleteCocktailId: number }>(DELETE_COCKTAIL);
    
    const deleteCocktailHandle = async (id: number) => {
        await deleteCocktail({ variables: { deleteCocktailId: id }});
    };
    
    const favoriteToggle = async (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
        await updateCocktail({ variables: { updateCocktailId: id, input: {
            name: name,
            howTo: howTo,
            ingredients: ingredients,
            image: image,
            favorite: favorite
        }}});
    };

    const [fav, setFav] = useState<boolean>(cocktail.favorite);

    return (
    <>
        <SortButton shape='round' onClick={() => {
            favoriteToggle(cocktail.id, cocktail.name, cocktail.howTo, cocktail.ingredients, cocktail.image, !fav);
            setFav(!fav);
        }}>
            {fav ? 'Favorite' : 'Not favorite'}
        </SortButton>     
        <SortButton shape='round' onClick={() => deleteCocktailHandle(cocktail.id)}>Delete</SortButton>
    </>
    )
};