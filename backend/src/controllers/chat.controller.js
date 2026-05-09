import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";
import { getGroqChatCompletion } from "../services/ai.service.js";

/**
* @description : This Controller is used to Create a new Chat or a New Conversation between a User and an AI
* @route : /chat
* @method : POST
* @access : Private
*/

export const createChat = async (req, res) => {
    try {
        const { title, message } = req.body;

        const userId = req.user.id;

        if(!message){
            return res.status(400).json({
                message : "Please provide a message",
                error : null
            })
        }

        const findUser = await User.findById(userId);

        if(!findUser){
            return res.status(400).json({
                message : "User not found",
                error : null
            })
        }

        const aiResponse = await getGroqChatCompletion(message);

        const chat = await Chat.create({
            title : title,
            userId : userId,
            messages : [
                {
                    role : "user",
                    content : message
                },
                {
                    role : "assistant",
                    content : aiResponse
                }
            ]
        });

        return res.status(201).json({
            message : "Chat created successfully",
            chat : {
                id : chat._id,
                title : chat.title,
                userId : chat.userId,
                messages : chat.messages
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            message : "Server error",
            error : error
        })
    }
}

/**
 * @description : This Controller is used to Get All Chats
 * @route : /chat
 * @method : GET
 * @access : Private
 */

export const getAllChats = async(req, res) => {
    try {
        const userId = req.user.id;

        const chats = await Chat.find({
            userId : userId
        });

        if(!chats){
            return res.status(400).json({
                message : "Chats not found",
                error : null
            })
        }

        return res.status(200).json({
            message : "Chats fetched successfully",
            chats : chats
        });
    }
    catch (error) {
        return res.status(500).json({
            message : "Server error",
            error : error
        })
    }
}

/**
 * @description : This Controller is used to Get a Chat
 * @route : /chat/:id
 * @method : GET
 * @access : Private
 */

export const getChat = async(req, res) => {
    try {
        const { id } = req.params;

        const chat = await Chat.findById(id);

        if(!chat){
            return res.status(400).json({
                message : "Chat not found",
                error : null
            })
        }

        return res.status(200).json({
            message : "Chat fetched successfully",
            chat : {
                id : chat._id,
                title : chat.title,
                userId : chat.userId,
                messages : chat.messages
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            message : "Server error",
            error : error
        })
    }
}

