import React,{ Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"
import Loading from '../../Components/Loading'


const Front = () => {
  return (
    <>
        <Header />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        <Footer />
    </>
  )
}

export default Front