import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type CocktailAntProps = {
    cocktail: CocktailDetails,
    deleteCocktailHandle: (id: number) => void,
    favoriteToggle: (id: number, name: string, howTo: string, ingredients: string, image: string, favorite: boolean) => void 
};

export const CocktailAnt = ({ cocktail, deleteCocktailHandle, favoriteToggle }: CocktailAntProps ) => {

    return (
    <CocktailCard hoverable title={cocktail.name} extra={<CocktailCardButtons cocktail={cocktail} deleteCocktailHandle={deleteCocktailHandle} favoriteToggle={favoriteToggle} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
};