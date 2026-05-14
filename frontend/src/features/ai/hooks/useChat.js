import { useContext } from "react";
import { AIContext } from "../ai.context";

import { createChat, getAllChats, getChat, sendMessage } from "../services/ai.api";

import { useNavigate } from "react-router";

export const useChat = () => {

    const context = useContext(AIContext);

    const { chats, setChats, isLoading, setIsLoading, currentChat, setCurrentChat, createNewChat} = context;

    const navigate = useNavigate();

    // ================= SEND MESSAGE =================

    const handleSendMessage = async ({ title, message }) => {

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

    const handleAddedChat = async ({ id, message }) => {
        try {

            setIsLoading(true);

            const response = await sendMessage({ id, message });

            const updatedChat = response?.chat;

            console.log(updatedChat);

            // Update Sidebar Chats
            setChats((prev) => {
               
                // check if the chat already Exits 
                const chatExits = prev.find(
                    chat => chat.id === updatedChat.id
                );


                // if the chat already Exits, update it
                if (chatExits) {
                    return prev.map((chat) => 
                        chat.id === updatedChat.id ? updatedChat : chat
                    )
                }

                // otherwise, add it to the chats array
                return [...prev, updatedChat];
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
        handleSendMessage,
        handleGetAllChats,
        createNewChat,
        handleGetChat,
        handleAddedChat
    };
};