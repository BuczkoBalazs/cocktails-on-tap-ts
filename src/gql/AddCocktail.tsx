import { gql } from "@apollo/client";

gql`
    mutation AddCocktail($input: AddCocktailInput!) {
        addCocktail(input: $input) {
            id
            name
            howTo
            ingredients
            image
            favorite
        }
    }
`;