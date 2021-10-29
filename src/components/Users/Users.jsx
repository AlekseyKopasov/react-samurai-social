import React from 'react'
import s from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'
// jsonPlaceholder: 'https://jsonplaceholder.typicode.com/users/'
// samuraiApi: 'https://social-network.samuraijs.com/api/1.0/users'

class Users extends React.Component {
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
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                className={s.paginationLink + " " + (this.props.currentPage === p && s.selectedPage)}
                onClick={ () => {this.onPageChanged(p)} }
              >
                {p}
              </a>
            </li>
          }
          }) }
      </ul>

      {
        this.props.users.map(user =>
          <div key={user.id}>
            <img src={ user.photos.small !== null ? user.photos.small : userPhoto } alt={user.name}/>
            <p>{user.status}</p>
            <p>{user.name}</p>
            <button onClick={ () => { this.props.toggleFollow(user.id) } }>
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
}

export default Users
