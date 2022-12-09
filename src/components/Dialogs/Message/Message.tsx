import React from 'react'
import s from '../Dialogs.module.css'

type PropsType = {
  message: string
}

const MessageItem: React.FC<PropsType> = ({ message }) => {
  return (
    <li className={ s.message }>{ message }</li>
  )
}

export default MessageItem
