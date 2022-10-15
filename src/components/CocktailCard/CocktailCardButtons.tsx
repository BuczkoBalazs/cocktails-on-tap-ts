import { useState } from 'react';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type CocktailCardButtonsProps = {
    cocktail: CocktailDetails,
    deleteCocktailHandle: (id: number) => void,
    favoriteToggle: (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => void 
};

export const CocktailCardButtons = ({ cocktail, deleteCocktailHandle, favoriteToggle }: CocktailCardButtonsProps) => {

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