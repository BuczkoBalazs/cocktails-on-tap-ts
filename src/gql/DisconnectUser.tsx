import { gql } from "@apollo/client";

gql`
    mutation DisconnectUser($input: CocktailUserConnectionInput!) {
        disconnectUser(input: $input)
    }
`;