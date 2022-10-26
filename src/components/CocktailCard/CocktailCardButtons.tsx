import { useState } from 'react';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { Cocktail, useDeleteCocktailMutation, useUpdateCocktailMutation } from '../../generate/graphql';

export const CocktailCardButtons = ({ cocktail }: { cocktail: Cocktail }) => {
    
    const [updateCocktail] = useUpdateCocktailMutation();
    
    const [deleteCocktail] = useDeleteCocktailMutation();
    
    const deleteCocktailHandle = async (id: string) => {
        await deleteCocktail({ variables: { deleteCocktailId: id }});
    };
    
    const favoriteToggle = async (id: string, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => {
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
            favoriteToggle(cocktail.id.toString(), cocktail.name, cocktail.howTo, cocktail.ingredients, cocktail.image, !fav);
            setFav(!fav);
        }}>
            {fav ? 'Favorite' : 'Not favorite'}
        </SortButton>     
        <SortButton shape='round' onClick={() => deleteCocktailHandle(cocktail.id.toString())}>Delete</SortButton>
    </>
    )
};