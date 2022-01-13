import userApi, { User } from '@/apis/userApi'
import { defineStore } from 'pinia'
export const userStore = defineStore('userStore', {
	state: () => ({
		info: {} as null | User,
	}),
	actions: {
		async getUserInfo() {
			this.info = await (await userApi.info()).result
		},
	},
})
