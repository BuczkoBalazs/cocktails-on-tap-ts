import { useState } from 'react';
import 'antd/dist/antd.css';
import { SortButton } from '../Gallery/GalleryAntStyle';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';

type CocktailDetails = {
    id: number,
    name: string,
    howto: string,
    ingredients: string,
    image: string,
    favourite: boolean
};

type CocktailAntProps = {
    cocktail: CocktailDetails,
    deleteCocktail: (id: number) => void,
    favouriteToggle: (id: number, name: string, howto: string, ingredients: string, image: string, favourite: boolean) => void 
};

export const CocktailAnt = ({ cocktail, deleteCocktail, favouriteToggle }: CocktailAntProps ) => {

    const [fav, setFav] = useState<boolean>(cocktail.favourite);

    return (
    <CocktailCard hoverable title={cocktail.name} extra={
        <>
            <SortButton shape='round' onClick={() => {
                favouriteToggle(cocktail.id, cocktail.name, cocktail.howto, cocktail.ingredients, cocktail.image, !fav)
                setFav(!fav)
            }}>
                {fav ? 'Favourite' : 'Not favourite'}
            </SortButton>     
            <SortButton shape='round' onClick={() => deleteCocktail(cocktail.id)}>Delete</SortButton>
        </>
    }>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
}
