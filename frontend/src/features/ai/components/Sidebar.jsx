import { LogOut, MessageSquarePlus } from "lucide-react"
import { useChat } from "../hooks/useChat"
import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";


export const Sidebar = () => {

    const { createNewChat, isLoading, currentChat, handleGetAllChats, handleGetChat, chats } = useChat();

    const { handleLogout } = useAuth();

    useEffect( () => {
        handleGetAllChats();
    }, []);
    
    return (
        <aside className="fixed left-0 top-0 h-screen w-[280px] border-r border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col justify-between">

            <div>

                <h1 className="text-2xl font-bold mb-8">
                    AI Chatbot
                </h1>

                <button onClick={createNewChat} className="w-full flex items-center gap-2 bg-sky-500 hover:bg-sky-400 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                    <MessageSquarePlus size={20} />
                    New Chat
                </button>

                <div className="mt-8 space-y-3 overflow-y-auto max-h-[500px] pr-1">

                    {
                        chats && chats.length > 0
                        ? (
                            chats.map((chat, index) => (
                                <div
                                    key={chat?._id || index}
                                    onClick={() => handleGetChat(chat?._id)}
                                    className={`p-3 rounded-xl cursor-pointer transition-all duration-300 border
                                        
                                        ${currentChat?._id === chat?._id
                                            ? "bg-sky-500/20 border-sky-500/40"
                                            : "bg-white/5 border-white/10 hover:bg-white/10"
                                        }
                                    `}
                                >
                                    <h3 className="text-sm font-medium truncate">
                                        {chat.title || "New Chat"}
                                    </h3>
                                </div>
                            ))
                        )
                        : (
                            <div className="text-sm text-gray-400">
                                No chats yet
                            </div>
                        )
                    }

                </div>
            </div>

            <button onClick={handleLogout} className="flex items-center justify-center gap-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                <LogOut size={18} />
                Logout
            </button>

        </aside>
    )
}