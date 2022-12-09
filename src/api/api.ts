import axios from 'axios'
import {UsersType} from '../types/types';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'api-key': 'c2c94160-7e8e-4222-9a81-8203e9560350'
  }
})

export type APIResponseType<D = {}, RC = ResultCodes> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

export enum ResultCodes {
  Success = 0,
  Error = 1
}

export enum ResultCodedForCaptcha {
  CaptchaIsRequired = 10
}

export type GetItemsType = {
  items: Array<UsersType>
  totalCount: number
  error: string | null
}
