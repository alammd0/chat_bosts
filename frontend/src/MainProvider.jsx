
import { AuthProvider } from "./features/auth/auth.context";
import { AIProvider } from "./features/ai/ai.context";

export const MainProvider = ({ children }) => {
    return (
        <AuthProvider>
            <AIProvider>
                {children}
            </AIProvider>
        </AuthProvider>
    )
}