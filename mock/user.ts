import { Random } from 'mockjs'
import { MockMethod } from 'vite-plugin-mock'
export default [
	{
		url: '/api/get',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: '请求成功',
				type: 'success',
				result: {
					name: '行三',
					age: 18,
					avatar: 'images/avatar/1.jpg',
				},
			}
		},
	},
	{
		url: '/api/login',
		method: 'get',
		response: () => {
			return {
				code: 200,
				message: '登录成功',
				type: 'success',
				result: {
					token: Random.string(10),
				},
			}
		},
	},
] as MockMethod[]
