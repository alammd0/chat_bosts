import { createBrowserRouter } from "react-router";
import { Register } from "./features/auth/pages/Register";
import { Login } from "./features/auth/pages/Login";
import ProtectedRoute from "./shared/components/Protected";
import { Home } from "./features/auth/pages/Home";
import { Chat } from "./features/ai/page/Chat";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Home />
    },
    {
        path : "/register",
        element : <Register />
    },

    {
        path : "/login",
        element : <Login />
    },

    {
        path : "/chat",
        element : <ProtectedRoute>
            <Chat />
        </ProtectedRoute>
    }
])

export default router;