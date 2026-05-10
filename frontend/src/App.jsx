import { RouterProvider } from "react-router"
import router from "./app.routes"
import { AuthProvider } from "./features/auth/auth.context"
import { MainProvider } from "./MainProvider"


function App() {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  )
}

export default App
