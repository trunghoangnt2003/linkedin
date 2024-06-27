import clsx from "clsx";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

type Props = {
    classes?: {
        [key: string]: string;
    };
};

export const Login: React.FC<Props> = ({ classes }) => {
    const navigate = useNavigate();
    useEffect(() => {
        // Lấy giá trị từ localStorage
        const userLocalCheck = localStorage.getItem('user');
        // Nếu giá trị tồn tại, điều hướng đến trang chủ
        if (userLocalCheck) {
            navigate('/post');
        }
      }, []);
    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                //    const credential = GoogleAuthProvider.credentialFromResult(result);
                //    const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log("user", user);
                checkUser(user);
               navigate("/post");
            })
            .catch((error) => {
                console.log(error);
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };
    const checkUser = async (user) => {
        try{
            const id = encodeURIComponent('u#' + user.uid) 
            axios
            .get(
                `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user?id=` + id             
            )
            .then((res) => {
                console.log(res.data);
                if(res.data === null) {
                    console.log("Đăng ký");
                    registerUser(user);
                }else {
                    console.log("Đăng nhập");                    
                }
                localStorage.setItem("user",id);
                
            })
            .catch((err) => {
                console.log(err);
            });
        }catch(err){
            console.log(err);
        }
    }

    const registerUser = async (user) => {
        try {
          await axios.post(
            `https://sw382iocb5.execute-api.ap-southeast-1.amazonaws.com/Linkedin/user`,
            {
              id: 'u#' + user.uid,
              name: user.displayName,
              email: user.email,
              birth: '',
              phone: '',
              description: '',
              image: user.photoURL,
            }
          ).then(function (response) {
            console.log(response);
            console.log("Đăng ký thành công");
          })
          .catch(function (error) {
            console.log(error);
          });
          
        } catch (err) {
          console.log(err);
        }
      };
    
    return (
        <div className={clsx(classes?.container,"h-screen flex items-center justify-center")}>
            <div className="mt-5 rounded-lg shadow-md w-full max-w-sm h-full">
                <div className="flex justify-between items-center mb-20">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                        alt="LinkedIn"
                        className="w-8 h-8"
                    />
                    <div>
                        <button className="text-blue-700 font-semibold">
                            Join now
                        </button>
                        <button className="ml-4 text-blue-700 font-semibold">
                            Sign in
                        </button>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold mb-4 text-[#b24020]">
                    Welcome to your professional community
                </h2>
                <button
                    onClick={handleClick}
                    className="flex items-center justify-center w-full py-2 mb-4 border mt-10"
                >
                    <img
                        src="https://img.icons8.com/color/48/000000/google-logo.png"
                        alt="Google"
                        className="w-6 h-6 mr-2"
                    />
                    Continue with Google
                </button>

                <p className={clsx(classes?.footer,"text-xs text-gray-300 text-center ")}>
                    By clicking Continue to join or sign in, you agree to
                    LinkedIn’s
                    <a href="#" className="text-blue-700">
                        {" "}
                        User Agreement
                    </a>
                    ,
                    <a href="#" className="text-blue-700">
                        {" "}
                        Privacy Policy
                    </a>
                    , and
                    <a href="#" className="text-blue-700">
                        {" "}
                        Cookie Policy
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};
