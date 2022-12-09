import { updateObjectInArray } from '../../utils/object-helpers'
import { UsersType } from '../../types/types'
import { InferActionsTypes, BaseThunkType } from '../redux-store'
import { Dispatch } from 'redux'
import { usersAPI } from '../../api/users-api'
import { APIResponseType, ResultCodes } from '../../api/api'

const InitialState = {
  users: [] as Array<UsersType>,
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number> // array of users id`s
}

const usersReducer = (state = InitialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'SN/USERS/FOLLOW':
      return {
        ...state,
        // @ts-ignore
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
      }
    case 'SN/USERS/UNFOLLOW':
      return {
        ...state,
        // @ts-ignore
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
      }
    case 'SN/USERS/SET_USERS':
      return {
        ...state,
        users: action.users,
      }
    case 'SN/USERS/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case 'SN/USERS/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.count,
      }
    case 'SN/USERS/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [ ...state.followingInProgress, action.userId ]
          : [ ...state.followingInProgress.filter(id => id !== action.userId) ]
      }
    default:
      return state
  }
}

export const actions = {
  setUsers: (users: Array<UsersType>) => ({ type: 'SN/USERS/SET_USERS', users } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({ type: 'SN/USERS/TOGGLE_IS_FETCHING', isFetching } as const),

  setTotalUsersCount: (count: number) => ({
    type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
    count
  } as const),

  followSuccess: (userId: number) => ({ type: 'SN/USERS/FOLLOW', userId } as const),

  unfollowSuccess: (userId: number) => ({ type: 'SN/USERS/UNFOLLOW', userId } as const),

  setCurrentPage: (currentPage: number) => ({ type: 'SN/USERS/SET_CURRENT_PAGE', currentPage } as const),

  toggleFollowingProgress:
    (isFetching: boolean, userId: number) =>
      ({ type: 'SN/USERS/TOGGLE_FOLLOWING_IN_PROGRESS', isFetching, userId } as const),
}

export const _followUnfollowFlow = async (
  dispatch: Dispatch<ActionsTypes>,
  userId: number,
  apiMethod: (userId: number) => Promise<APIResponseType>,
  actionCreator: (userId: number) => ActionsTypes) => {

  dispatch(actions.toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)

  if (response.resultCode === ResultCodes.Success) {
    dispatch(actionCreator(userId))
  }

  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
  }
}

export const requestUsers = (page: number, pageSize: number): ThunkType =>
  async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(response.items))
    dispatch(actions.setTotalUsersCount(response.totalCount))
  }

export default usersReducer

export type InitialStateType = typeof InitialState
type ThunkType = BaseThunkType<ActionsTypes>
type ActionsTypes = InferActionsTypes<typeof actions>
