import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';
import { Cocktail } from '../../generate/graphql';

export const CocktailAnt = ({ cocktail }: { cocktail: Cocktail }) => {

    return (
    <CocktailCard hoverable title={cocktail.name} extra={<CocktailCardButtons cocktail={cocktail} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
};