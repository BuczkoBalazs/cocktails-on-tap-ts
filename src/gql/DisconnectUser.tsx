import { gql } from "@apollo/client";

gql`
    mutation DisconnectUser($input: CocktailUserConnectionInput!) {
        disconnectUser(input: $input) {
            id
            name
            howTo
            ingredients
            image
            favorite
            users {
                id
                name
                email
                age
            }
        }
    }
`;