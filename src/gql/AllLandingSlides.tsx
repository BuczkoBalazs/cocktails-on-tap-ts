import { gql } from "@apollo/client";

const allLandinsSlides = gql`
  query LandingSlides {
    landingSlides {
      id
      title
      text
    }
  }
`;