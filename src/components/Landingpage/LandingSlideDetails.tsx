import { LandingSlide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';

type LandingSlideType = {
  id: number,
  title: string,
  text: string
};

type LandingSlideDetailsProps = {
  slide: LandingSlideType
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
