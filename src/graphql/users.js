const { gql } = require("@apollo/client");

export const users = gql`
    query Users {
    users {
      id
      nit
      name
      email
      password
      phone
    }
  }
`


export const userLogin = gql`
query Query($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    avatar
    background
    email
    genderId
    id
    name
    nit
    password
    phone
    rol {
      id
      name
    }
    sexo {
      id
      name
    }
  }
}
`
export const createUser = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $phone: String
    $nit: String
    $genderId: ID
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      phone: $phone
      nit: $nit
      genderId: $genderId
    )
  }
`;