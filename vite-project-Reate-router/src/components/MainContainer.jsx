import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <footer>footer data</footer>
    </div>
  )
}

export default MainContainer