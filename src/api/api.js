import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'api-key': '766ef93a-df4d-40f1-a23d-13c33a1e889c'
  }
})

export const usersAPI = {
  getUsers(currentPage = 1 , pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(res => res.data)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(res => res.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
      .then(res => res.data)
  },
  getProfile(userId) {
    console.warn('Deprecated method. Use profileAPI object.')
    return profileAPI.getProfile(userId)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(newStatus) {
    return instance.put(`profile/status`, {status: newStatus})
  }
}

export const authAPI = {
  me() {
    return instance.get('auth/me')
  },
}
