import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Page404 from "./pages/Page404/Page404";

/**
 * The root component of the application.
 *
 * @returns {JSX.Element} The rendered App component
 */

function App() {
    return (
        <Router>
            <Header />
            <div className="appMainContainer">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
