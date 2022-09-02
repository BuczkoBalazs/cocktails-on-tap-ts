import { CocktailAnt } from './CocktailAnt';
import { BackTop, Typography } from 'antd';
import 'antd/dist/antd.css';
import { FavSpace, CocktailWrapperSpace } from './FavouritesAntStyle';
import { useFetch } from './hooks/useFetch';
import { CocktailDetails,  } from './types/Types';

const { Title } = Typography;

export const FavouritesAnt = () => {

    const { data: cocktails } = useFetch('http://localhost:3001/cocktails');

    return (
    <FavSpace direction='vertical'>
        <Title>Here you find your favourite cocktails!</Title>
        <CocktailWrapperSpace wrap={true}>
            {cocktails && cocktails.map((cocktail: CocktailDetails) => cocktail.favourite && <CocktailAnt key={cocktail.id} cocktail={cocktail} />
            )}
        </CocktailWrapperSpace>
        <BackTop />
    </FavSpace>
    )
}
