import { useContext } from "react";
import { AIContext } from "../ai.context";

import { sendMessage, getAllChats, getChat } from "../services/ai.api";

import { useNavigate } from "react-router";

export const useChat = () => {

    const context = useContext(AIContext);

    const { chats, setChats, isLoading, setIsLoading, currentChat, setCurrentChat, createNewChat } = context;

    const navigate = useNavigate();

    // ================= SEND MESSAGE =================

    const handleSendMessage = async ({ title, message }) => {
        try {

            setIsLoading(true);

            const response = await sendMessage({
                title,
                message
            });

            // console.log(response);

            // Add new chat to sidebar
            setChats((prev) => [response.chat, ...prev]);

            // Open current chat
            setCurrentChat((prev) => ({
                ...prev,
                ...response.chat,
                messages: [
                    ...(prev?.messages || []),
                    ...response.chat.messages
                ]
            }));

            navigate(`/chat`);

        } catch (error) {

            console.log(error);

        } finally {

            setIsLoading(false);
        }
    };

    // ================= GET ALL CHATS =================

    const handleGetAllChats = async () => {

        try {

            setIsLoading(true);

            const response = await getAllChats();

            setChats(response.chats);

        } catch (error) {

            console.log(error);

        } finally {

            setIsLoading(false);
        }
    };

    // ================= GET SINGLE CHAT =================

    const handleGetChat = async (id) => {

        try {

            setIsLoading(true);

            const response = await getChat(id);

            // Set current opened chat
            setCurrentChat(response.chat);

            navigate(`/chat/${id}`);

        } catch (error) {

            console.log(error);

        } finally {

            setIsLoading(false);
        }
    };

    return {
        chats,
        currentChat,
        isLoading,
        handleSendMessage,
        handleGetAllChats,
        createNewChat,
        handleGetChat
    };
};