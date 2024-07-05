import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
    const navigate = useNavigate();
    const userSignOut = () => {
        signOut(auth).then(()=>{}).catch((error)=>{console.log(error)});
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <button onClick={userSignOut}>Sign Out</button>
        </div>
    )
}