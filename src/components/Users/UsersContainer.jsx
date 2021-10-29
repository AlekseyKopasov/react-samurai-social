import Users from './Users'
import {setCurrentPageAC, setUsersAC, toggleFollowAC, setTotalUsersCountAC} from '../../Redux/reducers/usersReducer'
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
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalUsersCount: (total) => {
      dispatch(setTotalUsersCountAC(total))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
