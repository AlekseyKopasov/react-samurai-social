import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/Message'
import DialogsReduxForm from './DialogsForm'

const Dialogs = (props) => {
  const state = props.dialogsPage
  const newMessageBody = state.newMessageBody

  const dialogsElems = state.dialogs
    .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

  const messagesElems = state.messages
    .map(m => <MessageItem message={m.message} key={m.id}/>)

  const onSubmit = (values) => {
    props.sendMessageCreator(values.message)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsWrap}>
        <ul className={s.dialogsItems}>
          { dialogsElems }
        </ul>

        <ul className={s.messages}>
          { messagesElems }
        </ul>
      </div>

      <div className={s.textareaWrap}>
        <DialogsReduxForm
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default Dialogs
