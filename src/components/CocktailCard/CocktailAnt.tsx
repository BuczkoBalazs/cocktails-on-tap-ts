import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type CocktailAntProps = {
    cocktail: CocktailDetails,
    deleteCocktail: (id: number) => void,
    favoriteToggle: (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => void 
};

export const CocktailAnt = ({ cocktail, deleteCocktail, favoriteToggle }: CocktailAntProps ) => {

    return (
    <CocktailCard hoverable title={cocktail.name} extra={<CocktailCardButtons cocktail={cocktail} deleteCocktail={deleteCocktail} favoriteToggle={favoriteToggle} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
};