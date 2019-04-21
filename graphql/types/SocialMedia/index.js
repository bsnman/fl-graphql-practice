import gql from 'graphql-tag'

export default gql`
  input UserInput {
    id: ID
  }
  type SocialMedia {
    id: ID
    user: User!
    type: String!
    link: String!
  }
  type Query {
    socialMedia(id: String!): SocialMedia
    socialMedias: [SocialMedia]
  }
  type Mutation {
    addSocialMedia(id: String!, user: UserInput!, type: String!, link: String!): SocialMedia
    editSocialMedia(id: String!, type: String!, link: String!): SocialMedia
    deleteSocialMedia(id: String!, type: String!, link: String!): SocialMedia
  }
`;