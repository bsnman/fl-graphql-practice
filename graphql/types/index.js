import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import SocialMedia from "./SocialMedia/";

const typeDefs = [User, SocialMedia];

export default mergeTypes(typeDefs, { all: true });