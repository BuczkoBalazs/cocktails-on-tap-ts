import { CocktailAnt } from './CocktailAnt';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import { FavSpace, CocktailWrapperSpace } from './FavouritesAntStyle';
import { useFetch } from './hooks/useFetch';

const { Title } = Typography;

export const FavouritesAnt = () => {

    const { data: cocktails } = useFetch('http://localhost:3001/cocktails');

    return (
    <FavSpace direction='vertical'>
        <Title>Here you find your favourite cocktails!</Title>
        <CocktailWrapperSpace wrap={true}>
            {cocktails && cocktails.map(({ id, name, howto, ingredients, image, favourite }) => favourite && <CocktailAnt key={id} id={id} name={name} howto={howto} ingredients={ingredients} image={image} favourite={favourite} />
            )}
        </CocktailWrapperSpace>
    </FavSpace>
    )
}
