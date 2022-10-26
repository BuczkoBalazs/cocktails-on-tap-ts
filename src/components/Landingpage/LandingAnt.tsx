import { useNavigate } from 'react-router-dom';
import { Button, Spin, Result } from 'antd';
import { LandingSlideDetails } from './LandingSlideDetails';
import { LandingCarousel } from './LandingAntStyle';
import { useLandingSlidesQuery } from '../../generate/graphql';

export const LandingAnt = () => {

    const { data: slides, loading, error }= useLandingSlidesQuery();

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
            {slides.landingSlides?.map( (slide) => <LandingSlideDetails key={slide.id} slide={slide} />
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