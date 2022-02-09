import { http } from '@/plugins/axios'
export interface User {
  name: string
  age: number
  avatar: string
  permissions: string[]
}
export interface LoginInterface {
  token: string
}

export interface IFormDate {
  account: string
  password: string
}
export class UserApi {
  info() {
    return http.request<User>({
      url: 'user/info',
    })
  }
  login(data: IFormDate) {
    return http.request<LoginInterface>({
      url: `login`,
      method: 'post',
      data,
    })
  }
}

export default new UserApi()
