import 'antd/dist/antd.css';
import { Button, Spin, Result } from 'antd';
import { useFetch } from '../hooks/useFetch';
import { LandingSlideDetails } from './LandingSlideDetails';
import { LandingCarousel } from './LandingAntStyle';

type LandingSlide = {
    id: number,
    title: string,
    text: string
};

export const LandingAnt = () => {

    const { data: slides, loading, error } = useFetch<LandingSlide[]>('http://localhost:3001/landingSlides');

    return (
    <>
        {(slides.length > 0) && <LandingCarousel
        autoplay={true}
        effect="fade"
        dotPosition='bottom'
        draggable={true}
        infinite={true}
        pauseOnHover={false}
        pauseOnDotsHover={true}
        >
            {slides.map( (slide: LandingSlide) => <LandingSlideDetails key={slide.id} slide={slide} />
            )}
        </LandingCarousel>}
        {loading && <Spin />}
        {error && <Result
            status="500"
            title="500"
            subTitle={error}
            extra={<Button type="link" href='http://localhost:3000/'>Back Home</Button>}
        />}
    </>
    )
};