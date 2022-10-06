import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"


const Front = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Front