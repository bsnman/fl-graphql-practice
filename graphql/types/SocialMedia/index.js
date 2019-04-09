export default `
  type SocialMedia {
    id: String!
    user: User!
    type: String!
    link: String!
  }
  type Query {
    socialMedia(id: String!): SocialMedia
    socialMedias: [SocialMedia]
  }
  type Mutation {
    addSocialMedia(id: String!, type: String!, link: String!): SocialMedia
    editSocialMedia(id: String!, type: String!, link: String!): SocialMedia
    deleteSocialMedia(id: String!, type: String!, link: String!): SocialMedia
  }
`;