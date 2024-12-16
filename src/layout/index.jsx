import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className="bg-gray-900 min-h-screen text-white ">
      {/* Navbar */}
      <Navbar />
      
      {/* Məzmun */}
      <main className="py-8 ">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
