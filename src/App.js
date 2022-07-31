import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/dashboard" element={<MasterLayout />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Routes>
      </Router>
      {/* <MasterLayout /> */}
      
    </div>
  );
}

export default App;
