import React, {Component}  from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'

import {
  setCurrentPageAC,
  setUsersAC,
  toggleFollowAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
} from '../../Redux/reducers/usersReducer'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(true)
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
    this.props.toggleIsFetching(false)
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.toggleIsFetching(true)
        this.props.setUsers(res.data.items)
      })
    this.props.toggleIsFetching(false)
  }

  render() {
    return (
      <>
        { !this.props.isFetching && <Preloader /> }
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          toggleFollow={this.props.toggleFollow}
        />
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
