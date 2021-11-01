import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom'

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []

  for (let i = 1; i <= pageCount; i+= 1) {
    pages.push(i)
  }

  return  <div className={s.users}>
    <ul className={s.pagination}>
      { pages.map(p => {
        if (p <= 5) { // TODO dev only
          return <li className={s.paginationItem} key={p}>
            <a
              href="#"
              className={s.paginationLink + " " + (props.currentPage === p && s.selectedPage)}
              onClick={ () => {props.onPageChanged(p)} }
            >
              {p}
            </a>
          </li>
        }
        return false
      }) }
    </ul>

    {
      props.users.map(user =>
        <div key={user.id}>
          <NavLink to={'/profile/' + user.id}>
            <img src={ user.photos.small !== null ? user.photos.small : userPhoto } alt={user.name}/>
          </NavLink>
          <p>{user.status}</p>
          <p>{user.name}</p>
          <button onClick={ () => { props.toggleFollow(user.id) } }>
            {
              user.followed
                ? <span>Unfollow</span>
                : <span>Follow</span>
            }
          </button>
        </div>
      ) }
  </div>
}

export default Users
