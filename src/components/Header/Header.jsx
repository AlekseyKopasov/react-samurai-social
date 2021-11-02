import React from 'react'
import s from'./Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <img src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png" alt=""/>
        <div className={s.headerLoginWrapper}>
          { props.isAuth ? <span>{props.login}</span>
            : <NavLink className={s.headerLoginLink} to="/login">Login</NavLink>}
        </div>
      </div>
    </header>
  )
}

export default Header
