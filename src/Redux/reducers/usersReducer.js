import {usersAPI} from '../../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u
        }),
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        }),
      }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id != action.userId)]
      }
    default:
      return state
  }
}

const setUsers = (users) => ({type: SET_USERS, users})
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count})
const follow = (userId) => ({type: FOLLOW, userId})
const unfollow = (userId) => ({type: UNFOLLOW, userId})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsersTC = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
      dispatch(setCurrentPage(currentPage))
    })
  }
}
export const unfollowTC = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersAPI.unfollow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(toggleFollowingInProgress(false, userId))
    })
  }
}
export const followTC = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))
    usersAPI.follow(userId).then(data => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toggleFollowingInProgress(false, userId))
    })
  }
}

export default usersReducer
