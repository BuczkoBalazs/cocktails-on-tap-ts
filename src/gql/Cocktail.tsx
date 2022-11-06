import { gql } from "@apollo/client";

gql`
    query Cocktail($cocktailId: ID!) {
        cocktail(id: $cocktailId) {
            id
            name
            reviews {
                id
                title
                text
                user {
                    id
                    name
                }
            }
        }
    }
`;