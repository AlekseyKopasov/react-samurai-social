import {combineReducers, createStore} from 'redux'
import messagesReducer from './reducers/messages-reducer'
import profileReducer from './reducers/profile-reducer'
import sidebarReducer from './reducers/sidebar-reducer'

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  sidebar: sidebarReducer,
})

const store = createStore(reducers)

export default store
