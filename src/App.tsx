import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyNetwork, PostShare, Profile, EditProfile } from "./pages";
import { Login } from "./pages/login";
import { Logout } from "./components";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/post" element={<PostShare />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<EditProfile />} />
                <Route path="/mynetwork" element={<MyNetwork />} />
            </Routes>
        </Router>
    );
}
