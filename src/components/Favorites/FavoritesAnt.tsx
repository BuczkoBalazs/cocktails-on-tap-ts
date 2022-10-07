import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { FavoritesCocktailWrapper } from './FavoritesCocktailWrapper';
import { BackTop, Typography } from 'antd';
import 'antd/dist/antd.css';
import { FavSpace } from './FavoritesAntStyle';

const { Title } = Typography;

export const FavoritesAnt = () => {

    console.log("FavoritesAnt rendered")

    const loginContext = useContext(LoginContext);

    return (
    <FavSpace direction='vertical'>
        <Title>Here you find your favorite cocktails, {loginContext.user.name}!</Title>
        <FavoritesCocktailWrapper />
        <BackTop />
    </FavSpace>
    )
};