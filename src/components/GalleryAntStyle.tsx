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
    border: '1px solid darkkhaki',
    ':hover': {
        border: '1px solid white',
        background: 'transparent'
    },
    span: {
        color: 'darkkhaki',
        ':hover': {
            color: 'white'
        }
    }
}));