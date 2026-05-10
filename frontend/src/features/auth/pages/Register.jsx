import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

export const Register = () => {

    const { isLoading, handleRegister } = useAuth();

    const [fromData, setFromData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFromData({
            ...fromData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { name, username, email, password } = fromData;

            await handleRegister({
                name,
                username,
                email,
                password
            });

            setFromData({
                name: "",
                username: "",
                email: "",
                password: ""
            });

        } catch (error) {
            throw new Error(error);
        }
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

            {/* Register Card */}
            <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl p-6 max-w-md w-full">

                {/* Top Section */}
                <div className="text-center">

                    <div className="inline-block px-4 py-2 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-sm font-medium">
                        Join AI Revolution 🚀
                    </div>

                    <h1 className="text-4xl font-bold text-white mt-5">
                        Create Your
                        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                            {" "}Account
                        </span>
                    </h1>

                    <p className="text-gray-400 mt-3 text-sm">
                        Start intelligent conversations with AI
                    </p>

                </div>

                {/* Register Form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="name"
                            className="text-sm font-medium text-gray-300"
                        >
                            Full Name <sup className="text-red-700">*</sup>
                        </label>

                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your full name"
                            onChange={handleChange}
                            value={fromData.name}
                            required
                            className="bg-white/10 border border-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all duration-200"
                        />

                    </div>

                    {/* Username */}
                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="username"
                            className="text-sm font-medium text-gray-300"
                        >
                            Username <sup className="text-red-700">*</sup>
                        </label>

                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Create a username"
                            onChange={handleChange}
                            value={fromData.username}
                            required
                            className="bg-white/10 border border-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all duration-200"
                        />

                    </div>

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
                            onChange={handleChange}
                            value={fromData.email}
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
                            placeholder="Create a strong password"
                            onChange={handleChange}
                            value={fromData.password}
                            className="bg-white/10 border border-white/10 text-white placeholder:text-gray-400 px-4 py-3 rounded-xl outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30 transition-all duration-200"
                        />

                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                        Create Account
                    </button>

                </form>

                {/* Bottom Section */}
                <p className="text-center text-gray-400 mt-8 text-sm">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-sky-400 hover:text-sky-300 hover:underline font-medium"
                    >
                        Login here
                    </Link>
                </p>

            </div>

        </main>
    );
};