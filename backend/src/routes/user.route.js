import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser,
    getMe
} from "../controllers/user.controller.js"

import { authMiddleware } from '../middlewares/auth.middleware.js';


const userRoutes = express.Router();


/**
 * @description: This route is used to register a new user
 * @route : /api/user/register
 * @method : POST
 * @access : Public
*/

userRoutes.post("/register", registerUser);

/**
 * @description: This route is used to login a user
 * @route : /api/user/login
 * @method : POST
 * @access : Public
*/

userRoutes.post("/login", loginUser);

/**
 * @description: This route is used to logout a user
 * @route : /api/user/logout
 * @method : POST
 * @access : Public
*/

userRoutes.get("/logout", logoutUser);

/**
 * @description: This route is used to get a user
 * @route : /api/user
 * @method : GET
 * @access : Public
*/

userRoutes.get("/me", authMiddleware, getMe);

export default userRoutes;