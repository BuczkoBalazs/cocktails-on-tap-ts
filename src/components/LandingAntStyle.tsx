import { Space, Typography } from 'antd';
import 'antd/dist/antd.css';
import styled from '@emotion/styled';

import background from '../image/landing1.jpg';

const { Title, Paragraph } = Typography;

export const LandingSlide = styled(Space)( () => ({
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}));

export const LandingSlideTitle = styled(Title)( () => ({
    margin: '150px 70px',
    color: 'white',
    fontSize: '45px'
}));

export const LandingSlideText = styled(Paragraph)( () => ({
    color: 'white',
    margin: '0 70px',
    fontSize: '18px',
    maxWidth: '450px',
}));