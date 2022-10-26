import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';
import { Cocktail } from '../../generate/graphql';

type CocktailAntProps = {
    cocktail: Cocktail,
};

export const CocktailAnt = ({ cocktail }: CocktailAntProps ) => {

    return (
    <CocktailCard hoverable title={cocktail.name} extra={<CocktailCardButtons cocktail={cocktail} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
};