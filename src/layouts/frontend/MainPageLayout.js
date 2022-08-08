import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNavbar from './TopNavbar'

export const MainPageLayout = () => {
  return (
    <>
    <TopNavbar />
    <Outlet />
    </>
  )
}
