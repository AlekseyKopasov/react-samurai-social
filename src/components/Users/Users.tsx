import React from 'react'
import styles from './Users.module.scss'
import Pagination from '../Pagination/Pagination'
import User from './User'
import { UsersType } from '../../types/types'

type PropsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  users: Array<UsersType>
}

const Users: React.FC<PropsType> = (props) => {
  const {
    totalUsersCount,
    pageSize,
    onPageChanged,
    currentPage,
    followingInProgress,
    follow,
    unfollow
  } = props

  return <div className={ styles.users }>

    <div>

    </div>

    { <Pagination
      totalItemsCount={ totalUsersCount }
      pageSize={ pageSize }
      currentPage={ currentPage }
      onPageChanged={ onPageChanged }
    /> }
    <ul className={ styles.users__list }>
      { props.users.map(user =>
          <User
            key={ user.id }
            user={ user }
            followingInProgress={ followingInProgress }
            follow={ follow }
            unfollow={ unfollow }
          />
        ) }
    </ul>
  </div>
}

export default Users
