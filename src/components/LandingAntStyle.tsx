import styled from '@emotion/styled';
import { Space } from 'antd';
import 'antd/dist/antd.css';

import background from '../image/landing1.jpg';

export const LandingSlide = styled(Space)( () => ({
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}));

export const LandingSlideTitle = styled.h3( () => ({
    margin: '150px 70px',
    color: 'white',
    fontSize: '45px'
}));

export const LandingSlideText = styled.p( () => ({
    color: 'white',
    margin: '0 70px',
    fontSize: '18px',
    maxWidth: '450px',
    lineHeight: 1.3
}));