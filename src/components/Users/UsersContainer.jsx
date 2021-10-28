import Users from './Users'
import {setUsersAC, toggleFollowAC} from '../../Redux/reducers/usersReducer'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFollow: (userId) => {
      dispatch(toggleFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
