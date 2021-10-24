import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(res => {
          props.setUsers(res.data.items)
        })
    }
  }

  return  <div className="users">
      {
        props.users.map(user =>
          <div key={user.id}>
            <img src={ user.photos.small !== null ? user.photos.small : userPhoto } alt={user.name}/>
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
