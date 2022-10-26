import { Slide, LandingSlideTitle, LandingSlideText } from './LandingAntStyle';
import { LandingSlide } from '../../generate/graphql';

type LandingSlideDetailsProps = {
  slide: LandingSlide
};

export const LandingSlideDetails = ({ slide }: LandingSlideDetailsProps) => {
  return (
    <Slide direction='vertical'>
      <LandingSlideTitle>{slide.title}</LandingSlideTitle>
      <LandingSlideText>
        {slide.text}
      </LandingSlideText>
    </Slide>
  )
};
