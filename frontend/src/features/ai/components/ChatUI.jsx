import { useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import MarkdownRenderer from "../../../shared/components/MarkdownRenderer";

export const ChatUI = () => {

    const { currentChat } = useChat();

    const bottomRef = useRef(null);

    // Auto Scroll Bottom
    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [currentChat]);

    if (!currentChat) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 text-xl">
                <h1 className="text-5xl font-bold leading-tight">
                    Welcome Back
                </h1>

                <p className="text-gray-400 mt-5 text-lg">
                    Start chatting with your intelligent AI assistant
                </p>
            </div>
        );
    }

    return (
        <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">

                {
                    currentChat.messages.length === 0
                    ? (
                        <div className="h-full flex items-center justify-center text-gray-400">
                            No messages yet.
                        </div>
                    )
                    : (
                        currentChat.messages.map((msg, index) => {

                            const isUser = msg.role === "user";

                            return (
                                <div
                                    key={index}
                                    className={`flex ${
                                        isUser
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                                >

                                    <div
                                        className={`max-w-[75%] px-5 py-4 rounded-2xl shadow-lg overflow-hidden
                    
                                        ${
                                            isUser
                                            ? "bg-sky-500 text-white rounded-br-sm"
                                            : "bg-slate-800/80 border border-slate-700 text-gray-100 rounded-bl-sm"
                                        }
                                        
                                        `}
                                    >
                                        <MarkdownRenderer content={msg.content} />
                                    </div>

                                </div>
                            );
                        })
                    )
                }
            </div>
        </>
    );
};