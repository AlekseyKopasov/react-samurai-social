import React from 'react'
import {sendMessageCreator, updateNewMessageCreator} from '../../Redux/reducers/messages-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = ({ store, dispatch }) => {

  const updateMessageBody = text => {
    dispatch(updateNewMessageCreator(text))
  }

  const sendMessage = () => {
    dispatch(sendMessageCreator())
  }

  return (
    <Dialogs
      messagesPage={store.messagesPage}
      updateMessageBody={updateMessageBody}
      sendMessage={sendMessage}
    />
  )
}

export default DialogsContainer
