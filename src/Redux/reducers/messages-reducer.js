const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const messagesReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const messageBody = state.newMessageBody
      state.newMessageBody = ''

      const message = {
        id: Date.now(),
        message: messageBody
      }

      state.messages.push(message)
      return state

    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state

    default: return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY, body: text
  }
}

export default messagesReducer
