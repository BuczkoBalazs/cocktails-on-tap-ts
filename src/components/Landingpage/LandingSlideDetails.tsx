import { LandingSlide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';

type LandingSlides = {
  id: number,
  title: string,
  text: string
};

type LandingSlideDetailsProps = {
  slide: LandingSlides
};

export const LandingSlideDetails = ({ slide }: LandingSlideDetailsProps) => {
  return (
    <LandingSlide direction='vertical'>
        <LandingSlideTitle>{slide.title}</LandingSlideTitle>
        <LandingSlideText>
            {slide.text}
        </LandingSlideText>
    </LandingSlide>
  )
}
