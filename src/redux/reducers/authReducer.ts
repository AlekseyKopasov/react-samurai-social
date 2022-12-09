import { ResultCodedForCaptcha, ResultCodes } from '../../api/api'
import { ThunkAction } from 'redux-thunk'
import { AppStateType, InferActionsTypes } from '../redux-store'
import { FormAction, stopSubmit } from 'redux-form'
import { CaptchaUrlType } from '../../types/types'
import { authAPI } from '../../api/authAPI'
import { securityAPI } from '../../api/security-api'

const initialState = {
  userId: 0 as number,
  login: null as string | null,
  email: null as string | null,
  isAuth: false,
  captchaUrl: undefined as CaptchaUrlType | undefined
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/AUTH/SET_USER_DATA':
      return { ...state, ...action.data }

    case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
      return { ...state, captchaUrl: action.captchaUrl }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (
    userId: number, login: string, email: string, isAuth: boolean) => (
    { type: 'SN/AUTH/SET_USER_DATA', data: { userId, login, email, isAuth } } as const
  ),

  getCaptchaUrlSuccess: (url: string) => (
    { type: 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', captchaUrl: { url } } as const
  ),
}

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let response = await authAPI.me()

  if (response.resultCode === ResultCodes.Success) {
    const { id, email, login } = response.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha)

  if (response.resultCode === ResultCodes.Success) {
    dispatch(getAuthUserData())
  } else {
    if (response.resultCode === ResultCodedForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    }

    let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }))
  }
}

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout()

  if (response.resultCode === ResultCodes.Success) {
    dispatch(actions.setAuthUserData(0, '', '', false))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes | FormAction>
