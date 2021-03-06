const SEND_MESSAGE = 'SEND-MESSAGE'

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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: Date.now(), message: action.newMessageBody
        }],
      }

    default: return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer
