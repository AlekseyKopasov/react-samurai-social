import React from 'react'
import s from './Navbar.module.scss'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <NavLink to="/profile" className={s.nav__link}>Profile</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/dialogs" className={s.nav__link} activeClassName={s.activeLink}>Messages</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="" className={s.nav__link}>News</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="" className={s.nav__link}>Music</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="" className={s.nav__link}>Settings</NavLink>
        </li>
        <li className={s.nav__item}>
          <NavLink to="/users" className={s.nav__link}>Users</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
