import { gql } from "@apollo/client";

gql`
    mutation DeleteCocktail($deleteCocktailId: ID!) {
        deleteCocktail(id: $deleteCocktailId)
    }
`;