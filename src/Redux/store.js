import profileReducer from './reducers/profile-reducer'
import messagesReducer from './reducers/messages-reducer'
import sidebarReducer from './reducers/sidebar-reducer'

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Mock', likesCount: 10},
        {id: 2, message: 'Mock', likesCount: 11},
        {id: 3, message: 'Mock', likesCount: 12},
        {id: 4, message: 'Mock', likesCount: 13},
        {id: 5, message: 'Mock', likesCount: 14},
      ],
      newPostText: 'test text from state'
    },
    messagesPage: {
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
    },
    sidebar: {},
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  _callSubscriber () {
    console.log('state changed')
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store;
