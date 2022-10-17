import React,{ Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Loading from '../../Components/Loading'
import { ToastContainer } from 'react-toastify'
import Messenger from "../../Components/Messenger"


const Front = () => {
  return (
    <>
        <Header />
          <Suspense fallback={<Loading />}>
            <Outlet />
            <ToastContainer />
          </Suspense>
          <div><Messenger /></div>
        <Footer />
    </>
  )
}

export default Front