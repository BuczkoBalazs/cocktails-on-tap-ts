import { gql } from "@apollo/client";

gql`
    query User($userId: ID!) {
        user(id: $userId) {
            id
            cocktails {
            name
            id
            howTo
            ingredients
            image
            favorite
            }
        }
    }
`;