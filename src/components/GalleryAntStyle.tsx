import { Button, Space } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import background from '../image/landing2.jpg';

export const GallerySpace = styled(Space)( () => ({
    width: '100%',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    h1: {
        marginTop: '80px',
        color: 'darkkhaki'
    },
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