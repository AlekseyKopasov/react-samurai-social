const IS_FOLLOWED = 'IS_FOLLOWED'
const SET_USERS = 'SET-USERS'

const initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 20,
  currentPage: 1
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
        users: [...state.users, ...action.users],
      }
    default:
      return state
  }
}

export const toggleFollowAC = (userId) => ({type: IS_FOLLOWED, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer
