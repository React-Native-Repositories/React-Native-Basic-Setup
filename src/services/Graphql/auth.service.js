import { gql } from "@apollo/client";

export const USER_LOGIN = gql`
mutation login($input: UsersPermissionsLoginInput!) {
   login(input: $input) {
    jwt
    user{
       id
       username
       email
       confirmed
       blocked
    }
   }
 }
`

export  const ME = gql`
query{
  me{
     id
     email
  }
}
`;

