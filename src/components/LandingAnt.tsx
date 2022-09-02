import 'antd/dist/antd.css';
import { useFetch } from './hooks/useFetch';
import { LandingSlideDetails } from './LandingSlideDetails';
import { LandingCarousel } from './LandingAntStyle';
import { LandingSlides } from './types/Types';

export const LandingAnt = () => {

    const { data: slides } = useFetch('http://localhost:3001/landingSlides')

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
        {slides && slides.map( (slide: LandingSlides) => <LandingSlideDetails key={slide.id} slide={slide} />
        )}
    </LandingCarousel>
    )
};