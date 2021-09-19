import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/Message'

const Dialogs = props => {
  const dialogsElems = props.dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>)

  const messagesElems = props.messages
    .map(m => <MessageItem message={`${m.message} - ${m.id}`}/>)

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogsItems}>
        { dialogsElems }
      </ul>

      <ul className={s.messages}>
        { messagesElems }
      </ul>
    </div>
  )
}

export default Dialogs
