import {useState} from "react"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth,provider } from "../../firebase";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password,setPassWord] = useState("");
    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(userCredential =>{
            console.log(userCredential)
        }).catch(error => console.log(error.message))
    }
    const handleClick = () => {
        signInWithPopup(auth,provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            localStorage.setItem("user",JSON.stringify(user))
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    return (
        <div className="sign-in">
            <form onSubmit={signIn}>
                <h1>Log In</h1>
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
                <input type="submit" value="Log In" />
            </form>

            <button onClick={handleClick}>Signin with Google</button>
        </div>
    );
}