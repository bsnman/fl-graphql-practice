import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  displayName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  socialMedias: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SocialMedia'
  }]
});

const User = mongoose.model("User", UserSchema);

export default User;