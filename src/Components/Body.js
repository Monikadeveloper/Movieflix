import React from 'react'
import Header from './Header'
import Home from './Home'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  )
}

export default Body
