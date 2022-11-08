import { Slide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';
import { LandingSlide } from '../../generate/graphql';

export const LandingSlideDetails = ({ slide }: { slide: LandingSlide }) => {
  return (
    <Slide direction='vertical'>
      <LandingSlideTitle>{slide.title}</LandingSlideTitle>
      <LandingSlideText>
        {slide.text}
      </LandingSlideText>
    </Slide>
  )
};
