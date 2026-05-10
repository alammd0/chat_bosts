import { Navigate } from "react-router";
import { useAuth } from "../../features/auth/hooks/useAuth";

export default function ProtectedRoute({ children }) {

    const { user, isLoading } = useAuth();

    // console.log(user)

    if (isLoading) {
        return (
            <main className="min-h-screen bg-sky-900/80 flex items-center justify-center">
                <div className="three-body">
                    <div className="three-body__dot"></div>
                    <div className="three-body__dot"></div> 
                    <div className="three-body__dot"></div>
                </div>
            </main>
        )
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}