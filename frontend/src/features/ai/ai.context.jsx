import { createContext } from "react";
import { useState } from "react";

export const AIContext = createContext();

export const AIProvider = ({ children }) => {

    const [chats, setChats] = useState([]); // Here Store all conversations
    const [currentChat, setCurrentChat] = useState(null); // Here Store the current opened chat

    // Create New Chat
    const createNewChat = () => {

    setCurrentChat({
            title: "New Chat",
            messages: []
        });
    };

    const [isLoading, setIsLoading] = useState(false);

    return (
        <AIContext.Provider value={{ chats, setChats, isLoading, setIsLoading, currentChat, setCurrentChat, createNewChat}} >
            {children}
        </AIContext.Provider>
    );
};