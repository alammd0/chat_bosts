import { LogOut, MessageSquarePlus } from "lucide-react"
import { useChat } from "../hooks/useChat"


export const Sidebar = () => {

    const { createNewChat, isLoading, currentChat } = useChat();

    // get all chats

    

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

                {/* here Write Chat History Jo Backend Fetch kre enge */}
                <div className="mt-8 space-y-3">
                    {
                        currentChat
                        ? (
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-sm">
                                    {currentChat.title}
                                </span>
                                <span className="text-sm">
                                    {currentChat.messages.length} messages
                                </span>
                            </div>
                        )
                        : (
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-sm">
                                    No chats yet
                                </span>
                            </div>
                        )
                    }
                </div>
            </div>

            <button className="flex items-center justify-center gap-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 py-3 rounded-xl transition-all duration-300 cursor-pointer">
                <LogOut size={18} />
                Logout
            </button>

        </aside>
    )
}