import React  from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import Footer from "../../Components/Footer"


const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Admin