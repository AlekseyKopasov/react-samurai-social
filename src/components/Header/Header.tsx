import React from 'react'
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom'

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<PropsType> = ({ isAuth, login, logout }) => {
  return (
    <header className={ s.header }>
      <div className="container">
        <div className={ s.header__wrapper }>
          <div className={ s["header__login-wrapper"] }>
            { isAuth
              ? <div><span>{ login }</span> - <button onClick={ logout }>Log out</button></div>
              : <NavLink className={ s["header__login-link"] } to="/login">Login</NavLink> }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
