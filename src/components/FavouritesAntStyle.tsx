import { Space } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import background from '../image/landing5.jpg';

export const FavSpace = styled(Space)( () => ({
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    h1: {
        marginTop: '80px',
        color: 'darkkhaki'
    }
}));

export const CocktailWrapperSpace = styled(Space)( () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));