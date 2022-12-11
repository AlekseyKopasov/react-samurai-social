import React from 'react'
import styles from '../Users/Users.module.scss'
import { NavLink } from 'react-router-dom'
import UserLogoDefault from '../common/UserLogoDefault/UserLogoDefault'
import Button from '../common/Button/Button'
import { UsersType } from '../../types/types'

type PropsType = {
  user: UsersType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, followingInProgress, follow, unfollow }) => {
  return <li className={ styles.users__item }>
    <NavLink to={ '/profile/' + user.id } className={ styles.users__logo }>
      { user.photos.small !== null
        ? <img src={ user.photos.small } alt={ user.name }/>
        : <UserLogoDefault/>
      }
    </NavLink>

    <div className={ styles.users__info }>
      <p className={ styles.users__name }>Имя:
        <NavLink to={ '/profile/' + user.id }>
          <span>{ user.name }</span>
        </NavLink></p>
      <p className={ styles.users__status }>Статус: { user.status ? user.status : <span>Нет статуса</span> }</p>
    </div>

    { user.followed ?
      <Button
        disabled={ followingInProgress.some(id => id === user.id) }
        text={ <span>Отписаться</span> }
        btnClass="button__link"
        clickHandler={ () => unfollow(user.id) }
      />
      : <Button
        text={ <span>Подписаться</span> }
        disabled={ followingInProgress.some(id => id === user.id) }
        btnClass="button__link"
        clickHandler={ () => follow(user.id) }
      />
    }
  </li>
}

export default User
