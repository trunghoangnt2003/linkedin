import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostShare } from "./pages";
import { Login } from "./pages/login";
import { Logout } from "./components";

export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/post" element={<PostShare/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/" element={<Logout/>}/>
      </Routes>
    </Router>

  )
}
