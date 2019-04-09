export default `
  type User {
    id: String!
    firstName: String!
    lastName: String!
    displayName: String
    email: String!
    address: String!
    socialMedias: [SocialMedia]
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(id: String!, firstName: String!, lastName: String!, displayName: String, email: String!, address: String!): User
    editUser(id: String!, firstName: String!, lastName: String!, displayName: String, email: String!, address: String!): User
    deleteUser(id: String!, firstName: String!, lastName: String!, displayName: String, email: String!, address: String!): User
  }
`;