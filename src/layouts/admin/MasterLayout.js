import React from 'react'
// import { Route, Routes, useRoutes } from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
// import Dashboard from '../../components/admin/Dashboard';
// import Profile from '../../components/admin/Profile';
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const MasterLayout = ({children}) => {
    // const myroutes = useRoutes([
    //     {path: '/admin/dashboard', element: <Dashboard />},
    //     {path: '/admin/profile', element: <Profile />},
    // ]);
  return (
    <div className='sb-nav-fixed'>
        <Navbar />   
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                       {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>     
    </div>
  )
}

export default MasterLayout