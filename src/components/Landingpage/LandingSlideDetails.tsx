import { LandingSlide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';

type LandingSlide = {
  id: number,
  title: string,
  text: string
};

type LandingSlideDetailsProps = {
  slide: LandingSlide
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
