import { Navigate, Outlet } from "react-router-dom"

export function AuthCheck() {
    const authenticated = JSON.parse(localStorage.getItem("fcbvttn-react-journaling-app-accountInfo")) 
    if(!authenticated) {
        // console.log("auth")
        return <Navigate to={"/login"} />
    }
    // console.log("not auth")
    return <Outlet />
}