import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthDetails, SignIn, SignUp } from "./components";
import { Test } from "./components/testApi/test";

export function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/auth" element={<AuthDetails />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </Router>
        </>
    );
}
