import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

const MainLayout = ({children}) => {
  return (
      <div className="flex h-screen w-screen">
      <Sidebar />
      <div className=" flex w-full flex-col">
        <Navbar />
        <div className='bg-gray-100 p-4'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout