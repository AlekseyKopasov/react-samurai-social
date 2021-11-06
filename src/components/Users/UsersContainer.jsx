import React  from 'react'
import {connect} from 'react-redux'

import {
  setCurrentPage,
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
} from '../../Redux/reducers/usersReducer'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {usersApi} from '../../api/api'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)
    usersApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum)
    this.props.toggleIsFetching(true)

    usersApi.getUsers(pageNum, this.props.pageSize)
      .then(data => {
        this.props.setUsers(data.items)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return (
      <div className="container">
        { this.props.isFetching && <Preloader /> }
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingProgress={this.props.followingProgress}
        />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
})(UsersContainer)
