import { Carousel, Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import background from '../image/landing1.jpg';

const { Title, Paragraph } = Typography;

export const LandingCarousel = styled(Carousel)( () => ({
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}));

export const Slide = styled(Space)( () => ({
    width: '100%',
    height: '99vh',
    'h1, div': {
        color: 'darkkhaki'
    },
    'h1': {
        fontSize: '45px'
    }
}));

export const LandingSlideTitle = styled(Title)( () => ({
    margin: '200px 70px',
}));

export const LandingSlideText = styled(Paragraph)( () => ({
    margin: '10px 70px',
    fontSize: '18px',
    maxWidth: '450px',
}));