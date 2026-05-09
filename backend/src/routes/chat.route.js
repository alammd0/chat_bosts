
import express from "express";
import { createChat, getAllChats, getChat} from "../controllers/chat.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js";

const chatRoutes = express.Router();

/**
 * @description: This Route is used to get all chats
 * @route : /api/chat
 * @method : GET
 * @access : Private
 */

chatRoutes.get("/", authMiddleware, getAllChats)


/**
 * @description: This Route is used to get a chat
 * @route : /api/chat/:id
 * @method : GET
 * @access : Private
 */
chatRoutes.get("/:id", authMiddleware, getAllChats)

/**
 * @description: This Route is used to create a new chat
 * @route : /api/chat
 * @method : POST
 * @access : Private
 */
chatRoutes.post("/", authMiddleware, createChat)

export default chatRoutes;