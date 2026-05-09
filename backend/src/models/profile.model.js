import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    profilePic: {
        type: String,
        default: ""
    }

}, {
    timestamps: true
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;