import { gql } from "@apollo/client";

gql`
    mutation UpdateCocktail($updateCocktailId: ID!, $input: UpdateCocktailInput!) {
        updateCocktail(id: $updateCocktailId, input: $input) {
        id
        name
        howTo
        ingredients
        image
        favorite
        }
    }
`;