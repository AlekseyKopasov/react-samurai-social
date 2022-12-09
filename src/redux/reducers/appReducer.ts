import { getAuthUserData } from './authReducer'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from '../redux-store'

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/APP/INITIALIZED_SUCCESS':
      return { ...state, initialized: true }
    default:
      return state
  }
}

export const actions = {
  initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' } as const),
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const initializeApp = (): ThunkType => async (dispatch) => {
  await dispatch(getAuthUserData())
  await dispatch(actions.initializedSuccess())
}

export default appReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
