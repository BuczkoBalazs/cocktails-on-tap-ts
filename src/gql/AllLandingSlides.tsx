import { gql } from "@apollo/client";

gql`
  query LandingSlides {
    landingSlides {
      id
      title
      text
    }
  }
`