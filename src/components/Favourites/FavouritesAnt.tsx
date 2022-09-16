import { FavouritesCocktailWrapper } from './FavouritesCocktailWrapper';
import { BackTop, Typography } from 'antd';
import 'antd/dist/antd.css';
import { FavSpace } from './FavouritesAntStyle';

const { Title } = Typography;

export const FavouritesAnt = () => {

    return (
    <FavSpace direction='vertical'>
        <Title>Here you find your favourite cocktails!</Title>
        <FavouritesCocktailWrapper />
        <BackTop />
    </FavSpace>
    )
}
