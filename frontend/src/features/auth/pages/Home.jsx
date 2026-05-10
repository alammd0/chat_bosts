import { Link } from "react-router"

export const Home = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 flex items-center justify-center px-6">    
            <div className="max-w-4xl w-full text-center">

                {/* Badge */}
                <span className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-sm font-medium tracking-wide">
                    AI Powered Conversations
                </span>

                {/* Heading */}
                <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-tight text-white">
                    Welcome to
                    <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                        {" "}AI Chatbot
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    Experience the future of intelligent conversations with our modern AI assistant.
                    Ask questions, get instant answers, and boost your productivity effortlessly.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

                    <Link to="/login">
                        <button className="w-44 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/30 hover:scale-105 transition-all duration-300 cursor-pointer">
                            Login
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="w-44 py-3 rounded-xl border border-sky-400/30 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                            Sign Up
                        </button>
                    </Link>

                </div>

                {/* Bottom Stats */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
                        <h2 className="text-3xl font-bold text-sky-400">24/7</h2>
                        <p className="text-gray-300 mt-2">AI Availability</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
                        <h2 className="text-3xl font-bold text-sky-400">Fast</h2>
                        <p className="text-gray-300 mt-2">Instant Responses</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg">
                        <h2 className="text-3xl font-bold text-sky-400">Smart</h2>
                        <p className="text-gray-300 mt-2">Powered by MKA</p>
                    </div>

                </div>
            </div>
        </main>
    )
}