import axios from "axios";
import apiInstance from "../../../shared/lib/axio";

/**
 * @description:  Here write the function to retrieve the AI assistant
 */

/**
 * @description: Here write the function to send the message to the AI assistant
 * @access: Private
 * @route: /api/chat
 */

export const sendMessage = async ({ title, message }) => {
    try {
        const response = await apiInstance.post("/chat", {
            title, 
            message
        });

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}

/**
 * @description: Here write the function to get all the chats
 * @access: Private
 * @route: /api/chat
 */

export const getAllChats = async () => {
    try {
        const response = await apiInstance.get("/chat");

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}

/**
 * @description: Here write the function to get a chat
 * @access: Private
 * @route: /api/chat/:id
 */

export const getChat = async (id) => {
    try {
        const response = await apiInstance.get(`/chat/${id}`);

        return response.data;
    }
    catch (error) {
        throw new Error(error)
    }
}