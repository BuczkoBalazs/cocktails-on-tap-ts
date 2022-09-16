import { LandingSlide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';
import { LandingSlideDetailsProps } from '../types/Types';

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
