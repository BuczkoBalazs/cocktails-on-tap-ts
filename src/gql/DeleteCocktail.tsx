import { gql } from "@apollo/client";

const deleteCocktail = gql`
    mutation DeleteCocktail($deleteCocktailId: ID!) {
        deleteCocktail(id: $deleteCocktailId)
    }
`;