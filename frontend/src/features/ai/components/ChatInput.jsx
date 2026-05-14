import { useState } from "react";
import { SendHorizonal, SendHorizontal } from "lucide-react";
import { useChat } from "../hooks/useChat";

export const ChatInput = () => {

    const [message, setMessage] = useState("");

    const { currentChat, handleSendMessage, isLoading, handleAddedChat } = useChat();

    const chatId = currentChat?.id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!message.trim()) return;

        if(!chatId){
            await handleSendMessage({
                title: currentChat?.title || "New Chat",
                message
            });
        } else {
            await handleAddedChat({
                id : chatId,
                message
            })
        }

        setMessage("");
    };

    return (
        <div className="mb-6">
            <form
                onSubmit={handleSubmit}
                className="max-w-6xl mx-auto flex items-center gap-3"
            >

                {/* Input */}
                <input
                    type="text"
                    placeholder="Ask anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/10 text-white placeholder:text-gray-400 px-5 py-4 rounded-2xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
                />

                {/* Send Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white p-4 rounded-2xl transition-all duration-300 cursor-pointer"
                >
                    <SendHorizontal size={22} />
                </button>

            </form>
        </div>
    );
};