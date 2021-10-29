const IS_FOLLOWED = 'IS_FOLLOWED'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_FOLLOWED:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: !u.followed}
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
    case SET_CURRENT_PAGE:
      return {
        ...state,
        users: action.users,
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      }
    default:
      return state
  }
}

export const toggleFollowAC = (userId) => ({type: IS_FOLLOWED, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count})

export default usersReducer
