import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { useFetch } from '../hooks/useFetch';
import { LandingSlideDetails } from './LandingSlideDetails';
import { LandingCarousel } from './LandingAntStyle';
import { RouteNotFound } from '../ErrorPage/RouteNotFound';

type LandingSlide = {
    id: number,
    title: string,
    text: string
};

export const LandingAnt = () => {

    const { data: slides, loading, error } = useFetch<LandingSlide[]>('http://localhost:3001/landingSlides')

    return (
    <>
        {slides && <LandingCarousel
        autoplay={true}
        effect="fade"
        dotPosition='right'
        draggable={true}
        infinite={true}
        pauseOnHover={false}
        pauseOnDotsHover={true}
        >
            {slides.map( (slide: LandingSlide) => <LandingSlideDetails key={slide.id} slide={slide} />
            )}
        </LandingCarousel>}
        {loading && <Spin />}
        {error && <RouteNotFound />}
    </>
    )
};