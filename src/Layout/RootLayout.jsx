import React from 'react'
import { Outlet } from "react-router-dom";
import MainNav from './Header/MainNav';
import SideNav from './SideNav/SideNav';

const RootLayout = () => {
  return (
    <>
        <MainNav/>
        <div className='home'>
          <SideNav/>
          <Outlet/>
        </div>
    </>
  )
}

export default RootLayout
