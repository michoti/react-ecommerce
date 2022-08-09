import React from 'react'
import { Navigate, Outlet, Route } from 'react-router-dom'

const AdminPrivateRoute = ({...rest}) => {
    const auth = Boolean(localStorage.getItem('auth_token'));

  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  )
}

export default AdminPrivateRoute