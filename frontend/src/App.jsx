import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <Router>
            <Header />
            <div className="appMainContainer">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
