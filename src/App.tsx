import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostShare } from "./pages";
import { Login } from "./pages/login";
import { Logout } from "./components";
import { Profile } from "./pages";
import { EditProfile } from "./pages";

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
            </Routes>
        </Router>
    );
}
