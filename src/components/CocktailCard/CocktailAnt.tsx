import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';
import { CocktailDetails } from '../Type/CocktailDetailsType';

type CocktailAntProps = {
    cocktail: CocktailDetails,
};

export const CocktailAnt = ({ cocktail }: CocktailAntProps ) => {

    return (
    <CocktailCard hoverable title={cocktail.name} extra={<CocktailCardButtons cocktail={cocktail} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
};