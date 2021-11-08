import {usersAPI} from '../../api/api'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState =  {
  posts: [
    {id: 1, message: 'Mock', likesCount: 10},
    {id: 2, message: 'Mock', likesCount: 11},
    {id: 3, message: 'Mock', likesCount: 12},
    {id: 4, message: 'Mock', likesCount: 13},
    {id: 5, message: 'Mock', likesCount: 14},
  ],
  newPostText: 'test text from state',
  profile: null
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

    default: return state
  }
}
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}

export const getProfileTC = (userId) => {
  return (dispatch) => {
    usersAPI.getProfile(userId)
      .then(res => {
        dispatch(setUserProfile(res.data))
      })
  }
}


export default profileReducer
