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

    const { data: cocktails } = useFetch<CocktailDetails[]>('http://localhost:3001/cocktails');

    return (
    <CocktailWrapperSpace wrap={true}>
        {cocktails && cocktails.map((cocktail: CocktailDetails) => cocktail.favourite && <CocktailAnt key={cocktail.id} cocktail={cocktail} />)}
    </CocktailWrapperSpace>
    )
}
