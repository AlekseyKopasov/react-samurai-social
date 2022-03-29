import {applyMiddleware, combineReducers, createStore} from 'redux'
import dialogsReducer from './reducers/dialogsReducer'
import profileReducer from './reducers/profileReducer'
import sidebarReducer from './reducers/sidebarReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import thunkMiddleware  from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers/appReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store
