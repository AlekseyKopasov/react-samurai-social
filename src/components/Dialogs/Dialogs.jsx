import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/Message'

const Dialogs = (props) => {
  const state = props.dialogsPage
  const newMessageBody = state.newMessageBody

  const dialogsElems = state.dialogs
    .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

  const messagesElems = state.messages
    .map(m => <MessageItem message={m.message} key={m.id}/>)

  const updateMessageBodyHandler = event => {
    const text = event.target.value
    props.updateNewMessageCreator(text)
  }

  const sendMessageHandler = () => {
    props.sendMessageCreator()
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
        <textarea
          onChange={updateMessageBodyHandler}
          value={newMessageBody}
        />
        <button onClick={ sendMessageHandler }>Send Message</button>
      </div>
    </div>
  )
}

export default Dialogs
