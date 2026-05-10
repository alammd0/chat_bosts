import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isLoading, handleLogin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin({ email, password });

        setEmail("");
        setPassword("");
    };

    if (isLoading) {
        return (
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 flex items-center justify-center">
                <div className="three-body">
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 flex items-center justify-center px-5 relative overflow-hidden">

            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

            {/* Login Card */}
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-8 max-w-md w-full">

                {/* Top Section */}
                <div className="text-center mb-8">

                    <div className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-sm font-medium">
                        Welcome Back 👋
                    </div>

                    <h1 className="text-4xl font-bold text-white mt-5">
                        Login to
                        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                            {" "}AI Chatbot
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-3 text-sm">
                        Intelligent conversations at your fingertips
                    </p>

                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-300"
                        >
                            Email Address <sup className="text-red-700">*</sup>
                        </label>

                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-white/10 border border-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all duration-200"
                        />

                    </div>

                    {/* Password */}
                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-300"
                        >
                            Password <sup className="text-red-700">*</sup>
                        </label>

                        <input
                            type="password"
                            name="password"
                            required
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-white/10 border border-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all duration-200"
                        />

                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-sky-400 hover:text-sky-300 hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                        Login
                    </button>

                </form>

                {/* Bottom Section */}
                <p className="text-center text-gray-400 mt-8 text-sm">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="text-sky-400 hover:text-sky-300 hover:underline font-medium"
                    >
                        Create Account
                    </Link>
                </p>

            </div>

        </main>
    );
};