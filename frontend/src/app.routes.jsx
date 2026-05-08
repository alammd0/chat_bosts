import { createBrowserRouter } from "react-router";
import { Register } from "./features/auth/pages/Register";
import { Login } from "./features/auth/pages/Login";
import ProtectedRoute from "./features/auth/components/Protected";

const router = createBrowserRouter([
    {
        path : "/register",
        element : <Register />
    },

    {
        path : "/login",
        element : <Login />
    },

    {
        path : "/",
        element : <ProtectedRoute >
            <h1>Hello World</h1>
        </ProtectedRoute>
    }
])

export default router;