import { useState } from "react";
import { Link } from "react-router"
import { useAuth } from "../hooks/useAuth";


export const Login =  () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { isLoading, handleLogin } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        handleLogin({ email, password });
        setEmail("");
        setPassword("");
    }

    if (isLoading) {
        return (
            <main className="min-h-screen bg-sky-900/80">
                <div className="three-body">
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-sky-900/80">
            <div className="flex items-center justify-center flex-col pt-5">
                <h1 className="text-4xl font-bold text-white font-style mb-2">AI Chatbot</h1>
                <p className="text-[18px] font-semibold text-gray-300 font-sans">Intelligent conversations at your fingertips</p>
            </div>

            <div className="flex justify-center items-center mt-7">
                <div className="bg-white max-w-[450px] w-full p-8 rounded-lg shadow-md space-y-4">
                    {/* Top Section */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-semibold font-style">Welcome Back</h2>
                        <p className="text-sm font-style text-gray-500">Sign up to your AI Chatbot account</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="text-[16px] font-semibold font-style">Email: <sup className="text-red-700">*</sup></label>
                            <input type="email" name="email" id="email" 
                                placeholder="Enter your email" 
                                className="outline-none border px-1 py-2 rounded-md text-[16px] hover:border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-offset-0 font-style"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}    
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="text-[16px] font-semibold font-style">Password: <sup className="text-red-700">*</sup></label>
                            <input type="password" name="password" id="password" 
                                 placeholder="Create a strong Password"
                                 className="outline-none border px-1 py-2 rounded-md text-[16px] hover:border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-offset-0 font-style"
                                 onChange={(e) => setPassword(e.target.value)}
                                 value={password}
                            />
                        </div>

                        <button type="submit" className="bg-gray-900 w-full mt-3 text-white px-1 py-2 rounded-md font-style hover:bg-gray-700 cursor-pointer hover:scale-105 transition-all duration-200">
                            Login
                        </button>
                    </form>

                    <p className="text-center mt-7">
                        Don't have an account? {" "} 
                        <Link to="/register" className="text-blue-500 font-style hover:underline">
                            Create an account   
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    )
}