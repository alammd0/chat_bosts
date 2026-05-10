import { ChatInput } from "../components/ChatInput"
import { ChatUI } from "../components/ChatUI"
import { Sidebar } from "../components/Sidebar"


export const Chat = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 flex text-white">

            {/* Sidebar */}
            <Sidebar />

            <section className="ml-[280px] h-screen flex-1 flex flex-col bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white">
                {/* Chat Section */}
                <ChatUI />

                <ChatInput/>
            </section>
        </main>
    )
}