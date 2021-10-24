import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <NavLink to="/profile" activeClassName="activeLink">Profile</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/dialogs" activeClassName="activeLink">Messages</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="">News</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="">Music</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="">Settings</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
