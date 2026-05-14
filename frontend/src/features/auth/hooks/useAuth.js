import { useContext } from "react"
import { AuthContext } from "../auth.context"
import { loginUser, logoutUser, registerUser } from "../services/auth.api";
import { useNavigate } from "react-router";


export const useAuth = () => {
    const context = useContext(AuthContext);
    
    const { user, setUser, isLoading, setIsLoading } = context;
    // console.log(user);

    const navigate = useNavigate();

    const handleRegister = async ({ name, username, email, password }) => {
        try{
            setIsLoading(true);
            const response = await registerUser({ name, username, email, password });
            setUser(response.user);
            navigate("/login");
            setIsLoading(false);
        }
        catch (error) {
            throw new Error(error);
            setIsLoading(false);
        }
    }

    const handleLogin = async ({email, password}) => {
        try {
            setIsLoading(true);
            const response = await loginUser({email, password}); 
            setUser(response.user);
            navigate("/chat");
            setIsLoading(false);
        }
        catch(error){
            throw new Error(error)
            setIsLoading(false);
        }
    }

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            const response = await logoutUser();
            setUser(null);
            navigate("/");
            setIsLoading(false);
        }
        catch (error) {
            throw new Error(error);
            setIsLoading(false);
        }
    }

    const handleGetMe = async () => {
        try {
            setIsLoading(true)
            const response = await getMe();
            setUser(response.user);
            navigate("/me");
            setIsLoading(false);
        }
        catch (error) {
            throw new Error(error);
            setIsLoading(false);
        }
    }


    return {
        user,
        isLoading,
        handleRegister,
        handleLogin,
        handleLogout,
        handleGetMe
    };

}