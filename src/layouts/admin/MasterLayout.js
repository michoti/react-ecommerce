import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { useAuth } from '../../Features/AppContext';
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


const MasterLayout = () => {
   const {auth} = useAuth();
   const location = useLocation();

  return (
    <div className='sb-nav-fixed'>
        <Navbar />   
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main>
                       { auth?.auth_name ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />}
                    </main>
                    <Footer />
                </div>
            </div>
        </div>     
    </div>
  )
}

export default MasterLayout