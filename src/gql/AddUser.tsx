import { gql } from "@apollo/client";

gql`
    mutation AddUser($input: AddUserInput!) {
        addUser(input: $input) {
            id
            name
            email
            age
        }
    }
`;