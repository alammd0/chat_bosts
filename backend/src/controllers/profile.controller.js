import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";
import { uploadProfilePhoto } from "../services/cloudinary.upload.js";

/**
 * @description: This controller is used to get a user profile
 * @route : /profile
 * @method : GET
 * @access : Private
 */

export const getProfile = async (req, res) => {
    try {
        const userId = req.user.id;

        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message : "User not found",
                error : null
            })
        }
        
        const profile = await Profile.findOne({
            userId : user._id
        });

        if(!profile){
            return res.status(400).json({
                message : "Profile not found",
                error : null
            })
        }

        return res.status(200).json({
            message : "Profile fetched successfully",
            profile : {
                id : profile._id,
                userId : profile.userId,
                profilePic : profile.profilePic
            }
        })
    }
    catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error : error
        })
    }
}

/**
 * @description: This controller is used to update a user profile
 * @route : /profile
 * @method : PUT
 * @access : Private
 */

export const updateProfile = async (req, res) => {
    try {

        const profilePic = req.files?.profilePic;

        // console.log(profilePic);y
        

        if (!profilePic) {
            return res.status(400).json({
                message: "Please provide a profile picture",
                error: null
            });
        }

        const userId = req.user.id;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: null
            });
        }

        // Upload image
        const pic_url = await uploadProfilePhoto(profilePic);

        // console.log(pic_url);

        // here create a Profile Section related to the user

        const profile = await Profile.create({
            userId : user._id,
            profilePic : pic_url
        });

        return res.status(200).json({
            message: "Profile updated successfully",
            profile: {
                id: profile.id,
                userId: profile.userId,
                profilePic: profile.profilePic
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};