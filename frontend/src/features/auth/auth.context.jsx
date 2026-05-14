import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

     useEffect( () => {
        const getAndSetUser = async () => {
            try {
                const data = await getMe();
                
                setUser(data.user);
                setIsLoading(false);
            }
            catch(error){
                console.log(error);
                setIsLoading(false);
            }
        }
        getAndSetUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }} >
            {children}
        </AuthContext.Provider>
    );
};