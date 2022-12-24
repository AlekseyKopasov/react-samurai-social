import { APIResponseType, GetItemsType, instance } from './api'
import { FilterType } from '../redux/reducers/usersReducer'

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10, {
    term = '', friend = null,
  }: FilterType) {
    return instance.get<GetItemsType>(`users?page=${ currentPage }&count=${ pageSize }&term=${ term }` + (friend === null) ? '' : `&friend=${ friend }`)
      .then(res => res.data)
  },
  follow(userId: number) {
    return instance.post<APIResponseType>(`follow/${ userId }`)
      .then(res => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${ userId }`)
      .then(res => res.data) as Promise<APIResponseType>
  },
}
