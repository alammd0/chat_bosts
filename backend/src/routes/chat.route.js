
import express from "express";
import { createChat, getAllChats, getChat, sendMessage} from "../controllers/chat.controller.js"
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
chatRoutes.get("/:id", authMiddleware, getChat)

/**
 * @description: This Route is used to create a new chat
 * @route : /api/chat
 * @method : POST
 * @access : Private
 */
chatRoutes.post("/", authMiddleware, createChat)

/** 
 * @description: This Route to send a message to the chat
 * @route : /api/chat
 * @method : POST
 */

chatRoutes.post("/:id", authMiddleware, sendMessage)

export default chatRoutes;