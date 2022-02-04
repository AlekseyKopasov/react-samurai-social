import {profileAPI, usersAPI} from '../../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const UPDATE_STATUS = 'UPDATE_STATUS'

const initialState =  {
  posts: [
    {id: 1, message: 'Mock', likesCount: 10},
    {id: 2, message: 'Mock', likesCount: 11},
    {id: 3, message: 'Mock', likesCount: 12},
    {id: 4, message: 'Mock', likesCount: 13},
    {id: 5, message: 'Mock', likesCount: 14},
  ],
  newPostText: 'test text from state',
  profile: null,
  isAuth: false,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {
          id: Date.now(),
          message:  state.newPostText,
          likesCount: 0
        }],
        newPostText: '',
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      }

    case SET_USER_PROFILE:
      return {
        ...state, profile: action.profile
      }

    case SET_STATUS: {
      return {
        ...state, status: action.status
      }
    }

    case UPDATE_STATUS: {
      return {
        ...state, status: action.status
      }
    }

    default: return state
  }
}

export const addPost = () => ({type: ADD_POST})

export const updateNewPostText = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS, status: status
  }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(res => {
        dispatch(setUserProfile(res.data))
      })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(res => {
        dispatch(setStatus(res.statusText))
      })
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
  }
}


export default profileReducer
