import { gql } from "@apollo/client";

const allCocktail = gql`
    query Cocktails {
        cocktails {
        id
        name
        howTo
        ingredients
        image
        favorite
        }
    }
`;