import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthDetails, Footer, SignIn, SignUp } from "./components";

export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/auth" element={<AuthDetails/>}/>
        <Route path="/test" element={<Footer/>}/>
      </Routes>
    </Router>

  )
}
