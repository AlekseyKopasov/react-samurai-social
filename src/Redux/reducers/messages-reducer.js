const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

const initialState = {
  dialogs: [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Mock 2'},
    {id: 3, name: 'Mock 3'},
    {id: 4, name: 'Mock 4'},
    {id: 5, name: 'Mock 5'},
  ],
  messages: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Mock'},
    {id: 3, message: 'Mock'},
    {id: 4, message: 'Mock'},
    {id: 5, message: 'Mock'},
    {id: 6, message: 'Mock'},
  ],
  newMessageBody: 'test mess from state',
}

const messagesReducer = (state = initialState, action) => {
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
