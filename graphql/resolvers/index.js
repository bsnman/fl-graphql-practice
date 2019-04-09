import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import SocialMedia from "./SocialMedia/";

const resolvers = [User, SocialMedia];

export default mergeResolvers(resolvers);