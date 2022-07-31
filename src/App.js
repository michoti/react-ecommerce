import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./assets/frontend/auth/Login";
import Register from "./assets/frontend/auth/Register";
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MasterLayout />}>
            <Route index path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
