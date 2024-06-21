//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthDetails, SignIn, SignUp } from "./components";

export function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/sign-in" element={<SignIn/>}/>
    //     <Route path="/sign-up" element={<SignUp/>}/>
    //     <Route path="/auth" element={<AuthDetails/>}/>
    //   </Routes>
    // </Router>
    <>
    <SignIn/>
    <SignUp/>
    <AuthDetails/>
    </>
  )
}

