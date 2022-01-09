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
	login(data: any) {
		return http.request<LoginInterface>({
			url: `login`,
			method: 'post',
			data,
		})
	}
}

export default new UserApi()
