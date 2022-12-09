import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'

import {
  follow,
  unfollow,
  requestUsers,
} from '../../redux/reducers/usersReducer'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
  getUsers,
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
} from '../../redux/users-selectors'
import { UsersType } from '../../types/types'
import { AppStateType } from '../../redux/redux-store'

type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<UsersType>
  followingInProgress: Array<number>
}

type MapDispatchPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

type OwnPropsType = {
  pageTitle: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props
    getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNum: number) => {
    const { getUsers, pageSize } = this.props
    getUsers(pageNum, pageSize)
  }

  render() {
    return (
      <div className="container">
        <h2>{ this.props.pageTitle }</h2>
        { this.props.isFetching && <Preloader/> }
        <Users
          totalUsersCount={ this.props.totalUsersCount }
          pageSize={ this.props.pageSize }
          currentPage={ this.props.currentPage }
          onPageChanged={ this.onPageChanged }
          users={ this.props.users }
          follow={ this.props.follow }
          unfollow={ this.props.unfollow }
          followingInProgress={ this.props.followingInProgress }
        />
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  // TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
  connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
    mapStateToProps, {
      follow,
      unfollow,
      getUsers: requestUsers
    })
)(UsersContainer)
