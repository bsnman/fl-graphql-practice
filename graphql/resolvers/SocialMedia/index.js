// The User schema.
import SocialMedia from "../../../server/models/SocialMedia";

export default {
  Query: {
    socialMedia: (root, args) => {
      return new Promise((resolve, reject) => {
        SocialMedia.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    socialMedias: () => {
      return new Promise((resolve, reject) => {
        SocialMedia.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addSocialMedia: (root, { id, user, type, link }) => {
      const newSocialMedia = new SocialMedia({ id, user, type, link });

      return new Promise((resolve, reject) => {
        newSocialMedia.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editSocialMedia: (root, { id, user, type, link }) => {
      return new Promise((resolve, reject) => {
        SocialMedia.findOneAndUpdate({ id }, { $set: { user, type, link } }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteSocialMedia: (root, args) => {
      return new Promise((resolve, reject) => {
        SocialMedia.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};