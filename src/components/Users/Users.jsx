import React from 'react'
import styles from './Users.module.scss'
import {NavLink} from 'react-router-dom'
import UserLogoDefault from '../common/UserLogoDefault/UserLogoDefault'
import Pagination from '../Pagination/Pagination'
import Button from '../common/Button/Button'
import * as axios from 'axios'
import {followApi} from '../../api/api'
import {toggleFollowingProgress} from '../../Redux/reducers/usersReducer'

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i)
  }

  return <div className={styles.users}>
    {pages.length !== 0 && <Pagination
      pages={pages}
      onPageChanged={props.onPageChanged}
      currentPage={props.currentPage}
    />}
    <ul className={styles.users__list}>
      {
        props.users.map(user =>
          <li key={user.id} className={styles.users__item}>
            <NavLink to={'/profile/' + user.id} className={styles.users__logo}>
              {user.photos.small !== null
                ? <img src={user.photos.small} alt={user.name}/>
                : <UserLogoDefault/>
              }
            </NavLink>

            <div className={styles.users__info}>
              <p className={styles.users__name}>Имя:
                <NavLink to={'/profile/' + user.id}>
                  <span>{user.name}</span>
                </NavLink> </p>
              <p className={styles.users__status}>Статус: {user.status ? user.status : <span>Нет статуса</span>}</p>
            </div>

            {user.followed ?
              <Button
                disabled={props.followingProgress.some(id => id === user.id)}
                text={<span>Отписаться</span>}
                btnClass="button__link"
                clickHander={() => {
                  props.toggleFollowingProgress(true, user.id)
                  followApi.unfollow(user.id).then(data => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id)
                      }
                      props.toggleFollowingProgress(false, user.id)
                    })
                  }
                }
              />
              :  <Button
                text={<span>Подписаться</span>}
                disabled={props.followingProgress.some(id => id === user.id)}
                btnClass="button__link"
                clickHander={() => {
                  props.toggleFollowingProgress(true, user.id)
                  followApi.follow(user.id).then(data => {
                      if (data.resultCode === 0) {
                        props.follow(user.id)
                      }
                      props.toggleFollowingProgress(false, user.id)
                    })
                }}
              />
            }
          </li>
        )}
    </ul>
  </div>
}

export default Users
