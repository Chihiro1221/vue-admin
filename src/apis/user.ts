import { http } from '@/plugins/axios'
export interface User {
    name: string
    age: number
    avatar: string
}
export interface LoginInterface {
    token: string
}
class UserApi {
    info() {
        return http.request<User>({
            url: 'get',
        })
    }
    login() {
        return http.request<LoginInterface>({
            url: `login`,
        })
    }
}

export default new UserApi()
