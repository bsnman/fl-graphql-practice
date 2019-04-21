import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const definition = {
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  published: {
    type: Boolean,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
}

const options = {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
}

const PostSchema = new Schema(definition, options);

export default mongoose.model("Post", PostSchema);
