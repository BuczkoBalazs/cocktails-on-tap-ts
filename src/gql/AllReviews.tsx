import { gql } from "@apollo/client";

gql`
    query Reviews {
        reviews {
            id
            title
            text
            user {
                id
                name
            }
            cocktail {
                id
                name
            }
        }
    }
`;