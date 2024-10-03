import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

const Home = () => {
  return (
    <div className="bg-[#f2f2f2] h-screen">
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Table />
      </div>
    </div>
  );
}

export default Home