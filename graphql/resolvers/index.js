import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";
import Comment from "./Comment/";
import SocialMedia from "./SocialMedia"

const resolvers = [User, Post, Comment, SocialMedia];

export default mergeResolvers(resolvers);
