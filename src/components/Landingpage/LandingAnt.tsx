import { gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button, Spin, Result } from 'antd';
import { LandingSlideDetails } from './LandingSlideDetails';
import { LandingCarousel } from './LandingAntStyle';

type LandingSlide = {
    id: number,
    title: string,
    text: string
};

type LandingSlides = {
    landingSlides: LandingSlide[]
};

export const LandingAnt = () => {

    const GET_SLIDES = gql`
        query getSlides {
            landingSlides {
                id
                title
                text
            }
        }
    `

    const { data: slides, loading, error }= useQuery<LandingSlides | null>(GET_SLIDES);

    const navigate = useNavigate();

    return (
    <>
        {slides && <LandingCarousel
        autoplay={true}
        effect="fade"
        dotPosition='bottom'
        draggable={true}
        infinite={true}
        pauseOnHover={false}
        pauseOnDotsHover={true}
        >
            {slides.landingSlides.map( (slide: LandingSlide) => <LandingSlideDetails key={slide.id} slide={slide} />
            )}
        </LandingCarousel>}
        {loading && <Spin />}
        {error && <Result
            status="500"
            title="500"
            subTitle={error.message}
            extra={<Button type="primary" onClick={() => navigate('/')}>Back Home</Button>}
        />}
    </>
    )
};