import React from 'react'
import logo from '../../src/logo.jpeg'
import './Header.scss'
import { Link } from 'react-router-dom'
import { ImSearch } from 'react-icons/im'
import Login from './Login'

const Header = () => {
  return (
    <>
      <nav className="header">
        <img src={logo} alt="logo" />

        <div>
          <Link to="/tvshows"> TV Shows</Link>
          <Link to="/movies"> Movies</Link>
          <Link to="/recent"> Recently Added</Link>
          <Link to="/list"> List</Link>
          <Link to="/login"> Login</Link>
        </div>
        <ImSearch />
      </nav>
    </>
  )
}

export default Header
