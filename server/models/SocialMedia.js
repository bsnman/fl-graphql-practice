import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);

export default SocialMedia