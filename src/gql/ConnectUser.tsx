import { gql } from "@apollo/client";

gql`
    mutation ConnectUser($input: CocktailUserConnectionInput!) {
        connectUser(input: $input) {
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