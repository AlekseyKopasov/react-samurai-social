import { ResultCodes } from '../api/api'

export type PostType = {
  id: number
  message: string | null,
  likesCount: number | null
}

export type PhotosType = {
  small: string | null
  large: string | null
}

export type ContactsType = {
  github: string | null
  vk: string | null
  facebook: string | null
  instagram: string | null
  twitter: string | null
  website: string | null
  youtube: string | null
  mainLink: string | null
}

export type ProfileType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts: ContactsType
  photos: PhotosType
  aboutMe: string
}

export type UsersType = {
  name: string
  id: number
  photos: PhotosType
  status: string | null
  followed: boolean
}

export type CaptchaUrlType = {
  url: string | undefined
}

export type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

export type PostFormValuesType = {
  newPost: string
}

export type DialogFormValuesType = {
  message: string
}
