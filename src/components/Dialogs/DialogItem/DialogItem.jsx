import React from 'react'
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = props => {
  const {name} = props
  const path = `/dialogs/${props.id}`

  return (
    <li className={s.dialogItem}>
      <NavLink to={path} activeClassName={s.activeLink}>{name}</NavLink>
    </li>
  )
}

export default DialogItem
