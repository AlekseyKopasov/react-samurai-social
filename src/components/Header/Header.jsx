import React from 'react'
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__wrapper}>
          <div className={s["header__login-wrapper"]}>
            { props.isAuth ? <span>{props.login}</span>
              : <NavLink className={s["header__login-link"]} to="/login">Login</NavLink>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
