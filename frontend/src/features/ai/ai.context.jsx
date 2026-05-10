import { createContext } from "react";
import { useState } from "react";

export const AIContext = createContext();

export const AIProvider = ({ children }) => {

    const [chats, setChats] = useState([]);

    const [currentChat, setCurrentChat] = useState(null);

    // Create New Chat
    const createNewChat = () => {

        const newChat = {
            title: "New Chat",
            messages: []
        };

        setChats((prev) => [newChat, ...prev]);

        setCurrentChat(newChat);
    };

    const [isLoading, setIsLoading] = useState(false);

    return (
        <AIContext.Provider value={{ chats, setChats, isLoading, setIsLoading, currentChat, setCurrentChat, createNewChat }} >
            {children}
        </AIContext.Provider>
    );
};