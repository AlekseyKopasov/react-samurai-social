import { ResultCodes } from '../../api/api'
import { FormAction, stopSubmit } from 'redux-form'
import { PhotosType, PostType, ProfileType } from '../../types/types'
import { BaseThunkType, InferActionsTypes } from '../redux-store'
import { profileAPI } from '../../api/profile-api'

const initialState = {
  posts: [
    { id: 1, message: 'Mock', likesCount: 10 },
    { id: 2, message: 'Mock', likesCount: 11 },
    { id: 3, message: 'Mock', likesCount: 12 },
    { id: 4, message: 'Mock', likesCount: 13 },
    { id: 5, message: 'Mock', likesCount: 14 },
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
}

const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/PROFILE/ADD_POST':
      return {
        ...state,
        posts: [ ...state.posts, {
          id: Date.now(),
          message: action.newPost,
          likesCount: 0,
        } ],
      }

    case 'SN/PROFILE/DELETE_POST':
      return {
        ...state,
        posts: [ ...state.posts.filter(post => post.id !== action.postId) ],
      }

    case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      }

    case 'SN/PROFILE/SET_USER_PROFILE':
      return {
        ...state, profile: action.profile,
      }

    case 'SN/PROFILE/SET_STATUS': {
      return {
        ...state, status: action.status,
      }
    }

    default:
      return state
  }
}

export const actions = {
  addPost: (newPost: string) => ({ type: 'SN/PROFILE/ADD_POST', newPost } as const),

  deletePost: (postId: number) => ({ type: 'SN/PROFILE/DELETE_POST', postId } as const),

  savePhotoSuccess: (photos: PhotosType) => ({ type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos } as const),

  setStatus: (status: string) => ({ type: 'SN/PROFILE/SET_STATUS', status: status } as const),

  setUserProfile: (profile: ProfileType) => ({ type: 'SN/PROFILE/SET_USER_PROFILE', profile } as const),
}

export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(response))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(response))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.resultCode === ResultCodes.Success) {
    dispatch(actions.setStatus(status))
  }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.resultCode === ResultCodes.Success) {
    dispatch(actions.savePhotoSuccess(response.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)

  if (response.resultCode === ResultCodes.Success) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.messages[0] }))
    return Promise.reject(response.messages[0])
  }
}

export default profileReducer

type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
