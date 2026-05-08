import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import BlocklistToken from '../models/blocklisttoken.model.js';

/**
 * @description: This controller is used to register a new use
 * @route : /register
 * @method : POST
 * @access : Public
*/

export const registerUser = async (req, res) => {
    try {

        const { name, email, username, password } = req.body;

        if(!name || !email || !username || !password){
            return res.status(400).json({
                message : "Please provide all the required fields",
                error : null
            })
        }

        // check if user already exists with the same email and username
        const alreadyExists = await User.findOne({
            $or : [
                { email },
                { username }
            ]
        });

        if(alreadyExists){
            return res.status(400).json({
                message : "User already exists",
                error : null
            })
        };

        // here hashed password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            username,
            password : hashedPassword
        });

        // here create a token 

        const payload = {
            id : user._id,
            username : user.username
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn : "1d"
        });

        res.cookie("token", token);

        return res.status(201).json({
            message : "User registered successfully",
            user : {
                id : user._id,
                name : user.name,
                email : user.email,
                username : user.username
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
 * @description: This controller is used to login a user
 * @route : /login
 * @method : POST
 * @access : Public
*/

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password){
            return res.status(400).json({
                message : "Please provide all the required fields",
                error : null
            })
        };

        const user = await User.findOne({
            email
        })

        if(!user){
            return res.status(400).json({
                message : "User not found",
                error : null
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({
                message : "Invalid password",
                error : null
            })
        }

        // here create a token 

        const payload = {
            id : user._id,
            username : user.username
        }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn : "1d"
        });

        res.cookie("token", token);

        return res.status(200).json({
            message : "User logged in successfully",
            user : {
                id : user._id,
                name : user.name,
                email : user.email,
                username : user.username
            },
            token : token
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
 * @description: This controller is used to logout a user
 * @route : /logout
 * @method : POST
 * @access : Public
*/

export const logoutUser = async (req, res) => {
    try {

        const token = req.cookies.token;

        // console.log(token);

        if(!token){
            return res.status(400).json({
                message : "Please login first",
                error : null
            })
        }

        if(token){
            await BlocklistToken.create({
                token
            })
        };

        res.clearCookie("token");

        return res.status(200).json({
            message : "User logged out successfully",
            token : null
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
 * @description: This controller is used to get a user
 * @route : /user
 * @method : GET
 * @access : private
*/

export const getMe = async (req, res) => {
    try {

        const userId = req.user.id;

        const user = await User.findById(userId);

        if(!user){
            return res.status(400).json({
                message : "User not found",
                error : null
            })
        }

        return res.status(200).json({
            message : "User fetched successfully",
            user : {
                id : user._id,
                name : user.name,
                email : user.email,
                username : user.username
            }
        })

    }catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
            error : error
        })
    }
}