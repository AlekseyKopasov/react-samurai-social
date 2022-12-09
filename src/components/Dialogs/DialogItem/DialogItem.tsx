import React from 'react'
import s from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
  name: string
  id: number
}

const DialogItem: React.FC<PropsType> = ({ name, id }) => {
  const path = `/dialogs/${ id }`

  return (
    <li className={ s.dialogItem }>
      <NavLink to={ path } activeClassName={ s.activeLink }>{ name }</NavLink>
    </li>
  )
}

export default DialogItem
