// src/App.jsx
//import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar.jsx";
import Dashboard from "./pages/Dashboard";
import Explorer from "./pages/Explorer";
import TokenDetail from "./components/Explorer/TokenDetail.jsx";
import Alerts from "./pages/Alerts";
import Watchlist from "./pages/Watchlist";
import Multicharts from "./pages/Multicharts";

function App() {
    return (
        <Router>
            <div className="App flex bg-[#151516]">
                <Sidebar />
                <div className="content flex-grow">
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/explorer" element={<Explorer />} />
                        <Route path="/token/:id" element={<TokenDetail />} />
                        <Route path="/alerts" element={<Alerts />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                        <Route path="/multicharts" element={<Multicharts />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
