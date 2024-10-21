import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      <button 
        className="md:hidden p-2 text-white bg-purple-800 rounded m-2" 
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className='bg-gray-100 p-4 flex-1'>{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
