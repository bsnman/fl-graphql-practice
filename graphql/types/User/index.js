import gql from 'graphql-tag'

export default gql`
  type User {
    _id: String!
    first_name: String!
    last_name: String!
    display_name: String
    email: String!
    birthdate: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    display_name: String
    email: String!
    birthdate: String!
  }
  
  input UpdateUserInput {
    first_name: String
    last_name: String
    display_name: String
    email: String
    birthdate: String
  } 
`;
