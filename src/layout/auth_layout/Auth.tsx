import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBar from '../slide-bar'

const Auth = () => {
  return (
    <div>
      <SlideBar />
      <Outlet />
    </div>
  )
}

export default Auth
