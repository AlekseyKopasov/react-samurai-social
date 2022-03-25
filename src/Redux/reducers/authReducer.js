import {authAPI} from '../../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data}
    default: return state
  }
}

export const setAuthUserData = (userId, login, email, isAuth) => (
  { type: SET_USER_DATA, data: {userId, login, email, isAuth} }
)

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me()
      .then(res => {
        if (res.data.resultCode === 0) {
          const {id, email, login} = res.data.data
          dispatch(setAuthUserData(id, login, email, true))
        }
      })
  }}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(getAuthUserData())
        }
      })
  }}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })
  }}

export default authReducer
