import { APIResponseType, instance, ResultCodes, ResultCodedForCaptcha } from './api'

type MeResponseDataType = {
  id: number
  email: string
  login: string
}
type LoginResponseDataType = {
  userId: number
}
export const authAPI = {
  me() {
    return instance.get<APIResponseType<MeResponseDataType>>('auth/me').then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return instance.post<APIResponseType<LoginResponseDataType, ResultCodes | ResultCodedForCaptcha>>('auth/login', {email, password, rememberMe, captcha})
      .then(res => res.data)
  },
  logout() {
    return instance.delete<APIResponseType>('auth/login').then(res => res.data)
  },
}
