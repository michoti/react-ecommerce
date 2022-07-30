import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MasterLayout from "./layouts/admin/MasterLayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/admin/dashboard" element={<MasterLayout />} />
        </Routes>
      </Router>
      {/* <MasterLayout /> */}
      
    </div>
  );
}

export default App;
