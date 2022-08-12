import React from "react";
import { Route, Routes } from 'react-router-dom';
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import MasterLayout from "./layouts/admin/MasterLayout";
import { MainPageLayout } from "./layouts/frontend/MainPageLayout";
import axios from "axios";
import Home from "./pages/Home";
import RequireAuth from "./components/frontend/auth/RequireAuth";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<MainPageLayout />}>
              <Route index element={<Home />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
          </Route>

          {/* <Route element={<RequireAuth />}> */}
            <Route path="/admin" element={<MasterLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          {/* </Route> */}
          
          
          {/* <AdminPrivateRoute path='/admin' /> */}
        </Routes>
      
    </div>
  );
}

export default App;
