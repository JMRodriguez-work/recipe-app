import React from 'react'
import { Navbar, Footer } from '../components/index'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
