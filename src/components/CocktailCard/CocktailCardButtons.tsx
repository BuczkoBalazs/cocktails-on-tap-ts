import { useState } from 'react';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

type CocktailCardButtonsProps = {
    cocktail: CocktailDetails,
    deleteCocktail: (id: number) => void,
    favouriteToggle: (id: number, name: string, howto: string, ingredients: string, image: string, favourite: boolean) => void 
};

export const CocktailCardButtons = ({ cocktail, deleteCocktail, favouriteToggle }: CocktailCardButtonsProps) => {

    const [fav, setFav] = useState<boolean>(cocktail.favourite);

    return (
    <>
        <SortButton shape='round' onClick={() => {
            favouriteToggle(cocktail.id, cocktail.name, cocktail.howto, cocktail.ingredients, cocktail.image, !fav)
            setFav(!fav)
        }}>
            {fav ? 'Favourite' : 'Not favourite'}
        </SortButton>     
        <SortButton shape='round' onClick={() => deleteCocktail(cocktail.id)}>Delete</SortButton>
    </>
    )
}
