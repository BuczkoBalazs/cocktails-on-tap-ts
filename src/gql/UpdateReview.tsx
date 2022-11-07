import { gql } from "@apollo/client";

gql`
    mutation UpdateReview($updateReviewId: ID!, $input: UpdateReviewInput!) {
        updateReview(id: $updateReviewId, input: $input) {
            id
            title
            text
        }
    }
`;