import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation/MainNavigation'

const HomeLayout = () => {
  return (
    <>
      <MainNavigation/>
      <Outlet/>
    </>
  )
}

export default HomeLayout
