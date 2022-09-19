import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';

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

    return (
    <CocktailCard hoverable title={cocktail.name} extra={<CocktailCardButtons cocktail={cocktail} deleteCocktail={deleteCocktail} favouriteToggle={favouriteToggle} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
}
