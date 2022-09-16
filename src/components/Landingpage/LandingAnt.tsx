import 'antd/dist/antd.css';
import { useFetch } from '../hooks/useFetch';
import { LandingSlideDetails } from './LandingSlideDetails';
import { LandingCarousel } from './LandingAntStyle';

type LandingSlide = {
    id: number,
    title: string,
    text: string
};

export const LandingAnt = () => {

    const { data: slides } = useFetch<LandingSlide[]>('http://localhost:3001/landingSlides')

    return (
    <LandingCarousel
    autoplay={true}
    effect="fade"
    dotPosition='right'
    draggable={true}
    infinite={true}
    pauseOnHover={false}
    pauseOnDotsHover={true}
    >
        {slides && slides.map( (slide: LandingSlide) => <LandingSlideDetails key={slide.id} slide={slide} />
        )}
    </LandingCarousel>
    )
};