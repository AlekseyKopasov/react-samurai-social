const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState =  {
  posts: [
    {id: 1, message: 'Mock', likesCount: 10},
    {id: 2, message: 'Mock', likesCount: 11},
    {id: 3, message: 'Mock', likesCount: 12},
    {id: 4, message: 'Mock', likesCount: 13},
    {id: 5, message: 'Mock', likesCount: 14},
  ],
  newPostText: 'test text from state'
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

    default: return state
  }
}

export const addPostCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  }
}

export default profileReducer
