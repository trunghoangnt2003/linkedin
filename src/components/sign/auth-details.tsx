import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect , useState } from "react"
import { auth } from "../../firebase";
export const AuthDetails = () => {
    const [authUser,setAuthUser] = useState(null);
    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user);
            }else {
                setAuthUser(null);
            }
            
        });
        return () => {
            listen();
        }
    },[]);
    const userSignOut = () => {
        signOut(auth).then(()=>{}).catch((error)=>{console.log(error)});
    }
    return (
        
            <div> 
            
                <p>{`Sign In As: ${authUser?.email}`}</p>
                <button onClick={userSignOut}>Sign Out</button>
                : <></> 
            </div>
       
       
        
    )
}