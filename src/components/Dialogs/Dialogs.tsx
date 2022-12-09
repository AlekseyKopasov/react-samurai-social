import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import MessageItem from './Message/Message'
import DialogsReduxForm from './DialogsForm'
import { InitialStateType } from '../../redux/reducers/dialogsReducer'

type OwnPropsType = {
  dialogsPage: InitialStateType
  sendMessage: (newMessage: string) => void
}

const Dialogs: React.FC<OwnPropsType> = (props) => {
  const state = props.dialogsPage

  const dialogsElems = state.dialogs
    .map(d => <DialogItem name={ d.name } key={ d.id } id={ d.id }/>)

  const messagesElems = state.messages
    .map(m => <MessageItem message={ m.message } key={ m.id }/>)

  const onSubmit = (values: { message: string }) => {
    props.sendMessage(values.message)
    values.message = ''
  }

  return (
    <div className={ s.dialogs }>
      <div className={ s.dialogsWrap }>
        <ul className={ s.dialogsItems }>
          { dialogsElems }
        </ul>

        <ul className={ s.messages }>
          { messagesElems }
        </ul>
      </div>

      <div className={ s.textareaWrap }>
        <DialogsReduxForm
          onSubmit={ onSubmit }
        />
      </div>
    </div>
  )
}

export default Dialogs
