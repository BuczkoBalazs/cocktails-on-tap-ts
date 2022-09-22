import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { FavouritesCocktailWrapper } from './FavouritesCocktailWrapper';
import { BackTop, Typography } from 'antd';
import 'antd/dist/antd.css';
import { FavSpace } from './FavouritesAntStyle';

const { Title } = Typography;

export const FavouritesAnt = () => {

    const loginContext = useContext(LoginContext);

    return (
    <FavSpace direction='vertical'>
        <Title>Here you find your favourite cocktails, {loginContext.user.name}!</Title>
        <FavouritesCocktailWrapper />
        <BackTop />
    </FavSpace>
    )
}
