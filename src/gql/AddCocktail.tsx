import { gql } from "@apollo/client";

const addCocktail = gql`
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