import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router";
import { SingleChatUI } from "../components/SingleChatUI";
import { ChatInput } from "../components/ChatInput";


export const SingleChat = () => {

    // Fetch the chat from the URL
    const { id } = useParams();

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 flex text-white">
            {/* Sidebar */}
            <Sidebar />

            <section className="ml-[280px] h-screen flex-1 flex flex-col bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white">
                <SingleChatUI id = {id} />

                <ChatInput />
            </section>
        </main>
    )
}