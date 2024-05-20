import { Navigate, Outlet } from "react-router-dom"
import { localStorageKeyForAccountInfo } from "../App"

export function AuthCheck() {
    const authenticated = JSON.parse(localStorage.getItem(localStorageKeyForAccountInfo)) 
    if(!authenticated) {
        return <Navigate to={"/login"} />
    }
    return <Outlet />
}