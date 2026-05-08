import { useState } from "react"
import { Link } from "react-router"
import { useAuth } from "../hooks/useAuth";


export const Register =  () => {

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
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { name, username, email, password } = fromData;
            await handleRegister({ name, username, email, password });
            setFromData({
                name: "",
                username: "",
                email: "",
                password: ""
            })
        }
        catch (error) {
            throw new Error(error);
        }
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
            <div className="flex justify-center items-center mt-5 ">
                    <div className="bg-white max-w-[450px] w-full p-8 rounded-lg shadow-md space-y-2">
                        {/* Top Section */}
                        <div className="space-y-1">
                            <h2 className="text-2xl font-semibold font-style">Create Account</h2>
                            <p className="text-sm font-style text-gray-500">Join the AI Chatbot revolution</p>
                        </div>

                        {/* Register Form */}
                        <form onSubmit={handleSubmit} className="space-y-2">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-[16px] font-semibold font-style">Name: <sup className="text-red-700">*</sup></label>
                                <input type="text" name="name" id="name" 
                                    placeholder="Enter your full name"
                                    className=" outline-none border px-1 py-2 rounded-md text-[16px] hover:border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-offset-0 font-style"
                                    onChange={handleChange}
                                    value={fromData.name}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="username" className="text-[16px] font-semibold font-style">Username: <sup className="text-red-700">*</sup></label>
                                <input type="text" name="username" id="username"
                                    placeholder="Create a username" 
                                    className="outline-none border px-1 py-2 rounded-md text-[16px] hover:border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-offset-0 font-style" 
                                    onChange={handleChange}
                                    value={fromData.username}    
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-[16px] font-semibold font-style">Email: <sup className="text-red-700">*</sup></label>
                                <input type="email" name="email" id="email" 
                                    placeholder="Enter your email" 
                                    className="outline-none border px-1 py-2 rounded-md text-[16px] hover:border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-offset-0 font-style" 
                                    onChange={handleChange}
                                    value={fromData.email}
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="password" className="text-[16px] font-semibold font-style">Password: <sup className="text-red-700">*</sup></label>
                                <input type="password" name="password" id="password" 
                                    placeholder="Create a strong Password"
                                    className="outline-none border px-1 py-2 rounded-md text-[16px] hover:border-gray-500 focus:border-gray-500 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:ring-offset-0 font-style"
                                    onChange={handleChange}
                                    value={fromData.password}
                                />
                            </div>

                            <button className="bg-gray-900 w-full mt-3 text-white px-1 py-2 rounded-md font-style hover:bg-gray-700 cursor-pointer hover:scale-105 transition-all duration-200">
                                Create Account
                            </button>
                        </form>

                        <p className="text-center mt-5">
                            Already have an account? {" "} 
                            <Link to="/login" className="text-blue-500 font-style hover:underline">
                                Login to your account
                            </Link>
                        </p>

                    </div>
            </div>
        </main>
    )
}