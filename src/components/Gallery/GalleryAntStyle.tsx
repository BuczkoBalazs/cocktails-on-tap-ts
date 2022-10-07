import { Button } from 'antd';
import { FavSpace } from '../Favorites/FavoritesAntStyle';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import background from '../image/landing2.jpg';

export const GallerySpace = styled(FavSpace)( () => ({
    backgroundImage: `url(${background})`,
    input : {
        color: 'darkkhaki',
    }
}));

export const SortButton = styled(Button)( () => ({
    color: 'darkkhaki',
    border: '1px solid darkkhaki',
    background: 'transparent',
    ':hover': {
        color: 'white',
        border: '1px solid white',
        background: 'darkkhaki'
    },
    ':focus': {
        color: 'darkkhaki',
        border: '1px solid darkkhaki',
        background: 'transparent',
    }
}));