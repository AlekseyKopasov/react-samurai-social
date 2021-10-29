import React, {Component}  from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'

import {setCurrentPageAC, setUsersAC, toggleFollowAC, setTotalUsersCountAC} from '../../Redux/reducers/usersReducer'
import Users from './Users'

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        toggleFollow={this.props.toggleFollow}
      />)
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
