import React  from 'react'
import {connect} from 'react-redux'
import * as axios from 'axios'

import {
  setCurrentPage,
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../Redux/reducers/usersReducer'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true)

    axios.get(`${BASE_URL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        'api-key': '766ef93a-df4d-40f1-a23d-13c33a1e889c'
      }
    })
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
        this.props.toggleIsFetching(false)
      })
  }

  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum)
    this.props.toggleIsFetching(true)

    axios.get(`${BASE_URL}/users?page=${pageNum}&count=${this.props.pageSize}`, {
      withCredentials: true,
      headers: {
        'api-key': '766ef93a-df4d-40f1-a23d-13c33a1e889c'
      }
    })
      .then(res => {
        this.props.setUsers(res.data.items)
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
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
})(UsersContainer)
