//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthDetails, SignIn, SignUp } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Login } from "./pages/login";
import { Logout } from "./components";
import { Profile } from "./pages";
import { EditProfile } from "./pages";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
            </Routes>
        </Router>
    );
}
