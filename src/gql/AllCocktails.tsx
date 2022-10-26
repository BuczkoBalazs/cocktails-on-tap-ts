import { gql } from "@apollo/client";

gql`
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
`