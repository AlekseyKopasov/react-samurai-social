import { InferActionsTypes } from '../redux-store'

const initialState = {
  dialogs: [
    { id: 1, name: 'Hi!',  message: 'Message' },
    { id: 2, name: 'Mock',  message: 'Message' },
    { id: 3, name: 'Mock',  message: 'Message' },
    { id: 4, name: 'Mock',  message: 'Message' },
    { id: 5, name: 'Mock',  message: 'Message' },
    { id: 6, name: 'Mock',  message: 'Message' },
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Mock' },
    { id: 3, message: 'Mock' },
    { id: 4, message: 'Mock' },
    { id: 5, message: 'Mock' },
    { id: 6, message: 'Mock' },
  ] as Array<MessageType>,
}

const dialogsReducer = (
  state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND_MESSAGE':
      return {
        ...state,
        messages: [ ...state.messages, {
          id: Date.now(), message: action.newMessageBody
        } ],
      }

    default:
      return state
  }
}

export const actions = {
  sendMessage: (newMessageBody: string) => (
    { type: 'SN/DIALOGS/SEND_MESSAGE', newMessageBody } as const)
}

export default dialogsReducer

type MessageType = {
  id: number,
  message: string
}

type DialogsType = {
  id: number,
  name: string,
  message: string
}

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
