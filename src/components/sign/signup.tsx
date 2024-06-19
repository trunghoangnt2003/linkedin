import {useState} from "react"
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../../firebase";
export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password,setPassWord] = useState("");

    const signUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential =>{
            console.log(userCredential)
        }).catch(error => console.log(error.message))
    }
    return (
        <div className="sign-in">
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassWord(e.target.value)}
                />
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    );
}