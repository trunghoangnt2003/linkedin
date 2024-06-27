import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PostShare } from "./pages";
import { Login } from "./pages/login";

export function App() {

  return (
    <Router>
      <Routes>
        <Route path="/post" element={<PostShare/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>

  )
}
