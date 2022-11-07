import { gql } from "@apollo/client";

gql`
    mutation AddReview($input: AddReviewInput!) {
        addReview(input: $input) {
            id
            title
            text
        }
    }
`;