import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'api-key': '766ef93a-df4d-40f1-a23d-13c33a1e889c'
  }
})

export const usersApi = {
  getUsers(currentPage = 1 , pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
}

export const followApi = {
  unfollow(id) {
    return instance.delete(`follow/${id}`)
      .then(res => res.data)
  },

  follow(id) {
    return instance.post(`follow/${id}`)
      .then(res => res.data)
  },
}

