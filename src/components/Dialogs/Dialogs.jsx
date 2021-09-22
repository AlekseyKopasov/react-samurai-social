import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/Message'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/messages-reducer'

const Dialogs = props => {

  const state = props.store.getState().messagesPage

  const dialogsElems = state.dialogs
    .map(d => <DialogItem name={d.name} id={d.id}/>)

  const messagesElems = state.messages
    .map(m => <MessageItem message={m.message}/>)

  const updateMessageBodyHandler = event => {
    const text = event.target.value
    console.log(text)
    props.store.dispatch(updateNewMessageCreator(text))
  }

  const sendMessageHandler = () => {
    props.store.dispatch(sendMessageCreator())
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
          value={state.newMessageBody}
        />
        <button onClick={ sendMessageHandler }>Send Message</button>
      </div>
    </div>
  )
}

export default Dialogs
