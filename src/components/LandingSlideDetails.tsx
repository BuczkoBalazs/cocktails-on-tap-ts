import { LandingSlide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';
import { LandingSlides } from './types/Types';

export const LandingSlideDetails = ({ title, text}: LandingSlides) => {
  return (
    <LandingSlide direction='vertical'>
        <LandingSlideTitle>{title}</LandingSlideTitle>
        <LandingSlideText>
            {text}
        </LandingSlideText>
    </LandingSlide>
  )
}
