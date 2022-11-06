import { gql } from "@apollo/client";

gql`
    mutation ConnectUser($input: CocktailUserConnectionInput!) {
        connectUser(input: $input)
    }
`;