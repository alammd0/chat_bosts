import { useContext } from "react";
import { AIContext } from "../ai.context";

import { createChat, getAllChats, getChat, sendMessage } from "../services/ai.api";

import { useNavigate } from "react-router";

export const useChat = () => {

    const context = useContext(AIContext);

    const { chats, setChats, isLoading, setIsLoading, currentChat, setCurrentChat, createNewChat} = context;

    const navigate = useNavigate();

    // ================= SEND MESSAGE =================

    const handleCreateNewChat = async ({ title, message }) => {

        try {

            setIsLoading(true);

            const response = await createChat({ title, message });

            const updatedChat = response?.chat;

            setChats((prev) => [updatedChat, ...prev]);

            setCurrentChat(updatedChat);

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

    // ================= SEND MESSAGE - FOR UPDATE CHAT =================

    const handleUpdateMessage = async ({ id, message }) => {
        try {

            setIsLoading(true);

            const response = await sendMessage({ id, message });

            const updatedChat = response?.chat;

            console.log(updatedChat);

            setChats((prev) => {

                const chatExists = prev.find(
                    (chat) => chat._id === updatedChat._id
                );

                if(chatExists){
                    return prev.map((chat) =>

                        chat._id === updatedChat._id
                            ? updatedChat
                            : chat

                    );

                }

                return [updatedChat, ...prev];

            });

            setCurrentChat(updatedChat);
        }
        catch (error) {

            console.log(error);

        } finally {

            setIsLoading(false);
        }
    }

    return {
        chats,
        currentChat,
        isLoading,
        handleCreateNewChat,
        handleGetAllChats,
        createNewChat,
        handleGetChat,
        handleUpdateMessage
    };
};