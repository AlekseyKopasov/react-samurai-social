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

  const updateMessageBodyHandler = event => {
    const text = event.target.value
    props.updateNewMessageCreator(text)
  }

  const sendMessageHandler = () => {
    props.sendMessageCreator()
  }
  const onSubmit = (formData) => {
    console.log(formData)
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
          updateMessageBodyHandler={updateMessageBodyHandler}
          newMessageBody={newMessageBody}
          sendMessageHandler={sendMessageHandler}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default Dialogs
