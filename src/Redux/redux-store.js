import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import messagesReducer from './reducers/messagesReducer'
import profileReducer from './reducers/profileReducer'
import sidebarReducer from './reducers/sidebarReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
