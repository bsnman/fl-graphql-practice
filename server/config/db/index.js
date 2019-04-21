import User from "../../models/User";
import Post from "../../models/Post";
import Comment from "../../models/Comment";
import Application from "../../models/Authorization/Application"
import GrantCode from "../../models/Authorization/GrantCode"
import AccessToken from "../../models/Authorization/AccessToken"

export const models = {
  User,
  Post,
  Comment,
  Application,
  GrantCode,
  AccessToken
};
