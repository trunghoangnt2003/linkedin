//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthDetails, SignIn, SignUp } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Profile } from "./pages";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
               
            </Routes>
        </Router>
    );
}
