import { Button } from "@material-ui/core";
import { LockOpenOutlined } from "@material-ui/icons";
import { startGoogleLogin } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { localStorageKeyForAccountInfo } from "../../App";

export function Login() {
    
    const navigate = useNavigate()

    async function handleClick() {
        let accountInfo = await startGoogleLogin()
        localStorage.setItem(localStorageKeyForAccountInfo, JSON.stringify(accountInfo))
        navigate("/")
    } 

    return (
        <div className="m-4">
            <Button onClick={handleClick} variant="contained" color="primary" endIcon={<LockOpenOutlined />}>Sign in using Google</Button>
        </div>
    )

}