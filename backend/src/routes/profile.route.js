import express from 'express';
import { getProfile, updateProfile } from '../controllers/profile.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const profileRoutes = express.Router();

/**
 * @description: This Route is used to Get my Profile Details
 * @route : /api/profile
 * @method : GET
 * @access : Private
 */

profileRoutes.get("/", authMiddleware, getProfile)

/**
 * @description: This Route is used to Update my Profile Details
 * @route : /api/profile
 * @method : PUT
 * @access : Private
 */

profileRoutes.post("/", authMiddleware, updateProfile)

export default profileRoutes;