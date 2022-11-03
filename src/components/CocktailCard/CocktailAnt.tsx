import 'antd/dist/antd.css';
import { CocktailCard} from './CocktailAntStyle';
import { CocktailDetailed } from './CocktailDetailed';
import { CocktailCardButtons } from './CocktailCardButtons';
import { Cocktail } from '../../generate/graphql';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

export const CocktailAnt = ({ cocktail }: { cocktail: Cocktail }) => {

    const loginContext = useContext(LoginContext);

    return (
    <CocktailCard hoverable title={cocktail.name} extra={loginContext.user.name !== "Guest" && <CocktailCardButtons cocktail={cocktail} />}>
        <CocktailDetailed cocktail={cocktail} />
    </CocktailCard>
    )
};