import React, {Component}  from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'

import {
  setCurrentPage,
  setUsers,
  toggleFollow,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../Redux/reducers/usersReducer'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum)
    this.props.toggleIsFetching(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.toggleIsFetching(false)
      })
  }

  render() {
    return (
      <>
        { this.props.isFetching && <Preloader /> }
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

export default connect(mapStateToProps, {
  toggleFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)
