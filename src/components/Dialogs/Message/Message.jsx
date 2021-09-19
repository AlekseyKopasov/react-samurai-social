import React from 'react'
import s from '../Dialogs.module.css'

const MessageItem = props => {
  const {message} = props

  return (
    <li className={s.message}>{message}</li>
  )
}

export default MessageItem
