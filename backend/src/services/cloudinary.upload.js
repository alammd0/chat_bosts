import cloudinary from "../config/cloudinary.js";

/**
 * @description: This function is used to upload a Profile Photo to cloudinary
 * @param {string} file - The file to be uploaded
 * @returns {string} - The uploaded file url
 */


export const uploadProfilePhoto = async (file) => {
    try {

        const options = {
            use_filename: true,
            unique_filename: false,
            folder: "profile_photos",
            overwrite: true,
        }

        const response = await cloudinary.uploader.upload(file.tempFilePath, options);

        // console.log(response);

        return response.secure_url;
    }
    catch (error) {
        console.log(error);

        throw new Error("Failed to upload Profile Photo" + error);
    }
}