import React  from 'react'
import {connect} from 'react-redux'

import {
  followTC,
  unfollowTC,
  toggleFollowingInProgress, getUsersTC
} from '../../Redux/reducers/usersReducer'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {usersAPI} from '../../api/api'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNum) => {
    this.props.getUsersTC(pageNum, this.props.pageSize)
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
          follow={this.props.followTC}
          unfollow={this.props.unfollowTC}
          followingInProgress={this.props.followingInProgress}
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
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default connect(mapStateToProps, {
  followTC,
  unfollowTC,
  getUsersTC
})(UsersContainer)
